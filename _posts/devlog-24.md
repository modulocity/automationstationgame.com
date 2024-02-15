---
title: "Devlog #24: Touching Grass"
header: 
  image: /assets/images/devlogs/devlog_24/event_header.png
tags:
  - Devlog
---

Hey folks! It's been a long time coming but I've finally added grass and bushes to the game. Long gone are the days of only looking at blubber trees on desolate islands. Also, arms are back! However, the majority of this sprint was focused on the interaction systems and UI changes to streamline gameplay. There is a lot of talk about so let's get right into it.

## Bushes and Grass

Automation Station is a game about automation, so it hopefully isn't surprising to hear that my priority has been on the game's systems. I always planned to add more vegetation and life to the world, but I kept telling myself that I can add it later once the "core" of the game is done. But it had been literally years since I added the blubber tree, the only resemblance of life in the entire game. At this point, I think I could safely justify spending a couple of hours on some new plants. So that's what I did!

<gif of grass and bushes>

As you can, the island is now full of little bushes and patches of grass, making it a lot more lively. It also means that I can reduce the number of blubber trees without it feeling too barren. This is great because the trees cause several issues with obscuring the player or buildings, so reducing the quantiy helps a lot.

While I think these bushes and grass are servicable, they are only placeholder. As I mentioned above, I'm trying to not spend too much time on making the world pretty at this point, so I went with the easiest and fast option: I took my leaf shader from the blubber trees and and slapped it on some bush-shaped blobs to make the bushes. And the grass is pretty much the same, but applied to a flat hexagon shape. 

I've been fighting the urge to dive into more sophisticated grass shaders for a long time now, but eventually I'll give in. So you can expect the grass and bushes to look a lot better in the future. 

## Arms

Yup, arms are back. **Arms** are a building that picks up items from an adjacent building and places items in a different adjacent building. If you're familar with Factorio, it's essentially an inserter.

<gif of arms>

If you've been following the development of Automation Station for a while, you'll probably know that I don't like arms. My main issue is that they feel too similar to a conveyor belt. Both transfer items from one place to another, so why do we need two buildings? This is the question I've been struggling with for years... and I mean years.

Consider the crucible. Ore needs to be placed inside of it, then it is heated up and it produces an ingot. Getting ore into the crucible can be accomplished in a lot of ways, such as dropping them in from a cliff or ramp, launching them in, or dropping them from a hopper on top. But how do you get the finished ingot out of the crucible?

![Crucible Emptying](/assets/images/devlogs/devlog_24/crucible_emptying.png)

After deciding against arms early on, my solution had been to add a hinge to the crucible that would "pour" the ingot out on to a belt. This works pretty well, but it has a few problems. Firstly, the crucible is the first building you unlock, before getting access to belts or other automation tools. It could pour on to the ground, but this makes a mess and is unwieldy. Or it is smart and waits to pour until there is an output, but that makes the crucible complicated and confusing, especially when it shows indicators for the pouring functionality. Secondly, the integrated hinge is a feature that I will need to include on all of the buildings that I wish to output from. This adds an art constraint to a huge pile of other art constraints that I'm already struggling with. Thirdly, now that height is an integral part of the game, it is critically important that the player understands the output height of the crucible. With a rotating hinge design, this is not very intuitive or clear. I would need to rely pretty heavily on indicators to help the player understand the behavior. And lastly, I want the crucible to be a simple as possible. Ideally, the only thing it does is smelts when heat is applied. But this design requires the crucible to also transfer items, just like a belt. And at that point, I may as well have something like an arm.

With the re-introduction of the arm, I can get the exact behavior I want for the crucible and other buildings that need to be unloaded. An arm is the only building that can pick up items. Belts can only recieve items from other belts or have items dropped on to them. There are still a few issues with arms and details to work out (especially concerning height and drops), but I think arms are the best solution going forward. 

I have a lot more I can say on the topic, but I'll save that for a future rambling on discord. But I'd love to get all of your thoughts on this change, so let me know in the comments below or in our discord.

## Interactions & Controls

The game's controls and interactions have gone through several evolutions throughout the game's development. In the initial prototype, there was no character and the game was all about placing buildings. When I first added the character, I reworked a lot of the interactions to be similar to the game Astroneer. Specifically, items could be moved around with the cursor between the character's backpack and the the buildings. While this system was super tactile and playful, it was pretty finicky when the camera was zoomed out and it didn't work on controller at all. To solve these issues, I introduced an interaction system similar to Stardew Valley. Instead of tactile backpack, there would be a toolbar and inventory. Selecting an item on the toolbar would place the item in the player's hands, allowing you to quickly add that item to a building.

This was a huge improvement for the style of game and made it a lot easier to play. However, there were still some issues that were coming up in playtests. Specifically, using the same button for picking up and placing items was problematic as it resulted in lots of cases where the player would do the opposite of what they wanted. Also, the held item system was a bit cumbersome as you constantly needed to store items in order to harvest resources or manually smelting and then restore those held items afterwards.

To address these issues, I plan to make the following changes:
- Primary button (left click) deposits items, smelts, harvests resources, and activates pylons
- Secondary button (right click) retrieves items
- While holding an item, the player can still smelt and harvest without needing to store the item.
- The "held" item will be moved to a new top slot on the backpack and become the "active" item which matches the selected item in the toolbar.
- Remove shortcut to store the active item.

The basic idea is to switch to a system where most interactions are on the primary button, only using the secondary button when that is impossible due to ambiguity. And the changes to the held/active item should help streamline a lot of the interactions.

Here is a look at smelting while holding an item. I still plan to move this held item to the top of the backpack, but hopefully you can see how much easier it is to manually smelt some ore.

<gif of manual smelting>

I plan to continue playtesting and iterating on these changes, but it already feels a lot better to play.

## Tooltips & Control Prompts

Another issue that came up in playtesting is that players didn't know what they were interacting with. In some cases, the control prompts would give some hints (e.g. "Left click to extract stone"), but there were several cases where it was impossible to know what an object was or how to interact with it.

I spent the last couple of weeks overhauling the UI to add a lot of missing information.

<gif of UI changes>

Specifically, hovering an object now shows its name at the top of the screen. If an object is interactable, I show all of the control prompts, even if some of those interactions are currently not possible. Some objects can have lots of prompts, so I decided to move them to the bottom of the screen so that they aren't in the way. Finally, when hovering an item in the toolbar, it now adds a little tooltip giving the name of the item.

When I first started adding these new UI elements, I added a lot more information, such as item descriptions and building statuses. While this was useful in some cases, it really cluttered the UI. And for things like building statuses, you could usually figure it out based on the building's appearance and its behavior. I decided to remove all but the most essential pieces of information to keep the UI a bit cleaner. If the player still wants more detailed information, I think it would be best to show that in some kind of codex. 

However, there were still a few pieces of building information that were necessary in the UI. When hovering a canister or anything with storage, it is important to know how many items are inside. The radial indicator helps a bit, it sometimes you want the exact number. And when hovering a pylon lock, it is important to know exactly how many items it needs so that you can prepare accordingly. Thus, when hovering those objects, a bit of extra information appears at the top of the screen. 

<gif of storage and lock panels>

UI is definitely one of my weakest areas of game development, but I'm really happy with how this is coming together. I have a whole list of other little tweaks and style changes I want to make, but the priority is on making the UI usable and presenting all of the required information. I'll continue to iterate on the UI aesthetics later on in development. 

## Better Indicators

In the last devlog, I showed off some of the indicators I added to buildings to help explain their behavior. With the reintroduction of the arm, I revamed all of the indicators for item transfer. Now the belts, ramps, arms, and launchers all use a consistent style and timings to work well with each other.

## Wrap up

That's all I have for this devlog. Thanks for taking the time to follow along with my development journey. If you have any feedback or suggestions, I'd love to hear them in the comments below or in our Discord server.  

## Changelog:
- Re-added arms
- Implemented functionality for arms picking up items from adjacent buildings
- Added gizmos for arms
- Improved gizmos for belts and launchers
- Allow harvesting and smelting while holding an item
- Allow items to be picked up from buildings while holding an item
- Move harvest and smelt control to left click
- Filling a cache lock or canister will no longer set active item in toolbar
- Bulk add and remove items from canister with Shift + left click instead of holding down left click
- Remove deposit functionality from crucible, tree tap, and mining drill
- Update model for canister to make the height more consistent with other buildings
- Added bushes
- Added grass patches
- Grass and bushes now auto-hide when a building is placed on top of them
- Changed hopper cartridge unlocks to unlock arm and canister instead
- Demolishing buildings now refunds all items used to make it
- Building info now has a "Cost" label to clearly indicate the items needs to construct the building
- Remove checkmarks from building info panel
- Disable the building in the build menu when it cannot be afforded
- Added hover info panel to bottom right of the screen that shows slot contents, storage, crucible status, burner status, etc.
- Replaced hover info panel with a smaller hover info tooltip at the top of the screen. Only shows storage and lock requirements.
- Add item info panel when hovering item in toolbar
- Replaced item info panel with smaller tooltip
- Proxmitiy system now measures from the center of the hovered object instead of the cursor
- Prevent arms from removing ore from the crucible, while still allowing the player to do so
- Remove requirement that object needed to be interactable to be hovered
- Added shortcuts for quickly selecting an item in the toolbar
- Fix burner slot accepting non-burnable items
- Turn off support for hovering items. This is no longer necessary with auto-pickup for loose items and being able to pick up items from buildings by hovering the building itself.
- Make entire decrypter glow when cartridge is finished being decrypted
- Prevent harvesting and smelting from infinitely far away (sorry Sean)
- Add support for picking up and placing stacks of buildings
- When picking up a building, also pickup all buildings on top of it
- Improve the cursor position when hovering the sides of objects
- Repositioned and restyled control prompts to appear at the bottom of the screen, just above the toolbar
- Added new control prompts for "hold" interactions and "modifier" interactions
- Created a new warning popup system to tell users why an interaction is not currently possible
- Add warnings for attempting to deposit or retrieve items when unable to do so
- Hide any tree that is obscuring the hovered object 

Cheers!

-Scott