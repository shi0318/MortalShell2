---
title: "Mortal Shell 2 Steam Deck — Playable, Not Verified, and Why"
heading: "Mortal Shell 2 on Steam Deck: Playable, With Three Named Problems"
description: "Mortal Shell 2 Steam Deck status: Valve rates it Playable, not Verified. Here are the exact tests it failed, and what each one changes while you play."
category: guide
keyword: "mortal shell 2 steam deck"
status: official
preRelease: false
order: 4
updatedAt: "2026-09-02"
cover: /images/mortalshell2-rainy-path-combat.webp
---

Short answer: **Mortal Shell II is rated Playable on Steam Deck, not Verified.** It runs, and Valve's own testing says it performs well at the default graphics settings with a fully functional default controller layout. Three specific tests hold it below Verified, and only one of them is a genuine problem.

The one that matters: **an external controller cannot be used as the primary input.** That is the single hard failure in the report — the other two are readability annoyances.

<figure>
  <img src="/images/mortalshell2-rainy-path-combat.webp" alt="A Mortal Shell 2 warrior on a rain-soaked path with a lantern, used for the Steam Deck compatibility guide" width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Valve's compatibility testing passes Mortal Shell II on performance and controls, and marks it down on text size, button glyphs, and external controllers.</figcaption>
</figure>

## The compatibility report, test by test

| Test | Result | What it means in practice |
| --- | --- | --- |
| Default graphics configuration performance | **Pass** | The out-of-the-box preset holds up on Deck hardware. No manual tuning required to get a playable frame rate. |
| Default controller configuration | **Pass** | Every action is reachable on the Deck's built-in controls without building a custom layout. |
| Interface text legibility | **Warning** | Some UI text is small enough to be hard to read on a 7-inch screen. |
| Controller glyphs | **Warning** | On-screen button prompts do not match the Deck's own controls, so you translate icons in your head. |
| External controller as primary player | **Fail** | Docking the Deck and playing on a pad or an Xbox controller as the main input is not supported. |

The three non-passes are why the badge says Playable. Valve's Verified tier requires all four of the standard checks to pass cleanly, and this game misses on text, glyphs, and external input.

## The external controller failure is the real one

Two of the three marks against it are cosmetic. This one is not.

If your plan was **dock the Deck to a TV and play with a proper controller**, that configuration is the one Valve flags as unsupported. The same failure appears in the SteamOS report as well, so it is not a handheld-screen artefact — it is how the game handles input devices. The Deck's own built-in controls work fully; a second, external pad taking over as player one does not.

Mortal Shell II also has a known external-controller quirk on desktop, covered in the [controller support guide](/mortal-shell-2-controller-support-guide/). If you hit input problems on Deck in a docked setup, that is the page to read first — it is the same underlying behaviour, not a Deck-specific bug.

## Small text on a small screen

The legibility warning is the one most players will actually notice, and it is worth knowing *why* it bites in this game specifically.

Mortal Shell II's interface carries a lot of dense text: Tarstone descriptions, weapon ability wording, Shell bonding tiers, patch-changed item text. Those are exactly the strings you need to read carefully rather than glance at — deciding between two Tarstones is a reading task. On a 1280×800 seven-inch panel, that is where the warning lands.

Two mitigations that do not require modifying the game: run at the Deck's native resolution rather than downscaling, and use the Deck's built-in magnifier when you are reading item text rather than fighting. Neither changes the rating, and neither is a fix — but the difference between "unreadable" and "annoying" is usually resolution scaling.

## Glyphs: what you are actually looking at

The glyph warning means the button prompts drawn on screen are not Steam Deck glyphs. You will be mapping icons to the Deck's physical layout yourself. For a game whose entire defensive layer is timing — Harden, parries, ripostes — that matters most in the first hour, while you are still learning which prompt means which trigger. After that it stops registering.

The [beginner combat tips](/mortal-shell-2-beginner-combat-tips/) and [combat system guide](/combat-system/) list the inputs by function rather than by icon, which is the more useful reference on Deck.

**One caveat on this warning specifically.** The [Week 1 Update](/mortal-shell-2-week-1-update/), published on August 29, states that **"Steam Deck and Steam Controller now display the correct buttons"** and that the game moved to the current Steamworks release for better Steam Deck detection. Valve's compatibility report still showed the glyph warning when it was read on September 2, because Valve re-tests titles on its own schedule rather than automatically after a patch. So the badge and the changelog currently disagree, and the changelog is the newer of the two. Treat the glyph mark as the more likely of the two warnings to disappear at the next re-test.

## SteamOS and Steam Machine ratings

Valve now publishes three separate hardware verdicts, and Mortal Shell II is **Playable on all three**:

- **Steam Deck: Playable.** The five results above.
- **SteamOS: Playable.** Two notes — a game-startup caveat, and the same external-controller-as-primary-player failure.
- **Steam Machine: Playable.** Held back only by the glyph mismatch. The text-legibility problem disappears on a desktop display, which confirms it is a screen-size issue rather than a UI bug.

That last line is the useful one: **on a big screen this game has essentially no compatibility problems left except button icons.** The Deck rating is mostly a statement about a 7-inch panel.

## Battery: plan for a long game

The performance pass tells you it runs. It does not tell you how long the battery lasts, and Valve does not publish that figure for any title. What is measurable is how long people play: across a sample of 498 Steam reviews, the median reviewer had **23.1 hours** logged when they posted, and their accounts now sit at a median of **32.5 hours**, with the top 10% past 43 hours.

That is a 25-to-35-hour game, and Souls-likes are played in long sessions because runbacks and boss attempts do not respect a 40-minute battery window. Two practical consequences on Deck:

1. **Know where you can stop.** Bonfire-equivalent points matter more on handheld than on desktop. See [respawn points](/mortal-shell-2-respawn-points/) and [boss runbacks](/mortal-shell-2-boss-runback/).
2. **Cap the frame rate rather than chasing headroom.** The default preset already passed Valve's performance test, so extra frames cost battery for no rating benefit. The [PC settings guide](/pc-settings/) covers which options are expensive.

## Is it worth playing on Deck?

On the published evidence: yes, if you play handheld. The game passed both checks that decide whether something is *playable at all* — performance and controls — and the two warnings are readability, not function. Steam reviews sit at **Mostly Positive**, 12,476 of 16,292 positive, or **76.6%**, and the [Steam reviews breakdown](/mortal-shell-2-steam-reviews/) covers what the negative quarter is about (performance and launch bugs on desktop, largely addressed by the post-launch patches).

If your plan was to dock it and use a pad, that is the configuration Valve says is not supported, and you should treat the desktop build as your primary platform instead. Check the [PC requirements](/pc-requirements/) before assuming a docked setup will behave.

## What this page does not claim

- **No frame rate or battery-life figure.** Valve publishes a pass/fail on default-settings performance, not numbers, and this site has not benchmarked the Deck build.
- **No recommended settings preset.** The default configuration is what passed testing; anything beyond that is untested here.
- **No Proton version or workaround.** Not published in the compatibility report.
- **No claim about the OLED versus LCD Deck, or Deck 2.** The rating is per-title, not per-revision.

Compatibility categories were read on **September 2, 2026**. Valve re-tests titles after patches, and Mortal Shell II has already had two — Balance Patch 1 and the Week 1 Update — so a rating can move to Verified if the glyph and text issues are addressed. The Week 1 Update says the Deck glyphs already were. For the patch record see [Balance Patch 1](/mortal-shell-2-balance-patch-1/) and the [Week 1 Update notes](/mortal-shell-2-week-1-update/), and for the wider platform picture see [Steam features](/steam-features-single-player-cloud/).
