# Alexandria

A personal writing and design portfolio built with [Hugo](https://gohugo.io) and the [Perilla theme](https://github.com/Yours-truly-11611/perilla-theme).

---

## Getting Started

1. **Install Hugo** — follow the [official instructions](https://gohugo.io/installation/).

2. **Clone the repo:**
   ```bash
   git clone https://github.com/Yours-truly-11611/perilla.git
   cd perilla
   ```

3. **Run the dev server:**
   ```bash
   hugo server
   ```
   Visit `http://localhost:1313`.

---

## Creating Content

New content is created as [leaf bundles](https://gohugo.io/content-management/page-bundles/) so each page can have its own images and resources.

```bash
# New blog post
hugo new blog/my-post

# New portfolio piece
hugo new portfolio/my-project
```

Posts are created in draft mode. Remove `draft: true` from the frontmatter or run `hugo server -D` to preview drafts.

---

## Project Structure

```
perilla/
├── archetypes/
│   ├── default/          # Default leaf bundle archetype
│   ├── blog/             # Blog post archetype
│   └── portfolio/        # Portfolio piece archetype
├── content/
│   ├── about/
│   ├── blog/
│   ├── categories/
│   ├── contact/
│   ├── elements/         # Style guide / theme reference
│   ├── portfolio/
│   ├── search/
│   └── tags/
├── themes/
│   └── perilla/          # Theme (see perilla-theme repo)
├── config.toml
└── README.md
```

---

## Configuration

Site configuration lives in `config.toml`. Key settings:

```toml
[params]
  heroTitle       = "Alexandria"
  heroSubtitle    = "Writing & Design"
  heroImage       = "images/backgrounds/jungle-sun.jpg"
  heroTintColor   = "rgba(30, 20, 40, 0.55)"
  menuButtonLabel = "Explore"
  footerNote      = "Built with Hugo &amp; the Perilla theme."
```

See the [Perilla theme README](https://github.com/Yours-truly-11611/perilla-theme) for the full configuration and frontmatter reference.

---

## License

Content is copyright the author. The [Perilla theme](https://github.com/Yours-truly-11611/perilla-theme) is released under [The Unlicense](https://unlicense.org).
