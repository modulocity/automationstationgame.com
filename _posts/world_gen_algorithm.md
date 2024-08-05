---
title: "Devlog #29: World Synthesis"
header: 
  image: /assets/images/devlogs/devlog_29/event_header.png
tags:
  - Devlog
---



## World Gen Algorithm

When you start a new game in Automation Station, all you have is a single island to call home. But before long, you'll unlock additional chunks of land, getting access to new resources and space to build your factory.

Until now, these islands have been perfectly hexagonal. This shape works well with the hex grid of the game, but its super boring and feels very artificial. The other issue is that hexagonal grids have no straight edges, so even with a rounded tileset, you get these repetitive squiggly island borders that make it feel even more artificial. 

<figure class="align-center">
    <a href="/assets/images/devlogs/devlog_29/hexagonal_island.png"><img src="/assets/images/devlogs/devlog_29/hexagonal_island.png"></a>
    <figcaption>Perfectly Hexagonal Island</figcaption>
</figure>

I always wanted the islands to have a more organic shape, but wasn't sure how to achieve this. It's easy enough to do this for a single island, but once there are multiple islands, they need to all fit together, kind of like a jigsaw puzzle. (I should clarify here that when I say "island" I really just mean a chunk of land that will be unlocked as a single unit, but there is no requirement that there is water between the chunks of lands.) I tried to find how other people solved similar problems, but realized that none of these satisfied all the constraints needed for the game. The set of constraints grew over time as I researched other solutions and learned more about the problem. But eventually I came up with these:

1. Islands should have an organic shape without any repeating patterns
1. A single island should be mostly contiguous
1. Islands should slot together without gaps, similar to a jigsaw puzzle
1. It should be possible to control the range of island size
1. Island generation is seemingly random, but deterministic and reproducible based on a seed
1. Islands can be generated on the fly without generating the entire world first
1. The order in which islands are generated does not change the resulting shape of the islands

I don't know about you, but as I refined the list, I started to doubt if there was a solution that met all the criteria. Most of the procedural generation algorthims I was familiar with fell in to one of two buckets. Either they generated the entire world up front and iteratively evolved and tweaked it to add randomness, or they didn't provide any bounds or guarantees on the size of the islands. 

Initially, I considered an approach based on cellular automata where islands would start of with uniform size and shape and then gradually grow into more organic shapes by trading hex cells with adjacent islands in an iterative fashion. The end result can look quite promising, but its break constraints 6 and 7. Ideally, I could generate a single island, and then later generate its neighbor that would connect seamlessly. But in order to run this cellular automata-based generation, the entire world would need to be generated up front.

This reminded me of how I already solved a similar problem for the height variation in the game. Similar to Minecraft, I used 2D Perlin Noise to solve this. This technique allows you to get random, but smooth variations across a plane. But the most powerful part about it is how you can evaluate the noise function at any point and any order and the result is always the same for a given seed. That means I can evaluate the height at the edge of one island, and then later evaluate the height on the adjacent island and they should smoothly connect.

<figure class="align-center">
    <a href="/assets/images/posts/world_gen_algorithm/perlin_noise.png"><img src="/assets/images/posts/world_gen_algorithm/perlin_noise.png"></a>
    <figcaption>Example of Perlin Noise</figcaption>
</figure>

It isn't super obvious how you would use something like this to generate islands, but Minecraft's biome generation is a good case study. The basic idea is that you have several perlin noise functions: one for temperature, one for humidity, one for erosion, and so on. Then based on how they overlap, you assign different biomes to the region, kind of like a Venn Diagram. 

<figure class="align-center">
    <a href="/assets/images/posts/world_gen_algorithm/minecraft_noise.jpg"><img src="/assets/images/posts/world_gen_algorithm/minecraft_noise.jpg"></a>
    <figcaption>Example Minecraft Noise Functions</figcaption>
</figure>

Unlike the cellular automata approach, generating the islands with perlin noise addresses several constraints, including 6 and 7, but it fails constraint 4. Since players will need to pay to unlock islands one a time, it is important they are of an approximate size to ensure correct balancing and that there is sufficient space to generate all the required resources. 

I realized that the best way to control the size of the islands was to start with a uniform grid of hexagonal islands, just like the old world generation and cellular automata approach. But from here, I needed to somehow use perlin noise to add randomness to the island shapes deterministically. 

<figure class="align-center">
    <a href="/assets/images/posts/world_gen_algorithm/hexagonal_island_grid.png"><img src="/assets/images/posts/world_gen_algorithm/hexagonal_island_grid.png"></a>
    <figcaption>Perfectly Hexagonal Island</figcaption>
</figure>



## Map Mode

## Island Unlock Animation

## Expansion Cores

## Dynamic Resources

## Synthesis & Codex Recipes

## Buoyancy

## Changelog:

```
- Created world generation test setup
- Create new world generation algorithm that produces organic island shapes
- Remove 1 tile gap spacing between island chunks
- Create new island generator to to generate the shape and height map for a single island
- Dynamically add chunks to world when a new island is generated
- Add "Map Mode" where the player can unlock new islands
- Highlight hovered locked islands while in map mode
- Animate hovered island outline in map mode
- Create SDF-based shader for drawing island shape outline in map mode
- Generate tile meshes for locked islands to render island shape outlines
- Expose world generation settings for island shape noisiness, island shape noise scale, and height noise scale
- Add new control prompt when hovering a locked island in map mode
- Add support for hold control prompts with animation
- Create "ripple" shader effect when unlocking an island
- Increase outline animation speed when actively unlocking an island
- Create models for expansion core items
- Create icons for expansion cores
- Show cost when hovering an island in map mode
- Add new system to track the number of expansion cores the player has in their inventory
- Automatically add expansion cores to expansion core inventory when manually picked up
- Show expansion core inventory in new UI panel while in map mode
- Require sufficient expansion cores to unlock an island
- Consume expansion cores after unlocking an island
- Make objects "spawn" on newly unlocked islands, synced with the unlock ripple animation
- Add destructible rocks for stone, copper, and coal
- New world generation authoring settings to control static and dynamic resource spawning
- Add support for spawning a fixed or random number of a resource on an island
- New system to dynamically spawn certain resources (like rocks) randomly over time
- Create new authoring workflow that allows each island to specify different resource spawning settings
- Add new depot and synthesizer buildings (using placeholder art)
- Add new system for tracking connections of certain buildings (like depots to synthesizers and burners to crucibles)
- Create new authoring workflow for synthesis recipes
- Implement new synthesis system to handle crafting with a synthesizer
- Create new UI elements to show synthesis recipes in the codex
- Dynamically populate the codex with synthesizer recipes
- Created new buoyancy system so that items and the character can float in water
- Allow character to jump out of the water
- Prevent player from auto-picking up items immediately after throwing them
```