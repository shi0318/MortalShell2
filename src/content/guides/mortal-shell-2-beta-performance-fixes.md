---
title: "Mortal Shell 2 Beta Performance Fixes — Crash, Stutter & Camera Checks"
heading: "Mortal Shell 2 Beta Performance Fixes: Crash, Stutter and Camera Checks"
description: "Mortal Shell 2 Beta performance checks for shader crashes, stutter, camera problems and PC setup, based on Steam requirements and public player reports."
category: guide
cover: /images/mortalshell2-shell-greatsword-closeup.webp
status: community
preRelease: true
order: 5
updatedAt: "2026-08-18"
sources:
  - status: official
    sourceUrl: "https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/"
    sourceDate: "2026-06-05"
    gameVersion: "Mortal Shell II Open Beta"
    lastChecked: "2026-08-18"
    note: "Steam publishes the Beta's Windows, DirectX 12, 16 GB RAM, GPU and SSD requirements and warns that the build is in development."
  - status: community
    sourceUrl: "https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/#app_reviews_hash"
    sourceDate: "2026-08-18"
    gameVersion: "Public Open Beta Steam reviews"
    lastChecked: "2026-08-18"
    note: "Public player reports mention shader-compilation crashes, first-boss crashes, camera problems, occasional stutter and successful runs without those issues."
---

This page is a practical **Mortal Shell 2 Beta performance checklist**, not a promise that one setting fixes every PC. Steam labels the Beta an in-development build, and public player reports are mixed: some players report stable performance, while others report crashes or camera and stutter problems.

## Check the official PC baseline first

The official Steam Beta listing requires:

- Windows 10 or 11, 64-bit;
- Intel Core i7-10700K or AMD Ryzen 5 3600;
- 16 GB RAM;
- RTX 2060 SUPER 8 GB or RX 6600 8 GB;
- DirectX 12;
- 30 GB free space;
- an SSD.

Meeting the minimum does not guarantee a fixed frame rate. It only tells you that your system is within the developer's published floor.

## If the Beta crashes while compiling shaders

Some public Steam reports describe a crash during startup or shader compilation. Try these low-risk checks in order:

1. Update the GPU driver through the manufacturer's official driver channel.
2. Restart the PC after the driver update and let the first shader pass finish without switching applications.
3. Use Steam's file-integrity check for the Beta installation.
4. Close overlays and monitoring tools temporarily to isolate conflicts.
5. If the crash remains, record the GPU, driver version, Windows version and exact crash point before reporting it.

Do not treat a community workaround as an official fix. One public report mentions trying DX11 but also reports graphical glitches; the Steam listing publishes DirectX 12 as the requirement, so DX11 should not be presented as the recommended solution.

## If you see stutter during fights

Start with a repeatable test rather than changing every setting at once:

- turn off ray tracing first if it is enabled;
- test a lower shadow or effects preset;
- compare a fixed upscaling mode with native resolution;
- repeat the same encounter after restarting the game;
- note whether the stutter happens during shader compilation, a boss transition or ordinary traversal.

Public reports include both smooth, stable runs and occasional boss-fight stutter. That difference is why this page records symptoms instead of claiming a universal benchmark.

## If the camera or lock-on behaves badly

Some players report camera lock or camera positioning problems in tight spaces. Before assuming the save is broken:

- unlock and reacquire the target in an open area;
- move away from corners, walls and narrow doorways;
- temporarily test without an overlay or controller remapping layer;
- record whether the camera issue repeats in the same room or only after a specific attack animation.

The exact retail behavior may change after the August 20 launch, so keep the Beta label when reporting the issue.

## How to report a reproducible Beta problem

Include the build, hardware, driver, input device, location, action immediately before the problem and whether restarting reproduces it. The official Beta page directs players toward the game's issue-reporting community channel. A reproducible report is more useful than a general “it crashes” post.

For system facts, see the [Mortal Shell 2 PC requirements](/pc-requirements/). For the broader player feedback snapshot, see the [Mortal Shell II Open Beta review](/mortal-shell-ii-open-beta-player-experience/).
