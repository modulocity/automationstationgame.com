---
title: "Devlog #26: Mission Tech Tree"
header: 
  image: /assets/images/devlogs/devlog_26/event_header.png
tags:
  - Devlog
---

Hello everyone! In this devlog, we're taking a deep dive into a brand new progression system. The caches and decrypters have been replaced with a mission system and tech tree, which completely changes how you'll unlock new buildings and progress through the game. We'll also touch on a new early-game crafting building called the "Fabricator". Let's dive in!

## Why change the progression system?

If you've been following the devlogs recently, you might remember the Caches and Decrypters that were introduced in [devlog #20](/blog/devlog-20). After unlocking a new island, the player could stumble across mysterious Caches. A Cache had to be unlocked by providing specific resources to the locks surrounding it. Once unlocked, the player would be able to retrieve a cartridge from the Cache which they would take back to their base and deposit into a Decrypter. The Decrypter would get to work on decrypting the cartridge. Once complete, the player would be able to claim the newly unlocked technology, which typically was a new building that they could start using in their factory.

At a high level, this idea had a lot of potential. By placing these caches on new islands, players were encouraged to expand and explore. You never knew what was inside a cache until you decrypted it, so there was also an element of anticipation when waiting for the decryption to finish and surprise when you finally got the unlock. Players also didn't need to fiddle with UI screens in order make progress since everything took place inside the game world. This was especially great for me since UI design is something I struggle with and find incredibly time consuming. 

As great as this all sounded, when I finally got everything implemented and had people playtest it, there were some glaring issues. Firstly, the player had no idea what to do when they started the game. Even if a player discovered a Cache, it wasn't clear how to open it or even that they should. And after opening a Cache, they wouldn't know what to do with the cartridges inside. After watching them struggle, I had to just tell them what to do so that they could make progress. 

Initially, I thought the game just needed a proper tutorial to guide the player through the early part of the game. I figured that once they understood the decryption mechanic, everything would click into place. But tutorials are notoriously difficult to get right. And even with an amazing tutorial, the decryption mechanic was completely opaque. Players never knew what they are working towards and had no way to strategize. A huge part of automation games is trying to figure out how to gradually automate more and more of your factory. Is it better to automate resource collection or smelting? The answer to that question greatly depends on the player and what they value. But if the game provides no information on the dfferent progression paths available, players will feel like they are stumbling aimlessly in the dark and lose motivation.

## Design

After identifying some of the issues with the old progression system, I got to work on designing a replacement. Rather than trying to reinvent the wheel, I looked at how other base building games handle progression. Most of them have some kind of technology tree where you can see some or all of the available technologies in the game. This allows players to identify unlocks that would be most beneficial to them. It also provides a clear set of objectives for the player to work towards.

The main difference between games is how the technologies are unlocked. In Satisfactory, you need to craft and collect a spefific set of resources and trade them in for an unlock. In Factorio, you instead need to craft "science packs" which, when deposited into a science lab, will work incrementally towards the current active research. 

These two systems both act as the primary resource sink in the game. The main purpose of your factory is to produce the items or science packs required for the next set of unlocks. 

However, not all games work this way. In Astroneer, you're able to find mysterious and alien "research items" that can be placed in a research chamber to produce a currency called "bytes". The bytes can be spent to unlock a variety of technologies. While you need some resources to build a research setup, the primary resource sink for your factory is the vehicles and other gadgets that aide in exploration and surviving on the alien planet. While Astroneer is more of a survival-lite crafting and exploration game, I think it is possible to separate the resource sink from the progression system in a pure



## Implemention

## Put a pin it

## Fabriactor

## Wrap up

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

Cheers!

-Scott