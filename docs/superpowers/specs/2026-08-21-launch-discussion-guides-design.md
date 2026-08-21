# Mortal Shell II Launch Discussion Guides Design

## Goal

Add four indexable, post-launch Mortal Shell II pages that answer active player questions from official Steam material and public Steam discussions without inventing retail mechanics.

## Scope

Create these stable root-level URLs in `src/content/guides/`:

- `/mortal-shell-2-balance-patch-1/` — official Balance Patch 1 changes.
- `/mortal-shell-2-beta-save-missing/` — why Open Beta progress is not present in the retail save.
- `/mortal-shell-2-language-support/` — Steam-listed languages and the English full-audio boundary.
- `/mortal-shell-2-great-martyrs-blade-patch/` — Great Martyr's Blade's official 20% damage increase and what remains unverified.

The pages will not be added as new top-level navigation items. The existing Guide, Weapons, and News collection pages will discover them through the normal content collection and pagination.

## Evidence boundaries

- The official Balance Patch 1 Steam discussion is the authority for patch values and says the PC patch is live while PlayStation 5 and Xbox Series rollout is forthcoming in that announcement. The page will date this statement and avoid claiming universal platform rollout.
- The official Open Beta Steam listing is the authority for reset rules, the Flayed Harbinger cosmetic, and the prologue-skip reward after progressing beyond Marrow Keep. Community discussion is used only to explain the user question, not to establish a recovery method.
- The live Steam app listing is the authority for the supported-language names and its English full-audio marker. The article will not infer voice-over support for other languages.
- The Great Martyr's Blade article will use the official patch's `+20%` attack-damage change and the public discussion's interest as context. It will not invent the weapon's location, upgrade costs, damage table, or declare it the best weapon.

## Media and SEO

Each Markdown page will have a unique search-focused title, H1, 50–170 character description, `updatedAt: "2026-08-21"`, `preRelease: false`, a relevant existing official Steam image as `cover`, and an in-body figure with descriptive alt text. Related pages will use existing internal URLs and no new navigation category.

## Acceptance criteria

- All four pages validate against the content schema and are indexable (`official` or `community`).
- Every article includes the game name in its title, heading, description, and body opening.
- Every factual claim has a matching source entry and the article separates official facts from community discussion.
- Every image path exists under `public/images/`.
- Existing URLs remain unchanged; the build emits the four new URLs with trailing slashes.
- Build, tests, SEO checks, missing-link checks, and `git diff --check` pass before push.
