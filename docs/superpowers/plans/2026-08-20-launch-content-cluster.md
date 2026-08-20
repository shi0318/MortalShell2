# Mortal Shell II Launch Content Cluster Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 20 source-tracked Mortal Shell II launch pages with relevant local imagery, distinct SEO intent, pagination discovery, and verified sitemap dates.

**Architecture:** Keep the existing Astro content collection as the single page source. Add one Markdown file per URL under `src/content/guides/`; reuse the existing catch-all route, GuideLayout, GuideCard, pagination, and sitemap serializer. Add a focused content-contract test that checks the new slugs, frontmatter, images, dates, and sources without changing runtime architecture.

**Tech Stack:** Astro 5, Astro content collections, Markdown frontmatter, Node test runner, npm build.

---

### Task 1: Add the failing content contract test

**Files:**
- Create: `tests/launch-cluster.test.mjs`

- [ ] **Step 1: Write the failing test**

Create a test that reads exactly the 20 planned Markdown files, asserts each file exists, checks `title`, `heading`, `description`, `cover`, `updatedAt: "2026-08-20"`, a valid `sourceUrl`, a local figure image, and the presence of `Mortal Shell 2` or `Mortal Shell II` in the title/H1.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/launch-cluster.test.mjs`

Expected: FAIL because the 20 new Markdown files do not exist yet.

### Task 2: Add the 20 source-tracked pages

**Files:**
- Create: `src/content/guides/mortal-shell-2-difficulty-options.md`
- Create: `src/content/guides/mortal-shell-2-executions-heal.md`
- Create: `src/content/guides/mortal-shell-2-turn-off-the-sun.md`
- Create: `src/content/guides/mortal-shell-2-leveling-system.md`
- Create: `src/content/guides/mortal-shell-2-reset-shell-abilities.md`
- Create: `src/content/guides/mortal-shell-2-fragments-weapon-skills.md`
- Create: `src/content/guides/mortal-shell-2-weapon-upgrade-guide.md`
- Create: `src/content/guides/mortal-shell-2-melee-ranged-weapons.md`
- Create: `src/content/guides/mortal-shell-2-dungeons-open-world.md`
- Create: `src/content/guides/mortal-shell-2-how-many-dungeons.md`
- Create: `src/content/guides/mortal-shell-2-open-world-size.md`
- Create: `src/content/guides/mortal-shell-2-sidearms-and-ranged-combat.md`
- Create: `src/content/guides/mortal-shell-2-boss-difficulty.md`
- Create: `src/content/guides/mortal-shell-2-boss-runback.md`
- Create: `src/content/guides/mortal-shell-2-respawn-points.md`
- Create: `src/content/guides/mortal-shell-2-blurry-graphics-fix.md`
- Create: `src/content/guides/mortal-shell-2-reflex-stutter-fix.md`
- Create: `src/content/guides/mortal-shell-2-frame-generation-fix.md`
- Create: `src/content/guides/mortal-shell-2-engine-ini-settings.md`
- Create: `src/content/guides/mortal-shell-2-launch-bugs.md`

- [ ] **Step 1: Write the official difficulty and progression pages**

Use the Steam official announcement for the special-item difficulty approach and the full-game listing for Shells, weapons, and upgrade framing. Use `status: official` only for those facts; use `status: community` for the player-reported free reset and leveling observations.

- [ ] **Step 2: Write the weapons and exploration pages**

Use only the Steam listing’s confirmed melee/ranged upgrade and interconnected-world language. Clearly distinguish what is confirmed from what still requires a retail hands-on route, and do not invent weapon names or locations.

- [ ] **Step 3: Write the boss and death-loop discussion pages**

Use the public Steam review feed for reports about boss variety, runbacks, respawn-point spacing, and enemy attack behavior. Attribute these as player reports and provide practical “what to check” guidance rather than claiming universal bugs.

- [ ] **Step 4: Write the PC launch-problem pages**

Use the official Steam PC requirements for the baseline and public Steam reviews for reports of blur, Reflex stutter, frame-generation behavior, and launch bugs. Present reversible settings checks only; do not promise a universal fix or recommend unsafe downloads.

- [ ] **Step 5: Add a relevant local figure to every page**

Use the existing Steam/official local images: combat imagery for difficulty and PC pages, weapon closeups for weapon pages, map/environment imagery for exploration, boss imagery for boss pages, and official key art for discussion/news pages.

- [ ] **Step 6: Run the content contract test**

Run: `node --test tests/launch-cluster.test.mjs`

Expected: PASS for all 20 pages.

### Task 3: Verify collection discovery and sitemap output

**Files:**
- Modify: `tests/guide-hub.test.mjs` only if the new content changes the expected latest-card assertions.

- [ ] **Step 1: Run all tests**

Run: `node --test tests/*.test.mjs`

Expected: PASS with zero failures.

- [ ] **Step 2: Build the Astro site**

Run: `npm run build`

Expected: exit code 0 and all new pages generated under `dist/`.

- [ ] **Step 3: Verify sitemap URLs and lastmod values**

Run a PowerShell check over `dist/sitemap-0.xml` and `dist/guide/index.html` to confirm all 20 new trailing-slash URLs are present and each new page has `2026-08-20` as its sitemap date.

### Task 4: Commit the verified launch cluster

**Files:**
- Commit all new content, tests, and the approved design/plan documents.

- [ ] **Step 1: Review the diff and status**

Run: `git status --short` and `git diff --stat`.

- [ ] **Step 2: Commit**

Run: `git add docs/superpowers src/content/guides tests/launch-cluster.test.mjs` followed by `git commit -m "Add Mortal Shell 2 launch search guides"`.

- [ ] **Step 3: Verify the commit**

Run: `git show --stat --oneline HEAD` and `git status --short --branch`.

Expected: the new commit contains the 20 pages and the worktree is clean before pushing.

### Task 5: Push through the local proxy

**Files:**
- No file changes.

- [ ] **Step 1: Push main through the configured proxy**

Run: `git -c http.proxy=http://127.0.0.1:7897 -c https.proxy=http://127.0.0.1:7897 push origin main`

- [ ] **Step 2: Verify remote main**

Run: `git -c http.proxy=http://127.0.0.1:7897 -c https.proxy=http://127.0.0.1:7897 ls-remote origin refs/heads/main` and compare it with `git rev-parse HEAD`.
