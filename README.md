# Winter Arc — installable offline PWA

A never-ending (starts 1 Dec 2026) meditation, communication, voice/speech
and fitness program, built as a single installable web app. Works fully
offline once installed — no server, no backend, no internet required after
the first load. All progress is stored only on your device (localStorage).

The app now opens with an animated loading screen — a lone swordsman
standing under a glowing moon in a falling-snow night sky — before handing
off to the app itself. It's pure CSS/SVG (no image files), so it loads
instantly offline and costs nothing in app size. Tap it to skip early.

## v16 — feedback loop and a truly endless system
- **Level verdict (Progress tab):** after each Level-Up Test it compares you with the previous level and with Day 1, counts improved measures, and tells you whether to climb or repeat the level.
- **Mastery Quests:** from Level 7 on, every 4-week level brings a new quest (skill, stage, discipline, presence, strength, leadership) covering body, voice, mind and speaking, and the six quests repeat at a higher standard forever.
- **Comeback rule:** after 2 or more blank days a Re-entry card tells you to take a Lite day and resume the full plan next day. Lite is also for exam or travel days.
- **My why:** write it once in Progress; it shows on Today every day and is included in backups.
- Cache name is now `winter-arc-v16`. Upload all 7 files to the repo root and overwrite the old ones.

## v15 — all five daily blocks upgraded
- **Meditation:** wake-up protocol, three spoken non-negotiables, and Mind Gym targets that rise with every level (items, digits, grid time, focus minutes). New test: longest still sit.
- **Communication:** Speaking toolkit (Point, Reason, Example, Point; 2-second pause; listening rep) and a 1 to 5 scorecard after each recording.
- **Voice:** daily pace check (130 words in 60 to 65 s), breath ladder now reaches 40 s, and a stuck-word routine (pause, soft breath, easy onset).
- **Body:** effort rules (tempo, rest, reps in reserve, when to progress), fuller warm-up (bridges, wall angels, chin tucks) and a specific 10-minute cooldown.
- **Night shutdown:** minute-by-minute routine, caffeine cut-off at 2 PM and screens off from 9:00 PM.
- Cache name is now `winter-arc-v15`. Upload all 7 files to the repo root and overwrite the old ones.

## v14 — final merge of all four versions
- Base is v13, the most complete (India time, offline lessons, home training, self-refreshing service worker). v8 and v11 are fully contained in it; v11's empty `sw.js` and v12's missing features are not carried over.
- Voice Lab: new Easy-onset starts (for words that feel stuck) and a Pause-and-chunk drill (for rushed speech).
- Level-Up Test also logs your longest steady sss exhale and speaking pace (words per minute); the Day 90 and Day 180 milestones include both.
- Before 1 Dec the Today tab shows a countdown and a readiness checklist. A Never-miss-twice banner appears after a blank day. Daily standards add 8,000 steps.
- Cache name is now `winter-arc-v14`. Upload all 7 files to the repo root and overwrite the old ones.

## v13 — India (IST), home training, fully offline Android
- **India time:** "today", the day rollover and the new live *Now / Next* bar on Today always use India Standard Time (UTC+5:30), whatever time zone the phone is set to. Dates use the Indian format. If the app was left open overnight it now jumps to the new day by itself.
- **Fully offline communication block:** each skill has an offline lesson, every day has a speaking topic (36) and 3 power words with meanings (45-word cycle). The video is now optional.
- **Home training, no gym:** Day 1 (a Tuesday) is now Push, not Pull. No-bar fallbacks (inverted table rows, hollow-body hold), tile/winter safety, and a Guide card for a home setup.
- **Uttar Pradesh guidance:** winter fog and air-quality rules for walks and an Indian protein guide with a sample day (Guide tab). Protein target eased to 1.2–1.6 g/kg.
- **Android:** service worker now answers from the cache instantly and refreshes itself when online (no more stale installs), back button moves between tabs, no pull-to-refresh reload, storage is requested as persistent, a 2-weekly backup reminder, safe-zone app icon, alarm and Digital Wellbeing setup list.
- Level-Up Test now also logs max pull-ups and longest talk. Same 7 files as before; overwrite them all.

## v12 — merged best-of (v8 + v11) and the 6-month peak upgrade
- Base is v11, which already contains everything in v8 (ramp-in, night shutdown, Lite day, Level-Up Test, baseline card, milestones, phone polish).
- **Critical fix:** v11 shipped an empty `sw.js`, which switches off offline mode and can block install. v12 restores the working service worker (cache `winter-arc-v12`).
- **Fix:** the day arrows and Week tab no longer skip or repeat a day when clocks change (March in most northern countries, April in the south).
- **Communication curriculum:** each daily video is now paired with a 2-week skill focus (listening, structure, storytelling, no fillers, conversation, presence, persuasion, impromptu, Q&A, rapport, leading groups, negotiation, signature talk) that repeats at a higher level.
- **Body ladder:** Level progression is now a concrete target for Levels 1–7 (pull-up bar and band advice, pistol, archer and weighted work, one peak skill goal).
- **Beginner meditation ramp:** 15 min main practice in week 1, 20 min in week 2, 30 min from week 3.
- **Sunday weekly review** and new Mastery journal prompts for week 23 onward.
- Calendar date picker defaults to your local date.

