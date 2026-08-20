# Mortal Shell II Launch Content Cluster Design

## Goal

Add 20 new, indexable Mortal Shell II pages for launch-day search intent, combining practical guides with clearly labelled answers to questions appearing in official Steam material and public Steam player discussions.

## Editorial boundary

- The full game is treated as released on August 20, 2026, using the official Steam product page and Steam Community Announcements as primary sources.
- Official Steam facts are written as confirmed facts.
- Steam player reviews are written as community-reported experiences, never as developer-confirmed mechanics and never as our own hands-on testing.
- No page invents a named weapon, boss, drop location, damage number, or fix that the checked sources do not establish.
- Pages use the existing `official`, `community`, and `beta` status system. The page title, H1, description, and first paragraph contain Mortal Shell 2 or Mortal Shell II.

## New URL set

### Difficulty and progression

1. `/mortal-shell-2-difficulty-options/`
2. `/mortal-shell-2-executions-heal/`
3. `/mortal-shell-2-turn-off-the-sun/`
4. `/mortal-shell-2-leveling-system/`
5. `/mortal-shell-2-reset-shell-abilities/`
6. `/mortal-shell-2-fragments-weapon-skills/`

### Weapons, exploration, and combat questions

7. `/mortal-shell-2-weapon-upgrade-guide/`
8. `/mortal-shell-2-melee-ranged-weapons/`
9. `/mortal-shell-2-dungeons-open-world/`
10. `/mortal-shell-2-how-many-dungeons/`
11. `/mortal-shell-2-open-world-size/`
12. `/mortal-shell-2-sidearms-and-ranged-combat/`

### Boss and death-loop discussions

13. `/mortal-shell-2-boss-difficulty/`
14. `/mortal-shell-2-boss-runback/`
15. `/mortal-shell-2-respawn-points/`

### Launch PC problems

16. `/mortal-shell-2-blurry-graphics-fix/`
17. `/mortal-shell-2-reflex-stutter-fix/`
18. `/mortal-shell-2-frame-generation-fix/`
19. `/mortal-shell-2-engine-ini-settings/`
20. `/mortal-shell-2-launch-bugs/`

## Source and image plan

- Steam full-game listing: `https://store.steampowered.com/app/2584270/Mortal_Shell_II/`
- Steam launch announcement: `https://steamcommunity.com/games/2584270/announcements/detail/1836506165580838`
- Steam advance-access announcement: `https://steamcommunity.com/games/2584270/announcements/detail/1840944183786960`
- Steam public review feed: `https://steamcommunity.com/app/2584270/reviews/?browsefilter=mostrecent`
- Existing local Steam/official images in `public/images/` are reused with topic-specific alt text and cover assignments. Every new Markdown page includes a figure so the page has a relevant visual asset without downloading or hotlinking third-party files.

## Internal linking and navigation

- New pages remain out of the primary navigation.
- The existing Guide collection automatically includes them in newest-first pagination.
- Category pages and the new articles use contextual links to `/guide/`, `/weapons/`, `/shells/`, `/bosses/`, `/map/`, and related launch pages.
- No bulk footer links or cross-site links are added.

## Acceptance criteria

- Exactly 20 new Markdown guide files are added; existing pages are not duplicated.
- Every new page has valid frontmatter, a 50–170 character description, a cover image, at least one source with `lastChecked: "2026-08-20"`, and a clear status boundary.
- Every title/H1/description targets a distinct Mortal Shell 2 search intent.
- Every image source exists locally and every figure has descriptive alt text.
- Existing tests pass, the Astro build succeeds, and the generated sitemap contains all 20 new trailing-slash URLs with `2026-08-20` lastmod values.
