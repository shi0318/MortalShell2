---
title: "Mortal Shell 2 Open World Stutter and Frame Generation"
heading: "Mortal Shell 2 Open World Stutter"
description: "Fix Mortal Shell 2 open-world stutter on PC: what each patch changed, the October 13 shader cache rebuild, Low Latency Mode, dungeon streaming and settings."
category: "guide"
keyword: "mortal shell 2 stutter"
status: "community"
preRelease: false
order: 4
cover: "/images/mortalshell2-world-map-overview.webp"
updatedAt: "2026-10-15"
sources: []
---

Most performance complaints about Mortal Shell 2 on PC are **traversal stutter** in the open world rather than low average frame rate. Four patches since launch have targeted it directly.

![The Mortal Shell 2 world map of Fainweald and Mammon](/images/mortalshell2-world-map-overview.webp)

## What the patches changed

| Patch | Performance change |
|---|---|
| 6 September | Lower volumetric fog density on lower GI settings; lighting and effects optimisations |
| 14 September | Crash and stability improvements |
| 24 September | **Low Latency Mode** option (NVIDIA Reflex / AMD Anti-Lag 2); VSync tooltip with Frame Generation; hub shadow and texture optimisation |
| 13 October | **Rebuilt shader (PSO) caches** and world HLODs; fixes for slow-streaming dungeons with "seamless dungeon streaming" on and double dungeon loading; optimisations for castle stairs, mine pillars, tomb floors and catacombs |

## Settings that help

1. **Let shaders rebuild.** After the 13 October patch, the first launch recompiles shaders. Wait on the menu before loading a save.
2. **Turn on Low Latency Mode** if you use Frame Generation – it reduces the input lag that makes generated frames feel worse.
3. **Turn off seamless dungeon streaming** on slower drives if dungeon doors still hang; the option trades loading screens for streaming hitches.
4. **Drop global illumination one step** – it lowers volumetric fog density too.
5. **Install on an SSD.** World HLOD streaming is the main source of hitching when riding Bone Portals or sprinting across Fainweald.

## Not a settings problem

If stutter only happens entering one dungeon with **Egon's Stone** equipped, that was a bug fixed on 24 September – see the [Egon's Stone hotfix](/mortal-shell-2-egons-stone-hotfix/).

## Related pages

- [Retail PC settings guide](/mortal-shell-2-retail-pc-settings-guide/)
- [Frame generation fix](/mortal-shell-2-frame-generation-fix/)
- [Reflex stutter fix](/mortal-shell-2-reflex-stutter-fix/)
- [PC requirements](/pc-requirements/)
