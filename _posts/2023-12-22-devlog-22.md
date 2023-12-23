---
title: "Devlog #22: 2023 - Year in Review"
header: 
  image: /assets/images/devlogs/devlog_22/event_header.png
tags:
  - Devlog
---

Happy holidays, everyone! A lot has happened in the development of Automation Station over the past year. As we approach the end of 2023, I thought it would be a good time to reflect on all the significant changes and new features that have made their way into the game. I've written 19 devlogs since January of this year, so I'll do my best to condense all of that information as best I can.

## Constructed Buildings

In the first devlog of 2023 ([devlog #4](/blog/devlog-4)), I debated how buildings should be made in Automation Station. Initially, buildings came packaged in these little crates, but I quickly realized that making each building crate unique and distinguishable was too difficult.

![Crates](/assets/images/devlogs/devlog_4/crates.gif)

Then, I tried creating miniature versions of the belts and other buildings to represent the "item form" of the building. While this looked adorable, it complicated the controls for placing buildings, and creating the art for these miniature buildings was proving to be a lot of work.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/uW0I188.mp4" type="video/mp4" />
</video>

Ultimately, I decided to go with a completely different approach. Rather than crafting the buildings in your factory, you only need to craft intermediate items, such as gears and plates. Buildings can then be constructed from these parts when placed.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/xkin2jE.mp4" type="video/mp4" />
</video>

## Backpack

In February ([devlog #5](/blog/devlog-5)), our little box bot friend got a backpack! Prior to this, you were only able to store 4 different items in your backpack, which proved to be extremely limiting in an automation game.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/m2p8yk9.mp4" type="video/mp4" />
</video>

## Cliff Interactions

While I added the cliffs near the end of 2022, I did a bunch of work to make all the buildings work with them. This made it possible to drop items off of cliffs or launch them up to the top.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/LSeTFOa.mp4" type="video/mp4" />
</video>

## Playful Item Interactions

In [devlog #6](/blog/devlog-6), I introduced a brand new system for interacting with items. This made it possible to pick up nearby items and place them in buildings without needing to aim precisely with a cursor. This also made it possible to support controllers in addition to mouse and keyboard.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/Osy65dY.mp4" type="video/mp4" />
</video>

## Item Toolbar

While the backpack was great for increasing the player's storage, it had the downside of not being able to see what items you had nor a way to quickly access items. To address this, I added a toolbar which can be seen in [devlog #7](/blog/devlog-7).

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/jFB3q1D.mp4" type="video/mp4" />
</video>

## Destructible Rocks

In [devlog #8](/blog/devlog-8), I showed off a new method for mining ore. Using your trusty mining laser, you can heat up an ore-rich rock until it explodes into chunks of ore, ready to be smelted.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/TlMAi3p.mp4" type="video/mp4" />
</video>

## Build Mode

Next up was the Build Mode! At any point in the game, you can enter build mode, allowing you to select and construct new buildings. The goal was to make factory construction as painless as possible.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/lbKvnPY.mp4" type="video/mp4" />
</video>

The most common building is the conveyor belt, so I spent a bunch of time improving the belt placement tool, allowing you to quickly make paths around obstacles and through your factory.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/e0CRNty.mp4" type="video/mp4" />
</video>

You can read more about the build mode and the build menu in [devlog #8](/blog/devlog-8), [devlog #9](/blog/devlog-9), and [devlog #10](/blog/devlog-10).

## A Change in Perspective

In May, I finally decided to try out a perspective camera. Although the change is subtle, this made it much easier to determine depth and navigate the world.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/H46CQKr.mp4" type="video/mp4" />
</video>

While this was a relatively small change, I had to spend a lot of time upgrading all of the shaders and visual effects to support this camera change.

## Smelting with Fire

In [devlog #11](/blog/devlog-11), I reworked the smelting to be based around a new heat system. At the start of the game, you can smelt using your laser to heat up a crucible filled with ore.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/A6iPpBM.mp4" type="video/mp4" />
</video>

Eventually, you can set up coal-burning heaters and connect everything with conveyor belts to fully automate a smelting factory.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/JokP9Kk.mp4" type="video/mp4" />
</video>

## Faster Launchers

The item launchers, which act as a way to launch items over obstacles, have been in the game for a while. However, they used to have a delay before launching their item. In [devlog #12](/blog/devlog-12), I rewrote the logic for item transfers and launchers to remove this delay, even when a loop of conveyors is completely full of items.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/dQY02l5.mp4" type="video/mp4" />
</video>

## Slo-Mo

While attempting to fix some weird timing bugs, I ended up rewriting the game's clock which controls the timing of buildings and their animations. A fun side effect of this work is that it is now possible to slow down or speed up all of the buildings in your factory.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/IJB3UjS.mp4" type="video/mp4" />
</video>

## Push it, Rotate it, Orbit it

One of the more unique elements of Automation Station is how every building can be moved and rotated while continuing to perform its function. In June ([devlog #13](/blog/devlog-13)), I polished up the mechanics to ensure that any combination would work as expected. To recap, I'll show off the various "movers" and how they can be used.

First up is the **Piston** which pushes an adjacent building over by one tile.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/DbGYoIi.mp4" type="video/mp4" />
</video>

The **Rotator** is able to rotate an adjacent building either clockwise or counterclockwise.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/cxma9vG.mp4" type="video/mp4" />
</video>

Finally, we have the **Orbiter** which orbits all adjacent buildings around it in a clockwise or counterclockwise fashion.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/vCiPjai.mp4" type="video/mp4" />
</video>

## Auto-Pickup Items

In [devlog #14](/blog/devlog-14), I made it so that loose items on the ground will be automatically picked up when the player gets close to them. This removed the need to manually pick up each item one by one, which was especially useful for manually mining and extracting resources.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/T1WY7Br.mp4" type="video/mp4" />
</video>

## Ramps

Ever since adding cliffs to the game, it was quite awkward to get items uphill. You could use launchers, but sometimes that felt a bit overkill. So in July ([devlog #15](/blog/devlog-15)), I added conveyor ramps!

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/UmOIoTi.mp4" type="video/mp4" />
</video>

Technically, you don't need a ramp to get items down off of cliffs, but I think some players might prefer the gentle ramp over the sudden drop. Perhaps some items in the game are fragile and need to be carefully moved around without dropping them from cliffs, providing a non-aesthetic reason to use ramps.

## Item Stacking

In August, I introduced a new core mechanic to the game called "Stacking". As the name implies, stacking refers to vertically stacking items on top of each other. I prototyped several different designs for the **Stacker** building which I documented in [devlog #16](/blog/devlog-9) and [devlog #17](/blog/devlog-10). Ultimately, I settled on this design that features a little support to hold items at different heights:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/0lMPjjQ.mp4" type="video/mp4" />
</video>

There are currently two versions of the stacker which allow you to create stacks of up to 3 items. However, I'm considering reworking this and other buildings to be more modular which would allow for even taller stacks.

## Too big, Too small, Just right

With all of the new height-based mechanics that I had been adding to the game over the last year, it was becoming increasingly clear that the current item size wasn't going to work. Up until this point, the items were roughly spherical and somewhere between the height of a conveyor belt and the height of a cliff. This made it impossible to make things line up vertically. Eventually, I decided to change the shape of items to follow this flat cylinder shape, as seen here with stators:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/GpbNI2T.mp4" type="video/mp4" />
</video>

While part of me misses the old item balls, I think transitioning all of the items to follow this shape will be a huge improvement for gameplay.

## Crafting, Finally!

Automation Station has gone through several iterations on the design for a crafting system. I've tried a ton of unique and creative options for crafting; all of them had problems with how they interacted with the rest of the game's systems and art constraints. However, in September, I finally added what I believe will closely represent the crafting system in the final game.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/aKTjwqR.mp4" type="video/mp4" />
</video>

This new crafting mechanic is based on the item stacking. The player must construct a stack of items in a particular sequence and then feed that to an **Assembler** which will craft a new product from the stack.

## Storage

In [devlog #19](/blog/devlog-19), I showed off two new storage buildings that I added to the game. The **Chest** is able to receive and send items via connected conveyor belts, making it easy to create in-line buffers of items:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/QwkYAzu.mp4" type="video/mp4" />
</video>

The **Hopper** is a building that can stack on top of other buildings, dropping items into them one at a time.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/2X3Hfyi.mp4" type="video/mp4" />
</video>

## Progression

In October, I finally started working on some of the progression systems that will allow the player to discover and unlock new technologies. The **Caches** are structures scattered around the world, each containing the cartridge for a new building or recipe. However, in order to open the cache, the player must collect and provide the requested resources to the lock(s) surrounding the Cache.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/cAtgdKo.mp4" type="video/mp4" />
</video>

Once a cartridge has been collected from a Cache, it must be decrypted. For this, I added a new **Decrypter** building at the center of the starting island. This structure allows players to decrypt cartridges retrieved from Caches to unlock new buildings or recipes.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/5PH5Ulc.mp4" type="video/mp4" />
</video>

You can read more about the progression mechanic in [devlog #20](/blog/devlog-20) and [devlog #21](/blog/devlog-21).

## Conclusion

That brings us to the end of 2023! It's been a busy year, and the game has evolved significantly during this time. I attempted to highlight most of the significant and exciting new features, but there were numerous other tweaks and changes that I omitted.

While there's still a long journey ahead, seeing everything I achieved in 2023 fills me with immense excitement for 2024 and the ongoing development of Automation Station.

I want to express a huge thanks to everyone who has been following along on this journey, especially those of you in our Discord server who consistently provide feedback and assist me in addressing design problems. The level of support I've received has heightened my motivation to get this game to the finish line. 

Happy holidays and I look forward to seeing you all in 2024!

❤️ -Scott
