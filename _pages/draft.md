---
title: "Devlog #2 Crates & Canisters"
permalink: /draft.html
# tags:
#   - Devlog
---

Changes:
- Lots of cleanup
- Add in remaining recipes
- Canister
    - mode switching
    - hologram when in input mode and containing an item.
    - other options: spout and no modes prototype
- Automated builds
- Crates
    - Hover packing and unpacking
    - Hover hologram
- Manual crafting
- Shift click to pickup items directly into backpack


Greetings! In this second devlog of Automation Station we'll be taking a look at the new canister, crates, and manual crafting that have been added to the game. 


## Canister

The canister is a brand new structure that can be constructed in the game that serves as a place to store items. This is especially useful in the early game before everything is fully automated. Unlike a more traditional chest in other games, the canister can only store a single type of item at a time. While this make the canister less flexible, it is much easier to see what's inside and makes its interaction with other structures more predictable.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/tDLaw1d.mp4" type="video/mp4" />
</video>

The canister has two modes: input and output mode. In input mode, items can be added to the top slot of the canister where they will be sucked inside. Once an item is stored inside, a hologram will appear on top showing that more items of that type can be inserted. When in output mode, items will materialize into the top slot of the canister until it is empty. The canister automatically switches to input mode when empty and output mode when full. The mode can also be switched manually with a button press.

 You can see the manual mode switching in the gif below:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/BF7ZUFb.mp4" type="video/mp4" />
</video>

I still want to add a stronger visual indication of which mode the canister is in and showing how full it is, but I'm happy with how its working.

After implementing this version of the canister, I prototyped a few other ideas for how the canister could work. The first was an attempt to remove the need for "modes" on the canister. The idea was to make it work similar to quarter dispenser where items can be inserted or taken out at any time. The top slot would always contain the most recently added item, but additional items could be inserted by hovering over it with another item.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/GmiOTJq.mp4" type="video/mp4" />
</video>

While version of the canister is easy to use, it is not clear that additional items can be added or how they should be added. Visually, it looks like the canister's slot is occupied so its no intuitive that another item could be added. 

Another idea I had for the canister was to have a dedicated input and output slot. The output slot would be on the side and automatically place items on any adjacent conveyors instead of requiring a robotic arm to grab items out of the canister. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/lMlXU6k.mp4" type="video/mp4" />
</video>

I think this option could work well, but I'm not really happy with how the output slot looks sticking out of the side. It is also harder to see what is stored inside unless looking at the canister from the correct side.

Each option has pros and cons but for now I'm sticking with the first option (with input and output mode). Let me know which option you like best or if you have other ideas in the comments below.

## Crates

Automation Station has two distinct categories of objects in the game: items and buildings. Items are smaller, can fit into a slot, and can be placed on a conveyor belt. Buildings occupy an entire hex tile, can only be placed on the ground, and can only be moved by a pusher, puller, or orbiter. A conveyor belt is an example of a "building" which means that it cannot be stored in the player's backpack or moved around by other conveyors. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/T2fpEBO.mp4" type="video/mp4" />
</video>

## Manual Crafting

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/eabqHIp.mp4" type="video/mp4" />
</video>

