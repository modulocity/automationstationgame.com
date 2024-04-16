---
title: "Devlog #26: Mission Tech Tree"
header: 
  image: /assets/images/devlogs/devlog_26/event_header.png
tags:
  - Devlog
---

Hello everyone! In this devlog, we're taking a deep dive into a brand new progression system. The caches and decrypters have been replaced with a mission system and tech tree, which completely changes how you'll unlock new buildings and progress through the game. We'll also touch on a new early-game crafting building called the "Fabricator". Let's dive in!

## Why Change the Progression System?

If you've been following the devlogs recently, you might remember the Caches and Decrypters that were introduced in [devlog #20](/blog/devlog-20). After unlocking a new island, the player could stumble across mysterious Caches. A Cache had to be unlocked by providing specific resources to the locks surrounding it. Once unlocked, the player would be able to retrieve a cartridge from the Cache, which they would take back to their base and deposit into a Decrypter. The Decrypter would get to work on decrypting the cartridge. Once complete, the player would be able to claim the newly unlocked technology, which typically was a new building that they could start using in their factory.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/cAtgdKo.mp4" type="video/mp4" />
</video>

At a high level, this idea had a lot of potential. By placing these caches on new islands, players were encouraged to expand and explore. You never knew what was inside a cache until you decrypted it, so there was also an element of anticipation when waiting for the decryption to finish and surprise when you finally got the unlock. Players also didn't need to fiddle with UI screens in order to make progress since everything took place inside the game world. This was especially great for me since UI design is something I struggle with and find incredibly time-consuming.

As great as this all sounded, when I finally got everything implemented and had people playtest it, there were some glaring issues. Firstly, the player had no idea what to do when they started the game. Even if a player discovered a Cache, it wasn't clear how to open it or even that they should. And after opening a Cache, they wouldn't know what to do with the cartridges inside. After watching them struggle, I had to just tell them what to do so that they could make progress.

Initially, I thought the game just needed a proper tutorial to guide the player through the early part of the game. I figured that once they understood the decryption mechanic, everything would click into place. But tutorials are notoriously difficult to get right. And even with an amazing tutorial, the decryption mechanic was completely opaque. Players never knew what they are working towards and had no way to strategize. A huge part of automation games is trying to figure out how to gradually automate more and more of your factory. Is it better to automate resource collection or smelting? The answer to that question greatly depends on the player and what they value. But if the game provides no information on the different progression paths available, players will feel like they are stumbling aimlessly in the dark and lose motivation.

Another source of frustration was how so many different systems required resources. In the early game, everything has to be smelted and crafted by hand, so most players only made what they needed. For example, one of the first island-unlocking pylons requires 10 iron ingots to unlock, so players would get to work smelting 10 ingots. Then after unlocking the island, they would find a cache requiring 5 iron ingots to unlock, so they had to go back and smelt 5 more ingots. After unlocking the cache and decrypting the cartridge, they would unlock the Burner, which requires even more iron ingots to construct. The problem here was that too many different systems were asking for resources, and none of the future costs were known. Players would craft what they needed, having no idea that they'll need more in a few minutes.

To summarize, the main issues were as follows:

1. Caches, Locks, and Decrypters were unintuitive and required a lot of hand-holding.
2. The cartridge decryption mechanic was completely opaque, preventing players from planning and strategizing.
3. Too many surprise resource sinks, requiring you to repeat manual steps too often.

## What Are Other Games Doing?

After identifying these issues with the old progression system, it was clear that it needed a complete rework. Rather than trying to reinvent the wheel, I first looked at how other automation and base-building games handle progression. Most of them have some kind of technology tree where you can see some or all of the available technologies in the game. This allows players to identify unlocks that would be most beneficial to them. It also provides a clear set of objectives for the player to work towards so that they are never left confused about what to do next.

<figure class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/devlogs/devlog_26/factorio_technologies.png" alt="Factorio Technology Screen">
  <figcaption>Factorio's Technology Screen</figcaption>
</figure> 

The main difference between these games is how the technologies are unlocked. For example, in Satisfactory, you need to craft and collect a specific set of resources and trade them in for an unlock. In Factorio, you instead need to craft "science packs" which, when deposited into a science lab, will work incrementally towards the current active research over time.

These two progression systems both act as the primary resource sink in the game, consuming the bulk of your factory's output in exchange for progression. In other words, the main purpose of your factory is to produce the items or science packs required for the next set of unlocks. However, when we look beyond the automation genre, we find games that handle this differently. The unlocks in Forager are tied to the player's level which grows from just about everything. But this is mostly orthogonal to the crafting and factory buildings you build to help create new weapons, items, and money. In Subnautica, the progression is tied to discovering wrecks that can be scanned to unlock a new technology.

