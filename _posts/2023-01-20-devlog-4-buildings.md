---
title: "Devlog #4 Crafting vs. Constructing Buildings"
header: 
  image: /assets/images/devlogs/devlog_4/header_image.png
tags:
  - Devlog
---

Hey folks!

It's been quite a while since my last post, but don't worry, I've been hard at work on Automation Station during the last several months. A lot has been added to the game but there is still a lot to do. Today I wanted to revisit a design decision I made early on in the development of Automation Station. 

## How are Buildings Made?

Like pretty much every other automation game, Automation Station requires the player to build a factory from various buildings. Those buildings are responsible for crafting, processing, and transporting items. An often overlooked element of these games is how the buildings themselves are made. There are two common approaches for creating buildings in automation games that I'll refer to as "Crafted Buildings" and "Constructed Buildings". 

### Crafted Buildings

When people think of automation games, the first game that comes to mind is typically Factorio. In Factorio, the player has to craft every building using the same crafting processes required to craft items. For example, you need an assembly machine to make both an iron gear and a conveyor belt. You even make other assembly machines in an assembly machine.

One of the important concepts from games like this is that a building has two forms. There is the item form that can travel on conveyor belts and be placing in inventories and there is the placed form for when the building exists and can interact with the game world. An iron gear is not a building, so it only has an item form, but a conveyor belt has both an item and a placed form. This has the rather odd quirk that a conveyor belt item can be placed on top of a placed conveyor belt. 

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/eVDlJD6.mp4" type="video/mp4" />
</video>

I call this method of creating building "crafting" since it uses the systems of the game that are commonly referred to as crafting. Games like Dyson Sphere Program and Minecraft work in the same way. 

### Constructed Buildings

The other common approach is to create buildings through a separate build mode. In this mode, the player can plan out where they want to place a building that doesn't yet exist. Then, depending on the game, the building is either created immediately from the items in the player's inventory, or it is queued up for worker or drones to construct from ingredients stored elsewhere. I refer to this method of building creation as "constructing".

In the game Satisfactory, placing a building using the "build gun" will result in all the ingredients flying out of your character and into the new machine. After a slick animation, the building is ready to operate.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/DZT8G4X.mp4" type="video/mp4" />
</video>

In some other games, especially colony or city buildings, the building takes time to complete as workers have to make trips to collect and drop off the required materials. However, I don't think this approach is viable for an automation game without workers or drones. For the rest of the article, I'll be looking specifically at Satisfactory's near-instant building "constructing" and comparing it to the "crafting" approach above.

In games with "constructed" buildings, the buildings cannot exist as items. They can only exist in their building form or be dismantled back to their original ingredients.

### Buildings in Automation Station

Since the start of the project, I've opted for the "crafted" buildings approach in Automation Station. The player would have to craft everything in the game through the same crafting processes. For my first attempt, I decided to represent the item forms of buildings as little crates. The idea was that each crate would have a picture on it depicting what it was.

![Crates](/assets/images/devlogs/devlog_4/crates.gif)

This is actually pretty similar to how both Dyson Sphere Program and Astroneer handle item forms of buildings. However, I quickly realized that, for the art style I was using, it would be quite difficult to make the crates easily recognizable and distinguishable. Eventually I tried my hand at making miniature models for the different buildings in the game.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/uW0I188.mp4" type="video/mp4" />
</video>

Now it was much easier to see what the small items were without relying on tooltips or tiny pictures. This is still how buildings are represented in Automation Station today. Every building has a miniature model for the item form of the building, which can be placed on conveyor belts and in the player's backpack. Hovering the ground while holding a mini building will make it automatically expand to the full building shape. 

## Problems with Crafted Buildings

While I think the "crafting" approach to buildings is totally viable for some games, I now realize that there are a number of problems with it, especially when paired with other design decisions I've made for Automation Station.

### Increased Complexity

The first issue is the extra complexity added by making buildings have both an item and placed form. This complexity has definitely made the game more difficult to develop, but I think it also extends to players playing the game. It takes some time to get used to the fact that a conveyor belt can exist as both an item and a placed entity, and only the placed version is functional. It is also not obvious when a newly crafted item is actually a building or not.

### Trickier Art

