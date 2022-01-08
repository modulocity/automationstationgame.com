---
title: "Devlog #1 New Year, New Website, New Stuff"
tags:
  - Devlog
---

![](/assets/images/title_cover.png)

**Welcome to the first devlog of Automation Station on the brand new website!**

This will be the new home for announcements and regular development updates where I talk about what is being worked on. I would love to hear your feedback so feel free to leave a comment below with any ideas or thoughts you have for the game. You can also join our [Discord server](https://discord.com/invite/QHqgE9kujZ) to chat with me and other folks in the community.


### So what is Automation Station exactly? 

Automation Station is a game about constructing an automated factory using the resources you find on an alien planet. The buildings you craft are highly modular: they each have a simple function but they can be combined in many different ways. This allows for a lot of freedom in how you design your factory but also introduces some interesting challenges for you to overcome.

Automation Station is still in early on in development, so everything I share is subject to change. I may decided to completely change some feature or remove it entirely based on feedback and how it fits in with the rest of the game. Also, please bear in mind that most of the 3D models and animations are placeholders and will be revisited.
{: .notice--warning}

## New stuff

It has been quite a while since I last shared a status update, so there is a lot of new features and content to talk about. 

Prior to setting up this website, I was sharing status updates in the Discord server, so check those out if you want to see earlier progress.
{: .notice}

### Inventory slots

Items can now be placed into four slots on the character's back. This acts as a small inventory to hold anything the player needs as they explore and build their factory.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/X3msMpl.mp4" type="video/mp4" />
</video>

### Ore nodes & mining

Different ores can now be acquired from corresponding ore nodes. Each will be needed for different crafting recipes. There are currently five ore types, as follows:

Stone
  
![stone](/assets/images/stone_node_and_item.png)

Coal
  
![coal](/assets/images/coal_node_and_item.png)

Iron

![iron](/assets/images/iron_node_and_item.png)

Copper

![copper](/assets/images/copper_node_and_item.png)

Quartz

![quartz](/assets/images/quartz_node_and_item.png)

Each of these ores can be mined manually by the player. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/9tHc8gd.mp4" type="video/mp4" />
</video>

I haven't added any proper animation or effects, so expect this to change quite a bit. The basic idea is that ore is mined directly into the player's backpack slots.

I also added a mining drill machine which will be used to automate the extraction of ore from ore nodes.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/PfhZ2sa.mp4" type="video/mp4" />
</video>

### Smelting

Most of the ores will need to be smelted before they can be used in crafting recipes. Like everything else in the game, smelting will be highly modular. To smelt iron ore into an iron ingot, you will first need to place the iron ore into a crucible and then heat it up. In the early game, the primary source of heat will be a coal-powered heater. Once it is hot enough, the iron ore will turn into molten iron, which can be poured into a casting mold.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/2pfkIJx.mp4" type="video/mp4" />
</video>

Combined with conveyor belts and arms, you can automate the entire process and create large smelting arrays like this:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/gH9RNea.mp4" type="video/mp4" />
</video>

### Blubber rubber

When I started working on the crafting recipe for a conveyor belt, I decided that the top of the conveyor belt looked like it should be made of rubber. So I started researching how rubber is made. I learned that about half of rubber is synthetic, derived from petroleum and natural gas, while they other half is natural, coming from rubber trees. For the latter, latex is extracted from rubber trees and then heated up and combined with additives to create a variety of rubber produces.

I liked the natural tree-based method better, especially if rubber would be an early game resource necessary for conveyor belts. However, I thought that "latex" was kind of a boring name and thought it would be funny if rubber came from blubber. Thus, the **Blubber Tree** was born.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/aluDE3y.mp4" type="video/mp4" />
</video>

To extract blubber from a blubber tree, a tree tap must be placed around the tree. This will slowly produce the blubber over time.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/3e7eJ7w.mp4" type="video/mp4" />
</video>

I haven't quite worked out how the blubber will be turned into rubber yet. Initially, I was thinking that it would be smelted, but the current smelting design with the crucible and casting doesn't really support this very well. I could make it craftable in a crafting machine, but that doesn't make as much sense when you consider how real rubber is made. Let me know if you have any thoughts on this!

### More items

In addition to the new items mentioned above, I've also created copper wire, iron gears, glass (smelted from quartz), rubber, and circuit boards. Here is a look at all of them:

![more items](/assets/images/all_items.png)

### Reverse it, switch it, flip it

A while back I showed off something I called a **Flipper**. This is a building that could be used to switch the polarity of an adjacent building. For example, it could reverse the direction of a belt, or turn a pusher into a puller. I recently tried out a couple different ideas that offer similar functionality. They currently all use the same 3D model, but here you can seen them in action, all facing a conveyor belt:

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/3TeQ8Ue.mp4" type="video/mp4" />
</video>

The one on the left is the old flipper that I have renamed to a **Reverser**. This continues to work like I described above.

The middle one is called a **Switcher**. This building switches the mode of an adjacent building. What is a mode you ask? Basically all buildings are grouped based on similar functionality and can be easily switched between. All three conveyor belts (straight, corner clockwise, and corner counterclockwise) are modes of a conveyor belt. Likewise, pushers and pullers are modes of a "mover". The player can manually switch the mode of an entity with a key press, or use a switcher if they wish to do so in an automated fashion. I also made it so that crafting machine recipes are just different modes, although I haven't decided if this is a good idea or not.

The right one is the new **Flipper**. This building flips an adjacent building over its axis (the direction the flipper is facing). This can be used to flip a clockwise corner belt to a counterclockwise corner belt. Another way to think of this is mirroring the building.

All three of these buildings can be very useful in constructing more complex parts of the factory. Perhaps most notably is how they can be used to create a splitter or merger. However, I do feel like these are all somewhat similar in function and hard to explain. 

For now, all three are in the game, but I plan to revisit this based on feedback.

### Recipe Switching

Like I mentioned above, recipes can be now be switched on crafting machines. I also added some holograms to show what the crafting maching is going to build and what the next required ingredient is. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/PDITnPN.mp4" type="video/mp4" />
</video>

Since these crafting machines might have a lot of recipes, I'm considering allowing the the switch key to be helt in order to bring up a selection wheel of the different recipes. This could also be used on any other building with modes to quickly switch it the desired mode.

---

In addition to all the changes above, there are a lot of smaller or unfinished features that I have been working on. I also have been refactoring old code, rewriting entire systems, making a website, and setting up automated builds for the game. But this post has already gotten quite long so I won't bore you with all the nitty gritty details.

Thanks for reading! I would love to hear your thoughts in the comments below or in our Discord server. Have a great weekend!
