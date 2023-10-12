---
title: "Devlog #19: Chests & Hopppers"
header: 
  image: /assets/images/devlogs/devlog_19/event_header.png
tags:
  - Devlog
---

Welcome back to another devlog for Automation Station! If you read the last devlog, I discussed several options for item storage buildings. In the past couple of weeks, I've been hard at work implementing two of those options: the chest and the hopper. We'll be taking a look at how they work and how they fit in with the rest of the game. Let's dive in!

## Chest

First up is the **Chest**. The chest can currently store up to 10 items of a the same type, although I expect to increase that number based on playtesting. The chest features a belt input and output port, allowing you to connect conveyor belts directly to it. As items enter the chest, they will pass through the chest and exit on to any output belt if there is one and there is room. If the item cannot be sent to the output, it will be stored inside the chest, appearing in the top slot. As more items enter the chest, the circular indicator will fill up to show how full it is. Likewise, whenever items leave the chest, the indicator will lower accordingly. The item in the top slot will drop down to the output belt when the chest is sending its last item.

Here is what it looks like in game:

<!-- gif of chest -->

The top slot serves as a visual indication of what is currently being stored in the chest. This avoids the need for any kind of UI pop-up or overlay. However, the top slot also functions as an alternative input for the chest. If an item of the correct type falls into the top slot of the chest, the chest will quickly store the existing item in top slot to make room for the new addition.

<!-- gif of chest top slot -->

The player is also able to manually store and retrieve items in the chest. While holding the correct type of item, the player can simply click to add one item to the chest. They can also click and hold to fill up the chest with items from the player's inventory. If the player's hands are empty, clicking the top item or the chest will remove one item. And similarly, clicking and holding will remove all items from the chest (or until the player's inventory is full). 

<!-- gif of chest manual interactions -->

## Hopper

The other storage building I implemented is the **Hopper**. Just like the chest, the hopper can also store up to 10 items of the same type. However, instead of belt input and output ports, the hopper has a port on the bottom that allows items to drop down to buildings below. For this to work, the hopper must be placed on top of other buildings. Here are some examples:

<!-- gif of hopper dropping -->

The hopper is mostly intended as a way to add an inventory to the input side of a building before having it completely automated with conveyor belts. For example, you could place a bunch of ore in a hopper on top of a crucible to effectively queue up several ingots to be smelted. But just like the chest, the hopper's top slot doubles as an input for receiving items. Due to the height of the hopper and the fact that it is typically stacked on top of another building means that it can be a little tricky to get items up to the required height to drop them in to the top slot. But given the intended use case, I think this is an okay tradeoff.

<!-- gif of hopper top loading -->

And, just like the chest, the hopper can be loaded or emptied manually with the same interactions.

<!-- gif of hopper manual interactions -->

## Two Storage Options?

<!-- pic of chest ~= hopper -->

You might be wondering why there are two item storage buildings. Both the chest and hopper can receive and output items, albeit in slgihtly different ways, and store 10 items internally. This overlap in design isn't inherently bad as it gives the player more options. However, it can also be a little confusing and misleading. For example, if the player wants to store some crafted items at the end of an assembly line, they might try to use the hopper. While this works, it is more awkward to use for receiving items due to the height of the top slot. Alternatively, if the player wants to queue up a bunch of iron ore to be smelted, they could use a chest and ramp to deliver some ore to a crucible, but it is much more straightforward to place a hopper directly on top of the crucible.

Initially, I only wanted one item storage building. However, I struggled to come up with a single design that met all of my design goals. I wanted a storage solution that could be used in the early game to enable smelting in batches rather than one a time. In terms of progression, it would be ideal if the storage building didn't require the use of conveyor belts. This is where the idea of the stackable hopper came from. But I also wanted a storage building to collect items at the end of some production chain, so a design like the chest made more sense.

One possibility is to tweak the functionality of the hopper and chest so that they no longer overlap. Perhaps the hopper cannot receive items into the top slot in an automated fashion. This would make it only useful as an input inventory that has to be filled manually. And perhaps the chest can only receive items, requiring the player to manually retrieve them when needed. 

## Chests > Belts?

<!-- pic of chest = belt + crate -->

After implementing the chest, I realized that it is essentially identical to a normal conveyor belt, just with the extra ability to store extra items. Any time you would normally use a straight conveyor belt, you could instead use a chest without any real downsides. In fact, I can imagine that some players using chests everywhere in place of belts as a way to add buffers to their production chains. 

This could be seen as an advanced feature, but it feels at odds with the design of Automation Station thus far. All of the buildings are modular primitives that are intended to be combined in a different ways. The fun of the game is figuring out to combine these primitives to solve a goal. The chest design I've shown is basically a combination of a belt and a storage chest. It feels like it is doing too much, especially when half of it (the belt) already exists as another building in the game. 

When I've encountered similar design problems in the past, I've always found a solution by breaking up the idea into more modular pieces. For example, instead of a furnace, there is a crucible and heater as separate buildings. (There even used to be something called a "caster" that would handle resolidifying the molten metal into an ingot). 

Applying this to the chest, the obvious solution would be to separate the storage component from the belt. In game, this could mean that the storage is an attachment that you place on top of a belt. Functionally, this would behave the same way as the original chest design, but it requires the player to choose and place the storage according to their needs. And the player could also add this storage module to other buildings that is compatible with, increasing the possibility space.

This idea of a separate storage module is pretty similar to the hopper design. A hopper can be placed on top of a belt and get most of the functionality of a belt-chest. Although, at the moment, the hopper cannot suck up items from the belt into its storage, it can only output items. This has me wondering if there could be something like the reverse of a hopper that sucks up all items beneath it. Or perhaps there is a way to flip a hopper upside down to toggle it to "input mode". 

## Storage Indicators

<!-- gif of indicators -->

One of the subtle differences between the hopper and the chest is that the hopper's indicator doesn't account for the item in the top slot. This is because I wanted the indicator to represent the items *inside* the hopper, not any outside, such as the item in the top slot. At first, the chest indicator also worked this way, but I realized that, if the chests were empty, it was difficult to see any items passing through. 

At the moment, I still prefer the hopper's indicator design. It doesn't feel like the item on top should be occupying any space inside the hopper. But I also don't like that the chest and hopper have inconsistent indicators. Perhaps there is another way to solve the visibility problem of items passing through empty chests. Or I can just make both function like the chest indicator. 

## Storage Next Steps

As you can probably tell from all the design considerations above, I think there is still a lot to figure out when it comes to item storage. For now, I have two options fully implemented that I'm reasonably happy with. Based on feedback from playtesting, I'll evaluate what changes need to be made and perhaps cut or consolidate the available item storage buildings. Let me know in the comments below or in Discord if you have thoughts about item storage or feedback on the new hopper and chest.

## Platforms

Besides item storage buildings, one of the other new additions in the last couple weeks are **Platforms**. Platforms are a new basic building block that allow you to position your other buildings at specific heights. Most buildings can be placed on top of a platforms, including other platforms. This is incredibly useful in combination with ramps to get items up high, such as the top of a hopper.

<!-- gif of platform to hopper -->

I'm not totally sure if platforms will stay in the game in the current form. One of the cool puzzle aspects of Automation Station is figuring out how to place things around the terrain to leverage existing cliffs. The addition of platforms completely removes that challenge. However, I do find them incredibly useful for debugging certain features, so I've gone ahead and added them for now. 

## Changelog:

The hopper and chest both required a lot of work throughout the rest of the codebase to support their functionality. For example, I had to refactor the entire item routing system (again) to allow the hopper to drop items directly below it. Due to the complexity and interplay of all the game's systems, these small changes take a lot of time and careful thought to get right. Below is the full list of the notable changes from the last two weeks.

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

As always, thanks for taking the time to read this devlog! My next big task will tackling progression systems in an effort to turn this bag of systems into an actual game. Stay tuned for another devlog in a couple of weeks!

-Scott