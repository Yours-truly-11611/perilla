# Running the Example Site

## 1. Install Hugo (if you haven't already)

Go to **https://gohugoio.org/installation/** and follow the instructions for your OS.  
On macOS with Homebrew it's just:

```bash
brew install hugo
```

The theme uses no Sass or special pipelines — the plain `hugo` binary is all you need (no need for the "extended" edition).

---

## 2. Run the dev server

```bash
cd perilla
hugo server
```

Open **http://localhost:1313** in your browser.

Hugo's built-in live reload will **automatically refresh the page** whenever you save any file — content, config, or CSS. No build step, no manual refresh.

---

## 3. What to edit and where

| What you want to change | File to edit |
|---|---|
| Site title, hero image, tint color, menu button text | `config.toml` → `[params]` |
| Navigation links | `config.toml` → `[[menu.main]]` entries |
| Homepage hero text | `config.toml` → `heroTitle` / `heroSubtitle` |
| Blog posts | `content/blog/*.md` — add or edit any `.md` file here |
| About / Portfolio / Contact pages | `content/about/index.md`, etc. |
| Colors, fonts, spacing | `themes/perilla/static/css/style.css` → `:root` block at the top |
| Custom CSS overrides (without touching theme files) | Create `static/css/custom.css` in the site root |
| Hero background image | Drop a new image into `static/images/` and update `heroImage` in `config.toml` |

---

## 4. Quick experiments to try

**Change the tint color** — open `config.toml` and change `heroTintColor`. Try values like:
- `"rgba(20, 40, 30, 0.6)"` — deep forest green
- `"rgba(60, 30, 20, 0.5)"` — warm cognac
- `"rgba(10, 10, 40, 0.7)"` — dark navy (high contrast)

Save the file. The page updates instantly.

**Add a blog post** — create a new file in `content/blog/` with this header:
```
---
title: "Your Post Title"
date: 2025-01-25
summary: "One sentence that shows up in the blog list."
---

Your content here.
```

**Swap the hero image** — drop any landscape photo into `static/images/`, then update `heroImage` in `config.toml` to point to it. Adjust `heroTintColor` opacity if the new image needs more or less overlay.

---

## 5. File structure at a glance

```
perilla/
├── config.toml                          ← site config + theme params
├── static/
│   └── images/
│       └── hero.jpg                     ← hero background image
├── content/
│   ├── about/index.md
│   ├── blog/
│   │   ├── backpack-essay.md
│   │   ├── morning-writing.md
│   │   └── fathers-country.md
│   ├── portfolio/index.md
│   └── contact/index.md
└── themes/
    └── perilla/                 ← the theme (don't need to touch this)
        ├── layouts/
        ├── static/css/style.css
        └── theme.toml
```