When it comes to the visuals of the game, I'm actually really happy with how the tiny buildings look and behave. It is quite satisfying to pickup a conveyor belt and drag it into your backpack, collapsing down into the cute tiny item-sized belt. But with each new one I've made, it has become increasingly difficult to design compelling and legible tiny models for every building. This is one the reasons I’ve resisted adding larger buildings to the game, as making item-sized versions would be much harder. It is also difficult to have enough contrast to distinguish, for example, a conveyor belt item sitting on top of a placed conveyor belt. Personally, I find that Factorio suffers from this exact problem, as shown in the gif at the top of this post. I could artificially add contrast by brightening items, but you still end up with a lot of similar colors on top of each other.

### Trickier Controls

Another complication with the item-sized buildings is the controls for manipulating them. It should be easy to move them around, place them on the ground, or slot them into other buildings. I spent a lot of time making the controls smart enough to figure out when the building should be in it's item form or placed form depending on the context, but its not perfect. Things get especially problematic with pushers and rotators are moving stuff around near where you are trying to interact. And sometimes you just want to drop a conveyor belt item on the ground without placing it, so now you need separate place and drop buttons.

### One Crafting Mechanic... Or Not?

One of the main benefits of the “crafting” approach for buildings is that there is a single consistent crafting mechanic in the game. Everything is made from machines, including the machines themselves. The player only needs to understand one crafting mechanic to play the game. However, this also means that the player has to understand crafting at the very start of the game in order to make anything at all. Most games featuring "crafted" buildings have a manual crafting solution that streamlines the start of the game. However, this manual crafting is essentially a second crafting method so a lot of the benefits of a singular crafting mechanic are lost. Also, there is nothing preventing overuse of the manual crafting which can lead to boring gameplay.

> Given the opportunity, players will optimize the fun out of a game.  -- Soren Johnson

To further complicate things, the crafting mechanic for Automation Station will be more complex than other automation games, so there isn't an obvious manual crafting analog and it is harder to learn.

### Too Many Recipes

The crafting recipes in Automation Station will have a spatial element to them that require the ingredients to be arranged in a specific way, similar to the crafting grid in Minecraft. While there are basically an infinite number of recipe arrangements in this system, it is surprisingly difficult to come up with good recipes for every buildings, especially when each building is one hex tile big and appears to be made of the same stuff. 

### Too Many Items

The last issue is inventory constraints. Automation Station currently has a very limiting 4 slot backpack due to the diegetic design of the backpack interaction. Needing to carry a bunch of different types of buildings on your character becomes basically impossible. Canisters (featured in devlog 2) allow you to stack multiple of the same building, but they don’t help for all the different types of items and buildings you need to carry.

> **Note:** I’m currently thinking of switching to a more traditional inventory to provide more than 4 item slots. This would make this point less of a big deal, but regardless of the exact inventory approach, handling all the different building items would make inventory management more of a hassel.

## Revisiting "Constructed" Buildings 

With “constructed” buildings, most of these problems disappear. There would only be one representation of a building: the “placed” version. There is also only one model to represent the building. Supporting larger buildings is less of an issue since they don’t need to be able to fit in the player’s backpack or on a belt. 

The controls can also be much more intuitive. Items can be placed in machines or dropped on the ground. Buildings can only be placed on the ground or dismantled. There would need to add some kind of build menu to select the buildings, but that can have a dedicated UI, separate from the inventory, that organizes buildings into convenient categories. 

> **Note:** I have a debug feature to pause all the machines so that I can more easily build things. I've been considering putting it into the the final game, but wasn't sure of the best way to incorporate it. Having the pause functionality tied to when the build menu is open seems like a natural solution.

While there are now two crafting mechanics (crafting in machines and placing buildings), I don’t think it is that much more complicated to understand. Games like Satisfactory have proven that is can be successful. There is also another huge benefit: there is no need for manual crafting. At the start of the game, the player just needs to make buildings directly from raw resources. This will let them set up smelting and other refining processes to get the items they need to craft more advanced machines. But perhaps most importantly, the player doesn't have to learn about the actual spatial crafting mechanic in Automation Station until later into the game, once they are used to all the other controls and mechanics.

Finally, since the buildings would be constructed directly from the items in the player’s inventory, the “recipes” for buildings don’t need to feel super unique or have a memorable spatial arrangement. And the player doesn’t need to sacrifice inventory space for all the different types of buildings.

## Conclusion

Overall, it seems like a huge win to switch to "constructing" buildings instead of crafting them. However, I haven't actually implemented this version so I may discover other problems with it.

Before embarking on this rather large change, I'd love to get your feedback. Do you prefer "crafting" or "constructing" buildings in automation games? And why?

Let me know in the comment section below or come join our Discord to chat with me and other folks in the community.

Thanks for reading!

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/LSeTFOa.mp4" type="video/mp4" />
</video>