## Never-ending edition
- v7: runs as a standalone app with a bottom tab bar for phones. Each of the 4 daily tasks is a 1-hour block: meditation 5:00–6:00 AM (with a 15-min Mind Gym for focus and memory), communication 6:00–7:00 AM, voice 7:00–8:00 PM, body 8:00–9:00 PM.
- Day 1 is **1 December 2026** and the arc has no end date. A new Level begins every 4 weeks; after week 22 the Mastery levels keep raising intensity (up to 2.6x), and every 4th week is a recovery week at 85%.
- Evening voice block alternates: 2 weeks of Deep Voice & Slow Speech Lab, then 2 weeks of live public speaking.
- New daily extras: voice lab, boldness rep, body warm-up and finisher, level progression tip.
- Progress uses new storage keys, so it starts fresh on 1 December. Use Progress > Export / Restore backup to keep your data safe.
- Upload all 7 files to the repo root and overwrite the old ones.

## v11 — phone compatibility
- Bigger tap targets (buttons, links, date arrows), dark native date picker and keyboards, numeric keypad for test inputs.
- Narrow-screen layout (under 420 px): exercise lines stack instead of overflowing, single-column forms, smaller splash on short screens.
- "Keep screen awake" button on Today for meditation and workouts, and a short vibration when you tick a task (Android).
- Cache name is now `winter-arc-v11`.

## v10 — fixes after a full audit
- Sleep fix: night shutdown moved to 9:15 PM and lights-out to 9:30 PM (the old 10:30 left only 6.5 h before a 5:00 AM start).
- Day 1 baseline card (talk recording, voice sample, photos, test) so progress is measurable.
- 3 new power words daily in the communication block; a daily phone-free deep-work sprint and a size/waist rule in the standards.
- Cache name is now `winter-arc-v10`.

## v9 — the Level Up upgrade

- **Ramp-in:** week 1 runs at 60% volume and week 2 at 80%, so a beginner reaches full intensity in week 3 without burning out.
- **5th daily task, Night shutdown (9:15 PM):** plan tomorrow, journal, phone away, lights out by 9:30. Sleep, water and protein standards are built in.
- **Lite day:** one tap switches a rough day to a 15-minute-per-block minimum that keeps the streak alive (never miss twice).
- **Level-Up Test (Progress tab):** log weight, waist, push-ups, plank, wall sit, squats, filler words and Focus Grid time every level. Included in backups.
- **Real pulling:** pull-up negatives and hangs added to Pull day; calf raises added to Legs.
- **6-month milestones** on the Calendar tab, with exact targets for body, voice and focus.
- **Offline fallback** for the communication block when there is no internet for the video.
- Cache name is now `winter-arc-v9`. Re-upload all 7 files.

## v8 — timed exercises now progress

Before, only sets and reps scaled with your level; every hold and timed interval
(plank, side plank, wall sit, Superman, HIIT work time, brisk walk, finisher holds)
stayed the same length forever. Now they grow two ways:

1. **Improvement** — the same intensity multiplier your reps use (shown as
   "Intensity today" on the Today tab), so durations rise through Build, Ignite,
   Forge, Temper and the Mastery levels, and dip 15% in recovery weeks.
2. **Completion** — every time you tick the Body task on a day an exercise was
   scheduled, that exercise earns a bonus (+1 s per session, +15 s for the brisk
   walk). Skipped days earn nothing, so someone who trains every day progresses
   faster than someone who doesn't. Future days never count, and ticking today
   never changes today's numbers — the bonus shows up on the next session.

Each exercise has a ceiling (for example plank 2 min). At the ceiling the app marks
it "max" — make it harder (see Level progression) instead of longer. Warm-ups,
cooldowns, stretching, cat-cow and the easy recovery walk stay fixed on purpose.
A green "▲ +N s" label under each timed exercise shows how far it has grown from
its starting length.

Nothing about your saved data changed: durations are calculated from your existing
check-offs, so old progress and backups work as before. Because holds can now run
longer, a high-level body session may run a little past 9:00 PM; trim rest between
sets if that happens.

**To tune it:** in `index.html`, find the `WORKOUT` list (and `FIN` for the finisher).
Every timed exercise has `d` (starting length), `dmax` (ceiling) and `inc` (bonus per
completed session). Raise `dmax` for longer holds, set `inc:0` to follow only the
intensity level, or delete `dmax` to make an exercise fixed-length again.

