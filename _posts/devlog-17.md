---
title: "Devlog #17: More Stacking"
header: 
  image: /assets/images/devlogs/devlog_17/event_header.png
tags:
  - Devlog
---

Hello again!

I've spent the last couple of weeks interating on the new item stacking mechanic that I showed off in the last devlog. While there isn't a ton of new features to show off, there are a lot of interesting design details to cover. I also wanted to give an inside look at my design process for something like the Stacker. Let's get into it!


## The Tube Design

I showed a version of the Stacker in the last devlog that was able to stack items.

<video width="100%" autoplay="autoplay" loop="true" muted>
  <source src="https://i.imgur.com/yhm3Lfr.mp4" type="video/mp4" />
</video>

The player is able to drop all of the items into the top of it and, once full, the stacker will output the final stack. I think the idea of filling a tube actually works really well for stacking and generally feels intuitive.

So what was wrong with this design? As you can see in the gif above, the resulting stack is not always the same. It relies on the order in which the items enter the tube. Unfortunately, because the items must enter the top of the tube, all of the conveyor belts sending items are competing to send their item to the same space. The game resolves this by having the senders take turns, but this is mechanic is not easy to teach the player and is hard to leverage effectively. But there is nothing stopping a single conveyor from sending multiple items to the stacker if the other conveyors happen to run out of items. The player could address this by ordering all of the items on a single input belt, but that is not a simple task either. In other words, if the player wants a specific order of 3 items (which is important for future crafting plans), there is no easy way to guarantee that. 

## Stack on Drop Design

As I mentioned in the last devlog, the original plan for item stacking was that it wouldn't require a special building. Instead, stacks could be formed by simply dropping items on top of each other. Items could be dropped from cliffs or launched from launchers. 

I still think this idea is pretty cool, but it has some serious drawbacks. Firstly, this would lead to items accidentally stacking all of the place. Any time a conveyor backed up with items, other items might start dropping from cliffs onto occupied conveyors and forming stacks. Luckily, down ramps can help here for avoiding cliff drops, but not for launchers. A launcher would always stack if the destination was occupied. 

The other issue with the design is that there is no easy way to guarantee a specific stack of items. At least compared to the tube design, this is a bit easier since the stack can be formed gradually. A cliff could drop one item on top and then later on another cliff drops a third item. No longer do we have to rely on weird tie-breaking behavior. However, there is nothing stopping the items from continuing on if there happens to not be an item ready to drop onto it. 

To summarize, with this design if conveyors back up we get accidental stacking, and if conveyors run low on items we get incomplete or incorrect stacks. Doesn't sound very fun to new players at the start of the game.

## Other Designs

In effort to fix these problems, I spent many days brainstorming new ideas and hearing your suggestions on Discord. 


Bottom feeder
Adjacent welder
Arm from cliff
Transposer
Tractor beam


Huge thanks to those of you that were willing to chat about stackers for hours on Discord. TODO

## Changelog:

Here are all the important changes from this sprint: 

- TODO

That's all for this devlog! The plan for the next sprint is to finally add support for crafting, so stay tuned for the next devlog in two weeks.

If you have any feedback on the new buildings and mechanics, feel free to leave comment below or join our Discord server. Thanks for reading and have a great weekend!

-Scott