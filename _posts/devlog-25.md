---
title: "Devlog #25: Controls"
header: 
  image: /assets/images/devlogs/devlog_24/event_header.png
tags:
  - Devlog
---

Greetings folks!


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