Re-upload all 7 files. `sw.js` now uses cache name `winter-arc-v8`, so installed
phones pick up the update on their next online open.

## Why "Install" said "This app cannot be installed"

Your icon files were uploaded straight into the repo root, but the app's
code was still looking for them inside an `icons/` subfolder — so every
icon request 404'd. Chrome requires a working icon to consider a site
installable, so it correctly refused. That 404 also broke the service
worker's offline cache (its install step fetches every file in one atomic
batch — if any one of them 404s, the whole cache fails silently), so
offline mode likely wasn't fully working either.

Fixed: the code now points at the icons in the repo root directly — no
subfolder, matching exactly what you already uploaded. Re-upload the 7
files in this folder (overwrite the existing ones), wait ~1 minute for
GitHub Pages to rebuild, then reload the site in Chrome and try
**⋮ → Install and create shortcut** again — "Install" should now work.

## Files in this folder

```
README.md
index.html      ← the entire app (all content, logic and styling)
manifest.json   ← PWA manifest (app name, icons, colors, display mode)
sw.js           ← service worker (caches everything for true offline use)
icon-192.png
icon-512.png
apple-touch-icon.png
```

All seven files go **directly in the repo root** — no subfolder. (An
earlier version of this app used an `icons/` subfolder; that's been
removed so the code always matches a flat upload, since that's how
GitHub's "Add file → Upload files" tends to end up when files are
dragged in individually.)

Upload **all seven files**, overwriting the existing ones with the same
names. Nothing else is needed; there is no build step, no dependencies,
no npm install.

## Deploy with GitHub Pages (free, exact steps)

1. **Create a new repository** on GitHub (e.g. `winter-arc`). Public or
   private both work with GitHub Pages (private repos need GitHub Pro/Team
   for Pages, so public is simplest if you're on a free plan).
2. **Upload the files**: on the repo page, click "Add file" → "Upload
   files", drag in all 7 files from this folder at once (`index.html`,
   `manifest.json`, `sw.js`, `README.md`, and the three `.png` icons —
   no subfolder), then commit. (Or, if you use git locally: `git add .`,
   `git commit -m "Winter Arc PWA update"`, `git push`.)
3. **Turn on Pages**: go to the repo's **Settings** tab → **Pages** (left
   sidebar) → under "Build and deployment", set **Source** to
   "Deploy from a branch" → **Branch**: `main` (or `master`), folder `/ (root)`
   → **Save**.
4. **Wait ~1 minute**, then refresh the Pages settings page. GitHub shows
   a green banner with your live URL, in the form:
   `https://<your-username>.github.io/<repo-name>/`
5. **Open that URL on your phone.** This step matters: GitHub Pages serves
   over HTTPS on a real domain, which is required for both the service
   worker and the "Install app" prompt to work — neither works from a
   plain local file.

## Installing it on your phone

- **Android (Chrome):** open the URL above. A blue "📲 Install App" button
  appears at the bottom-right once Chrome recognizes it as installable —
  tap it and confirm. If it hasn't appeared yet, use the ⋮ menu → "Add to
  Home screen" / "Install app" instead — same result.
- **iPhone (Safari):** open the URL above, tap the Share icon, then "Add to
  Home Screen." iOS has no separate "Install" option — this is its
  equivalent, and it behaves the same way (full-screen, own icon).

Once installed, it opens full-screen with its own snowflake icon, no
browser address bar, and works with the phone in airplane mode.

## How the offline behavior works

- `sw.js` is a service worker: the first time you visit the page online, it
  downloads and caches every file the app needs (`index.html`,
  `manifest.json`, and the icons).
- On every visit after that — online or fully offline — it serves those
  files straight from the cache instead of the network, so the app loads
  instantly and works with zero connectivity.
- All your daily check-offs and journal entries are saved with the
  browser's `localStorage` on that one device. They are never uploaded
  anywhere. Use the **Export** button on the app's Progress tab any time to
  save a `.json` backup file.

## If you edit the app later

If you change `index.html` (add a task, fix wording, etc.) after it's
already installed on a phone, bump the cache name in `sw.js` so the
service worker knows to fetch the new version instead of serving the old
cached one:

```js
var CACHE_NAME = 'winter-arc-v1';   // change to 'winter-arc-v2', 'v3', etc.
```

Without this bump, an already-installed phone may keep showing the old
cached version until the old cache expires on its own.

## Custom domain (optional)

GitHub Pages also supports a custom domain (e.g. `winterarc.yourdomain.com`)
via Settings → Pages → "Custom domain" — this isn't required, the default
`github.io` URL works exactly the same for installing and offline use.
