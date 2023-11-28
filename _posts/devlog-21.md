---
title: "Devlog #21: Revamped Decryption"
header: 
  image: /assets/images/devlogs/devlog_21/event_header.png
tags:
  - Devlog
---

Welcome to the 21st devlog for Automation Station! The past month has been packed with numerous features, enhancements and refinements. The primary focus of this sprint was to finish implementing the decryption mechanic, although I ended up spending quite a bit of time iterating on the overall decryption flow, as you'll see below.

## Decription Revisited

In the last devlog ([devlog #20](/blog/devlog-20)), I showed off the new decryption mechanic which serves as the primary way to unlock new buildings and recipes in the game. To summarize, **Caches** are hidden throughput the world that must be unlocked with certain resources. Once unlocked, you'll be able to retrieve the encrypted cartridge inside. These cartridges must be taken to a **Decrypter** to be decrypted. After some time, the decryption will be complete and you'll be able to retrieve the new building schematic or recipe that was contained inside.

Overall, I'm pretty happy with this mechanic. It is quite satisfying to discover one of these caches and try to guess what you might unlock from the cartridge inside. I also like how it avoids the need for a traditional tech tree, instead allowing the player to feel like they are finding their own path through the game's technologies. 

## Trying a Decryption UI

What I showed off in the last devlog was a preview of how the process would look and behave. However, I had not implemented the actual functionality of unlocking a new building nor figured out what kind of UI would be necessary at different points in the decryption process. After relearning how to work with the UI framework and lot of fiddling with the visuals, I came up with this:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/y2yejpq.mp4" type="video/mp4" />
</video>

There is a lot to unpack in this gif. Firstly, you'll notice that as soon as a cartridge is placed in the Decrypter, a new progress bar appears in the top left of the screen. Normally it won't fill up quite so fast, so this serves as a way to track the progress of the decryption. Once complete, it will flash, prompting you to click on the UI to claim the new unlock. Once you do, the UI will update to show the building that was just unlocked for build mode.

Build mode can be opened with the Tab key like normal, but there is now a set of shortcuts in the top right that includes a button for build mode as well as the settings menu. I think having these buttons onscreen at all times helps new players learn how to navigate the menus. 

When the new building is unlocked, a little notification bubble appears on the build mode button as well as on the new building in the build mode toolbar. These serve as a trail of breadcrumbs to help you find the new thing they unlocked, which is especially useful later in the game when you have a bunch of buildings filling up the build mode toolbar.

## Identifying problems

While I was reasonably happy with how this was looking, I knew there were some problems with it. But I was having trouble figuring out exactly what the problems were or how to improve it. I decided to show a preview of the decryption mechanic to a friend and received some great critical feedback for some of the problems with this design.  

The first problem was how the decryption progress bar felt awkward and inconsistent with the rest of the game. Generally, I opt for more diegetic and physical interactions instead of relying on UI. A great example of this is how the player has to physically slot a cartridge in the decrypter to kick of the decryption instead of opening a menu. However, once the cartridge was slotted, it suddenly requires the player to watch and interact with a piece of UI in the top left of the screen. This is awkward and feels unnecessary. The main reason for doing it this way originally was simply for convenience. That way, the player could claim an unlock from anywhere on the map. But because the player has to be there to physically slot in the next cartridge, I don't think this is actually an important part of the design to keep.

The second piece of feedback was how the progress bar being visible at all times added a sense of urgency. When players can see the progress like this, they might be incentivized to minimize downtime on the Decrypter by being ready to immediately claim and slot the next cartridge. But this feeling of urgency is completely at odds with the cozy vibes that I'm hoping to give to players. Looking back on this now, I also think the UI is distracting, pulling your attention even when its not finished.

The final piece of feedback was on the claim step. Once the decryption is finished, the player needs to claim the new unlock. But when they do so, they just see the small notification bubble on the build mode shortcut. This feels very anticlimatic, especially when this is supposed to be the players reward for successfully unlocking and decrypting the cartridge. 

Now you might be wondering why have the claim step at all. It would work perfectly fine for the new building to be unlocked as soon as the decryption is complete. However, I was worried that players might miss or dismiss a new unlock without the explicit step of needing to claim it. I also think there is a bigger dopamine hit when you have to manually click a button to get the reward. To double check my instincts, I put out a poll on the game's Discord. The overwhelming majority said they preferred manually claiming new unlocks as well as not knowing what the unlocks are until they are claimed. 

## Improving the flow

Based on this feedback and figuring out the problems with the current design, I iterated on the UI and flow until I came up with a second version that I was much happier with. Here is how it looks:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/5PH5Ulc.mp4" type="video/mp4" />
</video>

My fix for the awkward and inconsistent progress bar was to simply remove it. There is already a progress bar on decrypter itself so players can still see how far along it is. I also added a little notification that appears when the decryption is complete so that player's don't have to constantly check progress. However, instead of claiming the unlock in the UI, you now have to click on the glowing cartridge instead.

As you can see, the claim step was completely redone. This time with a lot more particle effects 😁.

After you click on the cartridge, the glow pulse speeds up and a beam of light shoots out of it. After a couple of seconds, the cartridge explodes into digital-particle-goodness. There is also a pop up that tells you exactly what you unlocked right at the center of your screen where you can't miss it.

So, what do you think of this version of the decryption mechanic? Is it an improvement? Are there still things you would change? Let me know in the comments below or on Discord.

## Technical Tidbits

While the majority of the sprint was spent on the decryption feature, I also worked on some other behind-the-scenes features that I have been wanting to add for some time. This section will be a bit more technical, so feel free to skip if you aren't interested in the programming-focused aspects of the game's development.

### Creating a Flexible Trait System

A common programming challenge is figuring out how to design a system that is flexible in all the ways you want it. You don't want to overengineer something, but you also don't want to make it impossible to support a feature later on. My latest example of this was the slot restriction system.

Consider the crucible and the hopper. Both buildings have a slot that can hold items. The crucible is only able to smelt stuff like raw ore, so it makes sense to limit the slot to only smeltable things and prevent all other items from entering. Meanwhile, the hopper can accept any type of item. But once it contains an item, it can only accept more items of the same type. Both are examples of places where I want to restrict the item slot. 

In a more object-oriented project, you could imagine making the crucible and hopper both inherit from some kind of slottable class. Then each building could override the behavior for checking if an incoming item is valid. This could work great, but it isn't really compatible with the data-oriented design philosophy. Automation Station is built on Unity's Data-oriented Tech Stack (or DOTS) and Entity Component System (ECS), that treats "objects" as purely data associated with a given entity ID. All of the logic happens inside of systems which aren't tied to any particular objects. 

So how can I represent slot restrictions as data?

My solution up until now has been to have each building populate a list of valid item types for its slot. This could be changed at runtime so that, for example, the hopper can restrict its slot only after it receives its first item.

To support the crucible, I had to provide a list of all of the smeltable items types in the game. This may not seem like a problem, but I routinely would forget to update this list when I added a new ore or smeltable resource. Also, if I ever add mod support to the game, I would need a way to detect all of the new ores added by mods and ensure that they can all be placed in the crucible.

Ideally, I could just specify that the crucible accepts all items that are "smeltable". But how do I know what items are "smeltable"?

ECS allows items to have empty components on them which work great as a way to tag a group of entities that have some common property. However, there isn't an easy way to store a list of those types since types aren't really the same thing as data. *(For any ECS experts reading, it is possible to store a list of component type indices, but these are not deterministic across builds. I also found this method to be a lot more complicated than my solution below)*

My solution was to create something similar called a "Trait". Items could then store a list of traits on them that they belong to. Meanwhile, a building could store a list of valid traits for items in its slot. Thus, all ores have the "Smeltable" trait and the Crucible only allows items with the "Smeltable" trait.

So what exactly is a trait? Internally, I use something called a GUID, or Globally Unique Identifier, for each trait. This is just a 128 bit number that can uniquely identify something. Thus, each trait has a unique GUID. These are generated at random when I need a new trait. It turns out that 128 bits is big enough that the probability of two randomly generated GUIDs is effectively zero. Even if the player added thousands of mods, each adding a bunch of traits, there would be virtually no chance that there are any duplicate GUIDs.

Now I have a simple and flexible way to tag and refer to a group of entities that all share some property. 

### Debug Menus

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