In Astroneer, you're able to find "research items" that can be placed in a research chamber to produce a currency called "bytes". The bytes can be spent to unlock a variety of technologies. While you need some resources to build a research setup, the primary resource sink for your factory is the vehicles and other gadgets that aid in exploration and surviving on the alien planet. But Astroneer also has another progression system called the "Mission Log". This is a screen that shows a bunch of missions the player is able to complete in exchange for rewards. Sometimes these rewards are items or the aforementioned "bytes", but other times you unlock a new building schematic. What's notable about the Mission Log is that it doesn't consume any resources or items. Instead, the player needs to complete various steps such as "fully charge a battery" or "smelt 10 iron". This allows the missions to serve as a tutorial system, gradually guiding the player through the game's systems.

<figure class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/devlogs/devlog_26/astroneer_missions.png" alt="Astroneer Mission Log">
  <figcaption>Astroneer's Mission Log</figcaption>
</figure> 

## Designing a Mission Browser

A lot of games have a tech tree, and they do so for a good reason. It solves almost all of the problems I faced with the old progression, and players are used to interacting with them. So that's what I decided to do for the new progression system. However, unlike most automation games, the tech tree won't be a resource sink. Instead, the tree will be filled with missions, each containing a set of steps that must be completed in order to unlock a new building.

Here is a look at the first mockup I made for what I'm currently calling the "Mission Browser":

![Mission Browser Mockup](/assets/images/devlogs/devlog_26/tech_tree_mock.png)

I decided to go with a traditional node-based tech tree where each node corresponds to a mission. Clicking on a node will show information about the selected mission. A mission may be locked behind other missions, which is visualized as an arrow between the locked mission and its dependency.

It's pretty straightforward, which is the primary goal here. Automation Station already has a lot of weird and obtuse mechanics, and if the progression system is the main thing guiding the player through the rest of the game, it needs to be super intuitive to use.

## Implemention Challenges

Implementing the mission browser in-game was no small feat. As I mentioned earlier, UI always takes me a long time and there were a bunch of new technical hurdles to overcome to get everything working. The first one was the node-based tech tree UI panel. I knew that this tech tree would get pretty large over time, so it needed to support a larger tree than could fit on screen. The typical solution to this is to use a "Scroll View" which adds scroll bars to navigate the content within a viewport. This works great, but for some frustrating and mysterious reason, Unity's off-the-shelf scroll view doesn't support panning with a mouse drag. That meant that the only way to move around the tech tree was to click precisely on the scroll bars and drag those around instead. This wasn't acceptable to me, so I spent a couple of days writing a custom scroll view that supported panning on mouse drag.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/8C795pc.mp4" type="video/mp4" />
</video>

The next hurdle was figuring out how to track the progress of missions. Mission steps can be a variety of things, such as "Smelt 5 iron ingots" or "Construct a crucible" or "Enter build mode", so I needed a system that was flexible enough to handle all these kinds of gameplay events that I could foresee being a step in a mission. In an object-oriented design pattern, I would typically make some kind of base event class where each unique type of event would extend this to add additional data and features. However, this doesn't scale super well when you have potentially thousands of events firing every frame. It is important to keep the data footprint as small as possible to support large quantities. At the same time, I wanted the events to all be the same size so that they could all be thrown into a nice cache-friendly array.

The solution I came up with was to make an event store two pieces of information: the event type and an optional entity type. For example, the event for smelting an iron ingot would have a type "smelt item" and an entity type of "iron-ingot". And for an event for entering build mode, the type would be "enter build mode" and the entity type would be null and unused. Internally, the event type and entity type are actually stored as integer IDs to keep the data footprint as small as possible. The events can be fired from any gameplay system and then another system listens for events and updates mission progress accordingly.

With that, I was able to wire up the UI for the mission browser and have it dynamically update based on what the player does in-game. Here is how it looks:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/qsd4eBw.mp4" type="video/mp4" />
</video>

## Put a Pin in It

While the mission browser is super helpful for tracking your progress on a mission, it is a bit annoying to have to stop what you're doing and open the fullscreen UI panel. For example, if you're mining iron ore for a mission, you want to know when you have enough, but needing to open the mission browsers adds a bunch of unnecessary friction.

To mitigate this, I made it so missions can be pinned. Doing so will add a little UI panel in-game that shows the steps of the current pinned mission. Just like the mission browser, it updates in real-time as you complete various actions.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/IdOyADp.mp4" type="video/mp4" />
</video>

## Fabricator

