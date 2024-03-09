---
title: "Devlog #25: Tools & Item Throwing"
header: 
  image: /assets/images/devlogs/devlog_24/event_header.png
tags:
  - Devlog
---

Greetings folks! A lot of progress has been made on the game over the last few weeks. From the new tool system, to item throwing, to build mode improvements, there is a lot to unpack. But the majority of my time was spent iterating on some different control schemes in a quest to make the game more intuitive to play. Let's dive in!

## Tools
In Automation Station, players need to use B0XB0T's laser to harvest resources and heat up the crucible for smelting, but thus far, they haven't need to explicitly equip the laser in order to do this. That has worked pretty well since the laser is the only tool in the game so far. However, I plan to add a scanner and a variety of other tools that the player will unlock throughout the game. While it might be possible to dynamically switch to the correct tool when iteracting with an object, that assumes that only one tool *can* be used on a given target, which may not always be the case. There is also a danger of making the game too smart such that the action performed is not what the player expected or intended. Alternatively, each tool has a different keybinding, but that is asking the player to do a lot of memorization.

The much more flexible and common solution is to have a way to equip different tools. Each equipped tool changes how the player will interact with the different objects in the world. Here is a look at the new tool system in Automation Station:

<gif of tool system>

By equipping the laser, the player is able to harvest ore and heat up the crucible. And if the player unequips the laser or switches to an item, they get a different set of actions. 

The toolbar at the bottom of the screen now has a special section for tools alongside the items. One of things I find annoying about toolbars in other games is how difficult it is to switch between your tools an items. That's why I decided to add a item/tool toggle. Pressing the keybind for this will switch between the last used item and the last used tool. This makes it much easier to manually smelt ingots in the early game since you need to switch between depositing ore and then heating it up. 

The toolbar is still a work in progress, but the goal is to help communicate which tool or item is equipped and make it easy to change what is equipped. 

## Item Throwing
- arc gizmos

## Control Schemes
- Tool mode
- Aim mode


## Build Mode
- Prompts & warning messages
- Cancel


## Changelog:
```
- Improvements to hover logic
- Sort total building cost and individual building costs for consistency
- Zooming in play mode no longer zooms the build mode camera, and vice versa
- Slow down the camera zoom to improve smoothness
- Simplify the interaction framework by removing the need for separate systems
- Consolidate interaction systems across build mode and play mode
- Add control prompts for constructing, placing, picking up, rotating, copying, and demolishing in build mode
- Add the ability to "aim" while holding an item
- Slow down the player and have them face the cursor while aiming
- Add arcing indicators while aiming to show aim direction and target
- When depositing is invalid, color aim arc in red and stop moving the dots
- Limit aim arc distance based on max interaction distance
- Disable building indicators outside of build mode
- Added keybind for "Q" to restore or holster equipped item
- Disable retrieve interaction while holding an item
- Add warning message when attempting to heat something that is not currently heatable (e.g. an empty crucible)
- When picking up and moving buildings in build mode, "cancel" now restores their previous locations instead of demolishing
- Only allow depositing when holding an item
- Combine interaction systems for depositing into slot and depositing into stacker 
- Remapped scroll wheel to cycle through items in the toolbar instead of zooming
- Added controls to zoom camera on "," and ".". This will likely be changed in the future.
- Prevent items from being added to a cache
- Only snap the arm aim indicator when the slot can be deposited into manually
- Brought back outlines and highlight for the occluded portion of the hovered object
- Add in separate control prompt for rotating a building by clicking and dragging
- Disable outlines when hovering non-buildings in build mode
- Add keybind to cancel in build mode using "Q"
- Disable the ability to demolish buildings while planning or moving another building
- Restyle control prompts with modifier to show the modifier key before the primary keybind
- Add warning message when attempting to place or construct a building in an invalid location
- Added control setting to switch between toggle or hold aim
- Added targeting indicator when laser is equipped
- Improve laser beam targetting
- Added a separate "tool" bar for holding tools (currently just the laser)
- New UI for toolbars with the ability to switch between items and tools
- New authoring workflow for adding tools to the new tool bar
- Reworked internal state of toolbar to support tools and the item/tool mode toggle
- Rewrote logic for spawning the correct item in the player's hands based on toolbar state and equipped item
- When toggle aim is enabled, switching items or tools automatically enters aim mode
- Slightly reduce walk and run speed
- Add sort index to tools so that they always appear in the same order
- Add an abstraction layer between input controls and the interactions that they are mapped to based on the current control scheme settings
- Add a third control scheme that allows tools and items to be used on right click instead of needing to hold right click and pressing left click.
- Added support for auto-populating enum dropdowns in debug menu
- Fix the ability for stackers to receive items from input conveyor belts
- When loose items spawn from a destructible rock, add a delay before the player can automatically pick them up
- Adjust several settings for the destructible rock explosions
- Items can now be thrown loose on the ground when not aiming at a slot
- Laser can now be fired when not aiming at a laserable target
- Improve laser vfx heat marks to help avoid graphical clipping
- When extracting resources with the laser, stopping and starting the laser will resume progress. This is especially useful when the cursor accidentally drifts off of the target.
- Extracted resources now spawn on completion instead of gradually throughout the laser animation
- When heating something with the laser, stopping and starting the laser will resume the heat progress.
- Added a fourth control scheme, similar to toggle aim, but instead of toggling aim mode, it toggles between the item being equipped or holstered.
```

Cheers!

-Scott