---
title: "Devlog #19: Chests & Hopppers"
header: 
  image: /assets/images/devlogs/devlog_19/event_header.png
tags:
  - Devlog
---

Welcome back to another devlog for Automation Station! If you read the last devlog, I discussed several options for item storage buildings. In the past couple of weeks, I've been hard at work implementing two of those options: the chest and the hopper. We'll be taking a look at how they work and how they fit in with the rest of the game. Let's dive in!

## Chest

First up is the **Chest**. The chest can currently store up to 10 items of a the same type, although I expect to increase that number based on playtesting. The chest features a belt input and output port, allowing you to connect conveyor belts directly to it. As items enter the chest, they will pass through the chest and exit on to any output belt if there is one and there is room. If the item cannot be sent to the output, it will be stored inside the chest, appearing in the top slot. As more items enter the chest, the circular indicator will fill up to show how full it is. Likewise, whenever items leave the chest, the indicator will drop. The item in the top slot will drop down to the output belt when the chest is sending its last item.

Here is what it looks like in game:

<!-- gif of chest -->

The top slot serves as a visual indication of what is currently being stored in the chest. However, it also functions as an alternative input for the chest. If an item of the correct type falls into the top slot of the chest, the chest will quickly store the existing item in top slot to make room for the new addition.

<!-- gif of chest top slot -->




## Hopper



## Platforms

## Changelog:

Here are all the changes since the last devlog:
- Add support for non-full chest receiving items even when slot is occupied
- Add support for non-empty chest spawning new items when slot is empty
- Only allow a single type of item to enter a chest (reset when empty)
- Implemented custom manual interactions for the chest that support hold to fill or empty
- Added an indicator the chest model
- Created shader for indicator to show how full chest is
- Animate chest indicator when items are added or removed
- Fixed altitude of buildings that replace existing buildings
- Created a new tween workflow that supports both on-entity and remote targets
- Switch progress animations to use new tween workflow
- Added buildable platforms
- Added support for non-full hopper receiving items dropped into it, even when slot is occupied
- Added support for non-empty hopper to spawn new items when slot is empty
- Rewrite item routing logic to support a 3D voxel grid. Items can now be transferred vertically.
- Added support for non-empty hopper dropping items beneath it
- Implemented custom manual interactions for the hopper that support hold to fill or empty

-Scott