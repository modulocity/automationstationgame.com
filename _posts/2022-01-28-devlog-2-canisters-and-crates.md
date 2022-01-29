---
title: "Devlog #2 Canisters & Crates"
header: 
  image: /assets/images/canisters_and_crates.png
tags:
  - Devlog
---

Greetings! In this second devlog of Automation Station we'll be taking a look at the new canister, crates, and manual crafting that have been added to the game. 

## Canister

Canisters are a brand new type of building that serves as a place to store items. These are especially useful in the early game before everything is fully automated. Unlike a more traditional chest in other games, the canister can only store a single type of item at a time. While this make the canister less flexible, it is much easier to see what's inside and makes its interaction with other structures more predictable.

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

While version of the canister is easy to use, it is not clear that additional items can be added or how they should be added. Visually, it looks like the canister's slot is occupied and couldn't have any more items added to it. 

Another idea I had for the canister was to have a dedicated input and output slot. The output slot would be on the side and automatically place items on any adjacent conveyors instead of requiring a robotic arm to grab items out of the canister. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/lMlXU6k.mp4" type="video/mp4" />
</video>

I think this option could work well, but I'm not really happy with how the output slot looks sticking out of the side. It is also harder to see what is stored inside unless looking at the canister from the correct side.

Each option has pros and cons but for now I'm sticking with the first option (with an input and output mode). Let me know which option you like best or if you have other ideas in the comments below.

## Crates

Automation Station has two distinct categories of objects in the game: items and buildings. Items are small enough to fit into a slot and can be placed on a conveyor belt. Buildings occupy an entire hex tile so they can only be placed on the ground. However, any building can be packaged up into a crate which makes it small enough to fit in the player's backpack or be placed on a conveyor belt. The crates can also be placed in a canister, allowing you to stockpile buildings such as conveyor belts for later use.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/T2fpEBO.mp4" type="video/mp4" />
</video>

At the moment, all of the crates look identical. I'm exploring ways to make them visually distinct, but you can always figure out what is inside a crate by hovering it to reveal a hologram of the building.

## Manual Crafting

The last feature I wanted to talk about today is manual crafting. I was actually considering not having any manual crafting in the game and just give the player a starting crafting machine. However, with the way crafting system currently works, I found that manual crafting was pretty much a necessity. 

To manually craft an item or building, you need to select what you want from the build menu. This puts a hologram in your cursor which you can then move, rotate, and place however you'd like. Once placed, you can hover the hologram and hold a button to manually craft it. This will only work if you have the required ingredients in your backpack.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/eabqHIp.mp4" type="video/mp4" />
</video>

You might be wondering why the manual crafting requires a hologram to be placed first. The main reason is that some of the recipes require more than 4 ingredients, which means the player cannot fit everything required in their backpack. By first placing the hologram, the player is able to partially craft the building with the ingredients they do have, and then finish crafting it later after picking up the remaining ingredients. Also, I'm planning to add a feature that will make it much easier to build large factories in the mid-game and late-game that depends on the player placing holograms (I'll discuss this feature in a future devlog). By making manual crafting work in the same way, the player is presented with a more consitent crafting experience. However, I want the manual crafting to be as simple and frictionless as possible, so let me know if you have any other ideas!


That's all for this devlog! Feel free to leave a comment or join our Discord server using the link below. Cheers!