Automation Station doesn't have any form of manual crafting. Smelting has to be done in a Crucible and crafting has to be done in an Assembler. However, the Assembler isn't unlocked until later in the game, after you have conveyor belts unlocked (since it has a built-in conveyor belt). That means that all of the early-game building recipes can't be made from crafted items. The only items the player has access to early on are raw resources and smelted ingots. This meant that all of the early-game buildings needed to have very similar recipes, usually some combination of iron ingots and copper ingots.

This problem was made even worse with the new mission system, since the mission for unlocking the early-game buildings typically had steps to collect the items needed to construct the building. To address this issue, I decided to create a new early-game crafting building called the **Fabricator**. The model is a placeholder, but here is how it currently looks in-game:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/dGfqZMn.mp4" type="video/mp4" />
</video>

Unlike the Assembler, the Fabricator doesn't have an integrated conveyor belt. Items have to be added manually or using an Arm. The Fabricator can only craft single items into other single items, while the Assembler will be used exclusively for crafting a stack of items into other items. Recipes for iron gears, copper wire, and rubber have been moved from the Assembler to the Fabricator, meaning that those items can now be used to construct the early game recipes.

I'm still working on the balance and progression of items and crafting recipes, but I think this new crafting machine will make it a lot easier to come up with a progression flow that feels good in the early game. Long term, I still think it would be cool to introduce more machines, such as a metal press, mixer, and wire extruder, but the Fabricator and Assembler can cover most of the planned recipes for the time being.

## Wrap up

I'm really pleased with how the Mission Browser came together. I still need to have more people playtest it, but I think it is a huge improvement over the previous system. I think the UI still needs a bit of work, but I plan to revisit that (and all the other UI elements in the game) later on in development. For now, I'm planning to move on to other parts of the game.

As always, I'd love to hear your thoughts and suggestions! Feel free to drop a comment or join our Discord using the link below.

Cheers!

-Scott

## Changelog:

```
- Hide hover tooltips when UI is hidden
- Add angular velocity to thrown items
- Fix outlines on faded trees
- Reverse direction that scroll wheel cycles through items and tools
- Created a custom UI scroll view that can be dragged with the mouse
- Designed tech tree UI
- Draw arrows and stair-step lines between nodes in the tech tree
- Draw lines between selected node and all dependencies
- Animate style changes to tech tree cells when a node changes state
- Remove old belt-based chest from the game
- Massive refactor of all C# code into separate assemblies for major systems and features. Also separated component data, authoring, and systems into separate assemblies to ensure that code changes do not require rebakes of subscenes.
- Designed mission details panel
- Created new scriptable object for defining new missions, including their steps, unlocks, and dependencies
- Created new UI screen for the "Mission Browser" containing the tech tree and mission details panel
- Add new shortcut to toggle mission browser (current keybind is "T")
- Support selecting and deselecting nodes in the tech tree
- Add authoring and baking scripts to convert mission scriptable objects into runtime ECS data
- Dynamically populate tech tree from baked mission data
- Dynamically populate mission details from selected tech tree node
- Create a new framework for recording gameplay events from any gameplay system
- Publish gameplay events for several game interactions (e.g. picking up item, constructing building, smelting ore)
- Allow new gameplay events to be specified in mission scriptable object
- Dynamically update mission progress based on gameplay events
- Rework tech tree and mission details panel to use data binding workflow instead of manually updating UI with all relevant information
- Add locked, completed, and claimed states to nodes in tech tree
- Add styling to tech tree nodes based on state
- Claiming a mission in the UI now unlocks all specified unlocks
- Fix bug where picking up multiple items on the same frame was couting as a single item pickup
- Create new UI panel for a pinned mission
- Add a pin toggle to the mission details panel
- Wire up the pin toggle to control the visibility of the pinned mission panel
- Add custom styling to mission details panel when mission is locked and complete
- Create a new Fabricator building for early-game 1-to-1 crafting recipes
- Create new crafting systems for Fabricator
- Fix bug where arm, launcher, and belt gizmos would show incorrect destination position when dropping into a building slot
- Update tech tree to show all connections between nodes. Selecting a node now highlights the relevant connections.
- Restyle mission browser to be inside a window
- Added a new UIState singleton to track when a fullscreen UI panel is open
- Blur the camera when a fullscreen UI panel is open
- Lots of styling changes to tech tree and mission details panel
- Locked nodes in tech tree now show silhouette of mission icon and a locked icon on top
- Animate the corner pin icon when a mission is pinned
- Hide mission details of locked missions
- Fix bug where mission details icon was not using the correct icon
- Add drag scroll views to mission details panel for when there is not enough room to show all steps and unlocks
```