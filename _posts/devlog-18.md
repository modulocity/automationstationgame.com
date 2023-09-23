---
title: "Devlog #17: Crafting & Storage"
header: 
  image: /assets/images/devlogs/devlog_18/event_header.png
tags:
  - Devlog
---

Long time no see! I had to take a couple of weeks off to work on some projects around the house, but I'm finally back with a fresh new devlog! We'll be taking a look at the all new crafting system as well and take a deep dive into the design of item storage. Let's dig in!

## Crafting

Crafting is the cornerstone of any automation game. The whole point of a factory is to automate the production of some item. Automation Station is no different in this regard. You'll be needing to craft lots of different items as you expand your factory and unlock new technology. The majority of games with crafting follow a similar formula: there is some building or menu where you can add all your ingredients and, after some time has passed, it will convert your ingredients into the desired product. 

This system works very well, but I wanted to do something different with Automation Station. Specifically, I wanted players a crafting mechanic that required the player to arrange the ingredients in a specific way. Rather than simply feeding all the items to a machine, you would have to carefully plan *how* you would get ingredients to the right place and at the right time. Way back in [devlog #3](/blog/devlog-3), I outlined several different ideas that I was experimenting with for a crafting system like this, and I've continued to brainstorm new ideas since then. Unfortunately, all of these ideas had flaws that didn't quite work for Automation Station. They were either too complex, too finicky, or too easy to trivialize with the other components available in the game.

### Item Stacking

Eventually, the idea of item stacking was suggested by someone in our Discord server (unfortunately, I don't remember who suggested this idea first ☹️). The last two devlogs were all about the new item stacking, so I won't get into the details of how that works. To summarize, the new item stacking mechanic is a way for the player to construct vertical stacks of items. Players can use this to, for example, increase the throughtput of a conveyor belt by condensing the items into stacks. 

But how does this all relate to crafting? 

### The Assembler

In Automation Station, the player will need to carefully construct specific ordering of items in a stack according to recipes. Once they have a stack with the right items and in the right order, they can feed it to another machine to craft the final product. This new machine is called the **Assembler**. 

<gif of assembler>

The Assembler simply turns item stacks into new items. It has a belt input to receive stacks of items and the product will be sent along the belt output. When there is an item stack waiting to enter the Assembler, it will raise it's "head" to the correct height to receive the item stack.

This system allows for a lot of creativity in how a factory can be designed. Some players might choose to stack everything right next to an assembler in a compact setup. Other players might have one factory that builds the stacks and another that assembles the stacks into a different product. If two recipes have some shared combination of items in the two required stacks, a player could choose to make one factory for the shared part of the stack and then split that to two more factories to make any final adjustments unique to each recipe.

Here is an example of a fully automated production line which smelts copper ore, assembles it into copper wire, and then stacks that on an iron ingot that has been smelted from iron ore. This stack of copper wire on top of an iron ingot is then assembled into stators, the final output of this factory.

<gif of assembly line>
https://imgur.com/aKTjwqR

At the moment, the Assembler does not require any explicit recipe to be set. It simply checks the incoming stack to see if it matches a recipe. This means that the player will need to learn the recipe rather than being able to pick the recipe they want from some kind of menu. I'm still deciding if this is the best option, but I think it would be neat to require the player to collect pages of a manual (similar to the game Tunic) and then refer to that when constructing a new factory. 

## Item Storage

One of the unique things about Automation Station is that buildings don't have internal inventories. This was an intentional design choice to make all of the game's information visible at all times, rather than hiding away details inside a menu. However, this comes with some tradeoffs. For example, in other automation games, a common early game strategy is to throw a bunch of ore inside a smelter and then come back several minutes later to pick up all of the newly smelted ingots. This allows the player to effectively perform batch operations so that they can spend their time on other things, such as scaling up their factory.

With the buildings I've shown so far, this isn't possible in Automation Station. A crucible has to be fed ore one piece at a time. Same for all of the other processes in the game. Eventually, the player is able to fully automate a smelting setup with conveyor belts, but this requires a lot of resources to set everything up. That means that the early game will require the player to do a lot of repetitive and manual tasks. 

To address this issue, I decided to add an item storage building. I'm still working on the design and functionality of this building, but I wanted to show some of the options I'm considering.

### Canister

If you've been following the game's development for several years, you might remember the **Canisters** that I showed in [devlog #2](/blog/devlog-2). I prototyped several versions but here is one of them:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/GmiOTJq.mp4" type="video/mp4" />
</video>

The game worked quite a bit differently back then, but the basic idea was that there was a building that could store multiple of a single type of item. This constraint meant that I only ever needed to "show" one item at a time, which simplifies the art while keeping everything visible. Well almost everything. There was no indication of the quantity being stored. But this is something I fully intend to solve, perhaps with some kind of indactor on the side.

I like how simple this design is, but there is one major problem. How do you get the items out of it in an automated fashion? Automation Station doesn't have any arms or inserters that can pick up items. But what good is a chest if you can't pull the items out of it. One of the main goals of this building was to allow the player to use it as an input buffer for things like early game smelting.

One obvious solution is to just add arms to the game. I've been debating arms for quite some time, but that comes with a whole bunch of tradeoffs. I plan to do a deep dive into item transfer in a future devlog, so I'll save that discussion for a later date.

Another possibility is to add some kind of output slot on the side of the canister:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/lMlXU6k.mp4" type="video/mp4" />
</video>

If a belt was placed next to the canister, the item would drop on to the belt. While this concept seems nice in theory, there are some issues with clipping if the canister happens to be butting up next to a cliff. I also don't really care for the design of this canister as I find it less intuitive and more awkward to use.

### Hopper

In real life factories, a hopper is the name for a container used to store bulk material. Typically, it is tapered at the bottom so that the material can fall out the bottom using only gravity. They are also commonly found holding coffee beans on top of an espresso machine or coffee grinder

![Hopper Ideas](/assets/images/devlogs/devlog_17/factory_hopper.png)

![Hopper Ideas](/assets/images/devlogs/devlog_17/coffee_hopper.png)

![Hopper Ideas](/assets/images/devlogs/devlog_17/hopper.png)

## Changelog:

