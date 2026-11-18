---
title: "Mortal Shell II PC Requirements and Performance Troubleshooting"
heading: "Mortal Shell II PC Requirements and Performance Troubleshooting"
description: "Check the published PC hardware floor, then distinguish shader hitches, crowded areas, frame generation and latency settings without invented FPS promises."
category: guide
status: official
preRelease: false
updatedAt: "2026-11-18"
cover: /images/mortalshell2-shell-greatsword-closeup.webp
sources: []
---

Start with the full game's published minimum requirements, then identify the symptom you actually need to solve. A pause after loading, a slow crowded fight and an input-delay complaint are different problems. The same graphics change need not help all three. This guide combines the current Steam hardware listing with specific documented optimization changes; it does not publish a personal benchmark or promise an official frame-rate target.

## Published PC requirements

The Steam Windows listing checked on November 18, 2026 provides the following minimum tier. It does not supply a complete recommended CPU/GPU tier or a resolution-and-quality performance guarantee.

| Component | Published minimum |
| --- | --- |
| Operating system | Windows 10 / 11 |
| Processor | Intel Core i7-10700K at 3.8 GHz or better, or AMD Ryzen 5 3600 at 3.6 GHz or better |
| Memory | 16 GB RAM |
| Graphics | NVIDIA GeForce RTX 2060 SUPER 8 GB or AMD Radeon RX 6600 8 GB |
| DirectX | Version 12 |
| Storage | 70 GB available space |
| Additional requirement | SSD required |

Check the drive containing the Steam library, not only the drive where a desktop shortcut exists. Available storage is not a promise about download size, patch staging space or every future installation. Leave room for updating. Meeting the table establishes eligibility against the published floor; it does not identify the cause of a particular crash or certify every laptop power configuration.

For purchasing and installation, use the [installation guide](/download/). A retail requirement is not evidence that an old Open Beta build remains downloadable, and a beta result is not automatically a benchmark for the installed retail version.

## Record the failure before changing settings

Write down whether the issue happens in the menu, after shader compilation, when entering an area, while cleansing a tar gate or during a dense fight. Include the game build if visible, GPU driver, display resolution and relevant quality settings. A location-specific report is more useful than saying the entire game runs badly.

Choose a short comparison that you can repeat without risking important progress. Keep the Shell, route and encounter conditions similar. Changing a weapon, entering a different dungeon and switching several display options creates too many competing explanations. Compare the same action before drawing a conclusion about the setting.

Distinguish a crash from an image pause. If sound and input continue, note that; if the process exits, preserve its error message. If the image stays smooth but a button response feels delayed, follow the latency section rather than assuming that storage is causing the problem.

## Shader and loading hitches

The official Week 1 update describes a significant hitch shortly after the shader compilation screen and says that work was moved into the menu. That is a specific historical fix, not proof that every later pause has the same cause. Another official hotfix records rebuilt shader/PSO caches and world HLODs.

Confirm that Steam has applied the available game update before troubleshooting a symptom already addressed in an older build. Allow the loading process to finish before judging whether the next area is responsive. Repeatedly terminating a progressing launch makes it harder to distinguish a slow operation from a genuine failure.

Do not delete arbitrary shader directories, configuration files or saves just because a post says a cache reset helped its author. A file reset is a separate intervention with a specific target and recovery plan. First record the error and current settings; use normal Steam file verification when damaged or missing installation files are a plausible cause.

## Crowded areas and location-specific slowdowns

The Week 1 notes separately mention reducing enemies in some crowded areas, rebuilding dense-prison spawners and fixing a frame-rate drop when cleansing tar gates. These are useful distinctions: crowd load, an environmental interaction and shader work were separate documented problems.

If your problem appears only in a busy fight, compare that encounter with a quieter stretch at the same display settings. Do not call that comparison a controlled FPS benchmark: the workload differs. Its purpose is to establish where the failure occurs so that the next test or support report is specific.

If a visible pause repeatedly follows cleansing a gate, capture the sequence and check the installed version. Changing combat equipment is not a demonstrated graphics repair. Conversely, a consistently missed dodge during an otherwise smooth encounter may require a control or combat check rather than lower texture settings.

## Frame generation and display changes

The Week 1 notes say NVIDIA frame generation became selectable on a wider range of cards. That does not mean every GPU supports the option or that every generated frame improves control response. Inspect the options available to your own hardware instead of copying a configuration from an unrelated card.

For a problem that starts after enabling frame generation, compare the same scene with that feature disabled while retaining the other settings. Note image quality, response and stability separately. A displayed FPS counter alone cannot tell you whether input feels better or whether intermittent pauses have disappeared.

A later optimization hotfix fixed a missing VSync tooltip while frame generation was enabled. A tooltip fix is not evidence of a newly measured performance increase. Read what the current menu actually allows. Do not combine frame generation, VSync, resolution and display mode changes in one attempt and then attribute the result to one of them.

## Low Latency Mode and input complaints

An official hotfix added a Low Latency Mode menu option for NVIDIA Reflex and AMD Anti-Lag 2. Use the game's current exposed control where supported rather than assuming that an Engine.ini line from an old post is necessary.

Compare a repeatable input, such as a menu response or a familiar movement in a safe area, before returning to a demanding fight. Keep the controller connection and display setup unchanged during that comparison. A different input device or Bluetooth connection adds another variable.

This is not a recommendation to force every external driver setting. If the in-game option is unavailable or behaves unexpectedly, record the GPU, driver and menu state. A report about one manufacturer's supported feature cannot establish how another implementation behaves.

## When to stop experimenting

Stop making configuration changes when you cannot identify which alteration affected the symptom. Restore the last known stable display setup when possible, preserve saves and report the repeatable failure through the game's official support route. Include the steps, location, hardware, build and changes already tried; omit account credentials.

Use the [guide directory](/guide/) when the issue is progression or combat rather than performance. A stable image does not guarantee a successful encounter, and a difficult fight does not itself establish a PC fault. Keeping those questions separate prevents replacing a gameplay decision with an unsupported system tweak.
