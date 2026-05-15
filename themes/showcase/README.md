# Showcase — an accessible Hugo theme for projects

A small, fast Hugo theme to showcase projects as cards. Designed against
**WCAG 2.2 AA**: semantic landmarks, visible focus, skip link, prefers-reduced-motion,
prefers-color-scheme, AA-contrast palette, and keyboard-friendly cards.

## Features

- Project cards with cover image, title, summary, tags, and links
- Light + dark theme via `prefers-color-scheme`
- Skip-to-content link, semantic `<header>/<main>/<footer>/<nav>`
- Visible 3px focus rings, never `outline: none` without replacement
- Reduced-motion support
- Responsive grid (1 / 2 / 3 columns)
- SEO meta + Open Graph + JSON-LD per project
- No JavaScript required for core content; ~2 KB of JS for nav toggle only

## Install

```bash
git submodule add https://github.com/yourname/showcase themes/showcase
```

In `hugo.toml`:

```toml
theme = "showcase"
title = "My Projects"

[params]
  description = "A showcase of my work."
  author = "Your Name"

[[menu.main]]
  name = "Projects"
  url  = "/projects/"
  weight = 10
[[menu.main]]
  name = "About"
  url  = "/about/"
  weight = 20
```

## Add a project

```bash
hugo new projects/my-project.md
```

Front matter:

```yaml
---
title: "Project name"
date: 2026-05-12
summary: "One sentence describing the project."
cover: "images/my-project.jpg"
coverAlt: "Screenshot of the project dashboard"
tags: ["typescript", "design"]
liveURL: "https://example.com"
repoURL: "https://github.com/you/project"
---

Long-form description in Markdown.
```

## Accessibility checklist (built in)

- [x] Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text and UI
- [x] Single `<h1>` per page
- [x] Logical heading order
- [x] Focus visible on all interactive elements
- [x] `:focus-visible` 3px outline + offset
- [x] Skip link as first focusable element
- [x] Card is one link with a descriptive accessible name
- [x] Images require `coverAlt` (decorative covers use `alt=""`)
- [x] Respects `prefers-reduced-motion`
- [x] Respects `prefers-color-scheme`
- [x] No color-only meaning
