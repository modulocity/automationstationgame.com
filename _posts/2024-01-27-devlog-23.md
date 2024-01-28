---
title: "Devlog #23: Building Costs & Indicators"
header: 
  image: /assets/images/devlogs/devlog_23/event_header.png
tags:
  - Devlog
---

Hey folks! I can't believe we're already a month into 2024, but the development of Automation Station has been coming along nicely. In this devlog, I'll be talking about some additional features that I've added to **Build Mode**. Buildings now have a cost, consuming items from your inventory when placed. And if you change your mind, you can always demolish the building to get those items back. I've also added several new indicators to help the player understand the orientation and behavior of several buildings.

## Affordability

For most of Automation Station's development, the game has been more of a creative sandbox where the player can place buildings for free. This has been great for testing new systems and features, but the plan has always been to make buildings require items in order to build. I've finally implemented a system that checks for and consumes all the required items when constructing new buildings.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/D8nqlG8.mp4" type="video/mp4" />
</video>

There are a few different things to unpack in this gif. While planning out the placement of new buildings, a panel in the bottom right will tally up the total cost of all the buildings (ignore the overlapping panels; that is an artifact of the tiny resolution I'm recording at). If the player has all the required items, the holograms will be blue, but if they can't, they will turn red. Once placed, the building will be "constructed" and consume all the required items. 

Also, the building previews now use the hologram shader that I showed off in ([devlog #20](/blog/devlog-20)). The hologram effect helps communicate that the building does not yet exist. This is especially important when considering that buildings can also be picked up and moved around. Since the building is already constructed, I just use a blue glow effect and raise the building up instead of using the hologram effect.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/W2QubS4.mp4" type="video/mp4" />
</video>

## Demolishing

If you decide that you want to remove a building completely, you can also demolish it.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/Ym0vgo5.mp4" type="video/mp4" />
</video>

As you can see, demolishing a building will drop a bunch of items. These are the exact same items that were used to construct the building, so you'll never lose items when demolishing. I'm still deciding between dropping loose items and adding them straight to the player's backpack, but I definitely think the loose items are more playful. 

## Indicators

One of my design goals is to make all the buildings super intuitive to use. However, there are still a lot of cases where the behavior isn't perfectly clear, especially with how a building will interact with others. To help with some of these problems, I added indicators to several buildings.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/oDxl3nA.mp4" type="video/mp4" />
</video>

These are still a work in progress, but I think they already help quite a lot. Since belts pause in build mode, just showing the belt direction is already a huge help. They also show a preview of how items will drop from the end of a conveyor belt or out of a crucible, taking into account any differences in elevation as the building is dragged around. 

The current plan is to only show these indicators in build mode, since that is when they are most useful. They'll show up both for new building previews and when an existing building is hovered or picked up. 

I expect to iterate on these quite a bit and make them all look a bit more unified, but let me know if you have any thoughts for how these could be improved.

## Terraforming???

I thought I'd wrap up this devlog with a preview of a little terraforming system that I prototyped.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/nE9yScr.mp4" type="video/mp4" />
</video>

While reworking some of the terrain systems, I realized that supporting terraforming in-game was actually quite easy to do. Even though this feature may never make it into the final game, I decided to try out and got it working in less than a day.

If I wanted to add terraforming properly, there is still a ton of animation, particle, controls, and UI work needed to make it look nice and integrate with the rest of the game. But, it's still cool to see that the terrain tile generation system was flexible and performant enough to support this in real time. 

Just to be super clear, this was mostly a curiosity experiment and is not a guarantee that terraforming will be in the final version of the game. There are a lot of considerations to adding a terraforming system to the game, especially when it wasn't planned for from the beginning. The environment with its trees and height variations was intended to add a bit of a puzzle element to factory planning. Letting the player terraform (even if it is expensive) may result in a worse overall experience.

## Wrap up

That's it for this update! Let me know what you think about these new systems in the Discord server or in the comments below. 

## Changelog:

Here are all the significant changes since the last devlog:
- Rework how slotted and loose items are handled
- Newly picked up items no longer switch active toolbar slot
- Fixed several item teleportation bugs
- Rework island generation to use prefabs instead of scriptable objects
- Add basic support for terraforming. Debug feature for now.
- Rework ground tile generation system
- Add locks to pylons, each requiring a certain number of items to unlock
- Make pylons pressable when unlocked to spawn new island
- Rework system that syncs game object and entity transforms 
- New affordability system to check that player can afford new buildings
- Placing buildings now consumes items from player's inventory
- Added new "free build" debug setting
- Hide building requirements UI panel when no buildings are being planned
- Improve drag rotation for buildings
- Rework and consolidate code for converting a building preview into a real building and vice versa
- Add missing costs to all buildings
- Demolish buildings, canceling moved buildings, or replacing buildings now drop ingredients loose on the ground
- Stop using belt planner when moving an existing belt
- Explodable rocks now drop 5 ore instead of 3
- Rework hologram generation, again
- Building previews now use holograms instead of glow shader
- Building previews are no longer raised; only picking up existing buildings will raise them
- Allow character to move when hovering UI; only gameplay mouse controls are disabled when hovering UI
- Refactor and share code for storing multiple items between locks and storage buildings (i.e. hoppers and chests)
- Refactor and combine interaction systems for deposit, storage deposit, and hologram fill
- Added indicators when hovering belts, launchers, crucible, tapper, rotator, orbiter, and piston. These indicators show things like direction and item drop location.
- When hovering a storage building or a lock, deposit prompt now shows quantity and capacity in label.
- Show disabled control prompts for several interactions that a building supports but are not currently possible (e.g. heating a crucible when there is no ore inside).
- Added building previews to world grid
- Added debug view for grid state

Cheers!

-Scott