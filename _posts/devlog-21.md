---
title: "Devlog #21: Revamped Decryption"
header: 
  image: /assets/images/devlogs/devlog_21/event_header.png
tags:
  - Devlog
---

Welcome to the 21st devlog for Automation Station! I've spent the last month iterating on and adding new features to the game. Read on to discover the significant changes made to the decryption mechanic and explore the technical challenges I've recently tackled.

## Decryption Revisited

In the previous devlog ([devlog #20](/blog/devlog-20)), I introduced the new decryption mechanic. To recap, **Caches** scattered throughout the world require specific resources to unlock. Upon unlocking, an encrypted cartridge can be obtained, which requires a visit to a **Decrypter** for decryption. Once completed, a new building schematic or recipe is revealed.

Overall, I think this progression mechanic has a lot of potential. The game loop of discovering caches, collecting and crafting items to unlock them, and speculating about the contents of the cartridge is fun and rewarding. It also eliminates the need for a traditional tech tree, allowing players to carve their unique path through the game's technologies.

However, there were still a lot of details to figure out regarding how this whole process looks and feels. How does the player track the decryption process? How do they know what they unlocked? I set out to answer these questions.

### First Attempt

The most obvious missing piece was some amount of UI that told the player how far along the decryption was and what they unlocked when complete. My first attempt at this looked like this:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/y2yejpq.mp4" type="video/mp4" />
</video>

There is a lot to unpack in this gif. As a cartridge is placed in the Decrypter, a progress bar appears in the top left of the screen. Normally, it won't fill up quite so fast, so this serves as a way to track the progress of the decryption. Once completed, it flashes, signaling the opportunity to claim the new unlock by clicking on the UI.

There is a new set of shortcuts in the top right of the screen for navigation ease, especially for new players. Once a new building is unlocked, small notification bubbles will appear on the build mode shortcut and the newly unlocked building in the build mode toolbar.

### Identifying problems

While I was reasonably happy with how this was looking, I knew there were some problems with it. But I was having trouble figuring out exactly what the problems were or how to improve it. I decided to show a preview of the decryption mechanic to a friend and received some great critical feedback for some of the problems with this design.

The first problem was how the decryption progress bar felt awkward and inconsistent with the rest of the game. Generally, I opt for more diegetic and physical interactions instead of relying on UI. A great example of this is how the player has to physically slot a cartridge in the Decrypter to kick off the decryption instead of opening a menu. However, once the cartridge was slotted, it suddenly requires the player to watch and interact with a piece of UI in the top left of the screen. This is awkward and feels unnecessary. The main reason for doing it this way originally was simply for convenience. That way, the player could claim an unlock from anywhere on the map. But because the player has to be there to physically slot in the next cartridge, I don't think this is actually an important part of the design to keep.

The second piece of feedback was how the progress bar being visible at all times added a sense of urgency. When players can see the progress like this, they might be incentivized to minimize downtime on the Decrypter by being ready to immediately claim and slot the next cartridge. But this feeling of urgency is completely at odds with the cozy vibes that I'm hoping to give to players. Looking back on this now, I also think the UI is distracting, pulling your attention even when it's not finished.

The final piece of feedback was on the claim step. Once the decryption is finished, the player needs to claim the new unlock. But when they do so, they just see the small notification bubble on the build mode shortcut. This feels very anticlimactic, especially when this is supposed to be the player's reward for successfully unlocking and decrypting the cartridge.

Now you might be wondering why have the claim step at all. It would work perfectly fine for the new building to be unlocked as soon as the decryption is complete. However, I was worried that players might miss or dismiss a new unlock without the explicit step of needing to claim it. I also think there is a bigger dopamine hit when you have to manually click a button to get the reward. To double-check my instincts, I put out a poll on the game's Discord. The overwhelming majority said they preferred manually claiming new unlocks as well as not knowing what the unlocks are until they are claimed.

## Improving the flow

Based on this feedback and figuring out the problems with the current design, I iterated on the UI and flow until I came up with a second version that I was much happier with. Here is how it looks:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/5PH5Ulc.mp4" type="video/mp4" />
</video>

My fix for the awkward and inconsistent progress bar was to simply remove it. There is already a progress bar on the Decrypter itself, so players can still see how far along it is. I also added a little notification that appears when the decryption is complete, so that players don't have to constantly check progress. However, instead of claiming the unlock in the UI, you now have to click on the glowing cartridge instead.

As you can see, the claim step was completely redone. This time with a lot more particle effects 😁.

After you click on the cartridge, the glow pulse speeds up, and a beam of light shoots out of it. After a couple of seconds, the cartridge explodes into digital-particle-goodness. There is also a pop-up that tells you exactly what you unlocked right at the center of your screen where you can't miss it.

What are your thoughts on this version of the decryption mechanic? Does it feel like an improvement, or are there further adjustments needed? Share your feedback in the comments below or on Discord.

## Technical Tidbits

While the majority of the sprint was spent on the decryption feature, I also worked on some other behind-the-scenes features that I have been wanting to add for some time. This section will be a bit more technical, so feel free to skip if you aren't interested in the programming-focused aspects of the game's development.

### Creating a Flexible Trait System

A common programming challenge is figuring out how to design a system that is flexible in all the ways you want it. You don't want to overengineer something, but you also don't want to make it impossible to support a feature later on. My latest example of this was the slot restriction system.

Consider the crucible and the hopper. Both buildings have a slot that can hold items. The crucible is only able to smelt stuff like raw ore, so it makes sense to limit the slot to only smeltable things and prevent all other items from entering. Meanwhile, the hopper can accept any type of item. But once it contains an item, it can only accept more items of the same type. Both are examples of places where I want to restrict the item slot.

In a more object-oriented project, you could imagine making the crucible and hopper both inherit from some kind of slottable class. Then each building could override the behavior for checking if an incoming item is valid. This could work great, but it isn't really compatible with the data-oriented design philosophy. Automation Station is built on Unity's Data-oriented Tech Stack (or DOTS) and Entity Component System (ECS), which treats "objects" as purely data associated with a given entity ID. All of the logic happens inside of systems which aren't tied to any particular objects.

So how can I represent slot restrictions as data?

My solution up until now has been to have each building populate a list of valid item types for its slot. This could be changed at runtime so that, for example, the hopper can restrict its slot only after it receives its first item.

To support the crucible, I had to provide a list of all of the smeltable items types in the game. This may not seem like a problem, but I routinely would forget to update this list when I added a new ore or smeltable resource. Also, if I ever add mod support to the game, I would need a way to detect all of the new ores added by mods and ensure that they can all be placed in the crucible.

Ideally, I could just specify that the crucible accepts all items that are "smeltable". But how do I know what items are "smeltable"?

ECS allows items to have empty components on them which work great as a way to tag a group of entities that have some common property. However, there isn't an easy way to store a list of those types since types aren't really the same thing as data. (For any ECS experts reading, it is possible to store a list of component type indices, but these are not deterministic across builds. I also found this method to be a lot more complicated than my solution below)

My solution was to create something similar called a "Trait". Items could then store a list of traits on them that they belong to. Meanwhile, a building could store a list of valid traits for items in its slot. Thus, all ores have the "Smeltable" trait and the Crucible only allows items with the "Smeltable" trait.

So what exactly is a trait? Internally, I use something called a GUID, or Globally Unique Identifier, for each trait. This is just a 128-bit number that can uniquely identify something. Thus, each trait has a unique GUID. These are generated at random when I need a new trait. It turns out that 128 bits are big enough that the probability of two randomly generated GUIDs is effectively zero. Even if the player added thousands of mods, each adding a bunch of traits, there would be virtually no chance that there are any duplicate GUIDs.

Now I have a simple and flexible way to tag and refer to a group of entities that all share some property.

### Debug Menus

Up until recently, the game has been much closer to a creative sandbox game than an actual automation game with progression. All of the buildings used to be unlocked immediately, and I could just start building whatever I wanted. But with the new addition of the Decrypter, there is now a process to unlocking buildings. That means that when I want to test out something, I first need to unlock the required buildings.

Now obviously, I could just hack in a keyboard shortcut to unlock all buildings with a single keypress. In fact, that is what I did at first. But, over the game's development, I've added so many of these that I'm starting to forget what key does what. This solution simply doesn't scale well.

Ideally, all of these kinds of keyboard shortcuts would instead have corresponding settings and buttons in some kind of debug UI that I could easily open and browse in the game. But if you've worked on any kind of UI before, you know that adding UI is almost never easy, and definitely not for me.

Despite that, I realized that I really should spend some time to create a little debug settings menu instead of adding yet-another-shortcut. But in the process of doing so, I realized that I was doing a lot of similar steps. For each debug setting I wanted to add, I would add either a checkbox, slider, textbox, or button and then wire it up to the piece of data I wanted it to. Once I see that kind of repetition, the programmer and automation-game-player in me instantly wants to try and figure out how to automate it.

So... that's what I did. Now this may not seem like the highest priority feature to spend my time on, and you'd be right. But I had a lot of fun conquering this programming puzzle, and I think the final result will actually save me a lot of time in the long run.

Here is what the debug menu looks like:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/pvodITR.mp4" type="video/mp4" />
</video>

As you can see, the debug menu automatically updates to reflect the game. Meanwhile, I can interact with the menu to update the game. The data is synced in both directions automatically.

I realize that this doesn't look like much, but the magic is how it was created. To add the "Tick Progress" slider, I simply added a few C# attributes to the definition for the existing game component that stores the current tick progress. Here is what the code looks like:

```cs
public struct Clock : IComponentData
{
    public double ElapsedTicks;

    public float DeltaTick;

    [DebugMenu]
    [Category("Clock")]
    [MinMaxSlider(0, 1)]
    [ReadOnly]
    public float TickProgress
    {
        get
        {
            float fraction = (float)math.frac(ElapsedTicks);
            return fraction > 0 ? fraction : 1.0f;
        }
    }
}
```

For the tick rate buttons, I have the following:

```cs
public struct DebugSettings : IComponentData
{
    [DebugMenu]
    [Category("Clock")]
    public ButtonEvent SpeedUpTick;

    [DebugMenu]
    [Category("Clock")]
    public ButtonEvent SlowDownTick;
}
```

The best part is how painless it is to add stuff to the debug menu. That means there is a half-decent chance I'll actually use it instead of resorting to print statements when I'm debugging. The only thing I had to do was add those attributes like `[DebugMenu]` and `[Category("Clock")]`. The rest of the stuff was already there for existing game systems. That is actually one of the most important goals of this system. The game code isn't aware of the debug menu and doesn't need to remember to update the debug menu when the underlying data changes.

After I had the debug menu working, I was able to easily add another debug feature I had been wanting using the same system. Basically, I can now hover any object in the game and pull up data on the object, such as its position, facing, altitude, etc. This can be extended by simply adding an attribute to any component type I want. I think this will be invaluable when I'm trying to debug something that is only happening in a build, so I can't use my normal debugging tools that are only available in the editor.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/7SVNaFi.mp4" type="video/mp4" />
</video>

If you are working on your own ECS project and thing this would be useful, please let me know. If there is enough interest, I'll open sourece the code for this debug menu system. 

## Wrap up

That's all for this devlog! Thanks for making it this far and hopefully I didn't bore you with all the technical details. In the next sprint, I will be continuing to work on the progression mechanics including island unlocking, so stay tuned for the next devlog! 

## Changelog:

Here are all the significant changes since the last devlog:
- Remove all EntityTypeAsset scriptable objects. All authoring scripts now reference prefabs instead of EntityTypeAssets.
- Rework Build menu to store entity types instead of indices to support a dynamic build menu
- Support adding buildings to Build menu at any point in the game
- Create a new system that tracks all unlocks and allows an object to be unlocked from any other system
- Build menu now only appears when a building has been unlocked'
- Create new "shortcut" UI in top right of screen for accessing pause menu and build mode
- Add control prompts to shortcuts
- Add notification bubble to build mode shortcut and building selector in toolbar when a new building has been unlocked
- Only show build mode shortcut after unlocking the first building
- Create interactble and animated progress bar UI for managing active cartridge decryption (later removed)
- Created new toast notification UI
- New toast notification system to add notifications from any system in the game
- Decrpter must now be interacted with to claim a cartridge that has finished being decrypted
- New decryption VFX
- Added support for delays in tween system
- Added support for making objects glow with a pulse animation
- Make cartridge glow when decryption is finished to help indicate that it should be interacted with
- Create new popup UI
- Add popup when a new building is unlocked
- Remove decryption UI, instead requiring player to interact with physical building instead of UI
- Update all packages
- New Trait system to mark objects with arbitrary tags, e.g. "smeltable"
- Rework Trait to store a GUID instead of enum to make them more flexible
- Convert runtime EntityType to store a GUID instead of a string. This improves performance of lookups and ensures unique entity types are globally unique.
- Change SlotRestriction to store a GUID representing either an entity type or trait.
- Update Decrypter slot restrictions to only allow cartridges to be placed inside.
- Remove item type from item router proposals
- Add display names to holograms
- Added new debug menu system that autopopulates based on the presence of a C# attribute on a field in singleton components. Automatically detects changes to component data or UI field and syncs in both directions.
- Updated debug menu system to support properties and entire components
- Added keyboard shortcut to show and hide debug menu
- Added fields to debug menu for controlling the camera, tick rate, unlocked all buildings, and giving items
- Refactored the debug menu system to support generic attribute-based UI generation with automatic binding to entity data
- Added a new inspect menu to show debug component data for an "inspected" entity
- Added new shortcut to inspect entity for debug information

Hope you all have a great week!

-Scott