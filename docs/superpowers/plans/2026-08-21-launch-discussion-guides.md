# Mortal Shell II Launch Discussion Guides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish four source-tracked, post-launch Mortal Shell II pages that answer active Steam questions and remain eligible for Google indexing.

**Architecture:** Add four Markdown entries to the existing Astro `guides` collection. Reuse the existing `GuideLayout`, `SourceTable`, pagination and local official image catalog; do not add navigation or new runtime behavior.

**Tech Stack:** Astro 5, Astro Content Collections, Markdown, Node test runner, existing local WebP media.

---

### Task 1: Add the failing content-contract test

**Files:**
- Create: `tests/discussion-guides.test.mjs`
- Read: `src/content/guides/` and `public/images/`

- [ ] **Step 1: Write the failing test**

Create a Node test that enumerates these four slugs:

```js
const slugs = [
  'mortal-shell-2-balance-patch-1',
  'mortal-shell-2-beta-save-missing',
  'mortal-shell-2-language-support',
  'mortal-shell-2-great-martyrs-blade-patch',
];
```

For every file, assert that the frontmatter contains the game name in `title`, `heading`, and `description`; `updatedAt` is `2026-08-21`; `preRelease` is `false`; `status` is `official` or `community`; `cover` is a local image that exists; at least one `sourceUrl` is present; at least one `lastChecked: "2026-08-21"` is present; the body contains a `<figure>` and a `/images/` `<img>`; and the body contains at least one internal link beginning with `/`.

Also assert exact evidence phrases:

```js
assert.match(balance, /Great Martyr.?s Blade Attack Damage \+20%/i);
assert.match(balance, /Smelting a weapon at the Tarforge costs 75% less gloom/i);
assert.match(save, /does not transfer|reset at launch/i);
assert.match(language, /Simplified Chinese/i);
assert.match(language, /full audio/i);
assert.match(blade, /\+20%/);
```

- [ ] **Step 2: Run the test and verify it fails for the expected missing-file reason**

Run: `node --test tests/discussion-guides.test.mjs`

Expected: FAIL because the four Markdown files do not exist yet.

### Task 2: Write the four source-tracked articles

**Files:**
- Create: `src/content/guides/mortal-shell-2-balance-patch-1.md`
- Create: `src/content/guides/mortal-shell-2-beta-save-missing.md`
- Create: `src/content/guides/mortal-shell-2-language-support.md`
- Create: `src/content/guides/mortal-shell-2-great-martyrs-blade-patch.md`

- [ ] **Step 1: Add the official Balance Patch 1 article**

Use `category: news`, `status: official`, `preRelease: false`, `cover: /images/mortalshell2-shell-greatsword-closeup.webp`, and the official Steam thread `https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/`. Explain the date boundary and the statement that the post called the PC patch live while console rollout was forthcoming. Organize the official changes under Economy, Enemies and Bosses, Weapons, Seals, Tarstones, and Miscellaneous. Include all published numeric changes without rounding them into new claims. Link to the existing launch bugs, weapons, Tarstones/map-related, and Steam reviews pages.

- [ ] **Step 2: Add the Beta save-missing answer**

Use `category: guide`, `status: official`, `preRelease: false`, `cover: /images/mortalshell2-world-map-overview.webp`, and the Open Beta Steam URL `https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/`. Answer directly that the Beta inventory/progress reset at retail launch; distinguish the Flayed Harbinger cosmetic and the prologue-skip reward after Marrow Keep. Treat the 18-reply discussion as evidence of the question, not as proof of a recovery method. Link to `/beta-progress/`, `/open-beta/`, `/download/`, and `/launch-day-checklist/`.

- [ ] **Step 3: Add the language-support article**

Use `category: guide`, `status: official`, `preRelease: false`, `cover: /images/mortalshell2-village-accordion-npc.webp`, and the live retail Steam URL `https://store.steampowered.com/app/2584270/Mortal_Shell_II/`. List every language named in the current Steam supported-language field, explicitly note that English is the language marked with full audio, and do not infer voice-over details for other languages. Link to PC requirements, Steam features, and the guide hub.

- [ ] **Step 4: Add the Great Martyr's Blade article**

Use `category: weapons`, `status: official`, `preRelease: false`, `cover: /images/mortalshell2-shell-greatsword-closeup.webp`, and both the Balance Patch 1 thread and retail Steam URL. State only the official `+20%` attack-damage change, explain why the 29-reply discussion creates a real search question, and clearly list location, upgrade-cost, moveset, and best-in-slot details as not established by the checked sources. Link to `/weapons/`, `/mortal-shell-2-weapon-upgrade-guide/`, and the patch page.

### Task 3: Verify article contracts and generated routes

**Files:**
- Modify: none unless verification identifies an existing route issue

- [ ] **Step 1: Run the new test and verify it passes**

Run: `node --test tests/discussion-guides.test.mjs`

Expected: PASS for all four articles.

- [ ] **Step 2: Run the full build and existing tests**

Run: `npm run build`

Expected: Astro exits 0 and emits the four new trailing-slash routes.

Run: `node --test tests/*.test.mjs`

Expected: all tests pass.

- [ ] **Step 3: Run repository checks**

Run: `node scripts/seo-check.mjs` if present, then `git diff --check`, and inspect generated sitemap URLs for all four new paths. Expected: no missing local image, no missing internal link, no `noindex` on the four pages, and no whitespace errors.

### Task 4: Commit and push

**Files:**
- Add the four Markdown files and `tests/discussion-guides.test.mjs`

- [ ] **Step 1: Review the diff and commit**

Run: `git status --short`, `git diff --stat`, then commit with:

```bash
git add src/content/guides tests/discussion-guides.test.mjs
git commit -m "feat: add Mortal Shell II discussion guides"
```

- [ ] **Step 2: Push through the requested proxy**

Run:

```bash
git -c http.proxy=http://127.0.0.1:7897 -c https.proxy=http://127.0.0.1:7897 push origin main
```

- [ ] **Step 3: Verify the remote commit**

Run:

```bash
git -c http.proxy=http://127.0.0.1:7897 -c https.proxy=http://127.0.0.1:7897 ls-remote origin refs/heads/main
```

Expected: the returned remote SHA equals the local `git rev-parse HEAD`, and `git status --short --branch` reports `main...origin/main` with no ahead/behind count.
