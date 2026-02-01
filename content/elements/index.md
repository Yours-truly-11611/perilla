---
title: "Elements"
description: "A style guide showcasing all typographic and content elements."
heroImage: "images/backgrounds/blind-mans-bluff.jpg"
heroTintColor: "rgba(30, 20, 40, 0.55)"
heroSubtitle: "Theme style guide"
---

# Heading One

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

###### Heading Six

---

## Body Text

This is a standard paragraph of body text. It demonstrates the default typographic styling of the theme, including font size, line height, and spacing. The surrealist aesthetic embraces the unexpected — where logic dissolves and imagery takes the lead.

This is a second paragraph to show spacing between blocks of text. Good typography creates rhythm on the page, guiding the reader through content with clarity and grace.

---

## Emphasis & Inline Styles

This text contains **bold words**, *italic words*, and ***bold italic words***. You can also use ~~strikethrough~~ for deleted text. Here is some `inline code` within a sentence.

---

## Blockquotes

> The pure psychic automatism by which one intends to express the real functioning of thought. Dictation of thought, in the absence of any control exercised by reason.
>
> — André Breton, *Manifesto of Surrealism*

---

## Callout

> **Note:** This is a callout pattern using a blockquote with a bold lead-in. Use it to draw attention to important information or asides within your content.

---

## Unordered List

- The Persistence of Memory
- The Elephants
- Swans Reflecting Elephants
- The Burning Giraffe
- The Disintegration of the Persistence of Memory

## Ordered List

1. Observe the dream
2. Record the images
3. Remove the rational filter
4. Arrange by instinct
5. Present without explanation

## Nested List

- Painting
  - Oil on canvas
  - Watercolour
  - Gouache
- Sculpture
  - Bronze
  - Found objects
- Film
  - Short form
  - Feature length

---

## Links

Visit [Hugo](https://gohugo.io) for static site generation. Read about [Surrealism on Wikipedia](https://en.wikipedia.org/wiki/Surrealism) for historical context.

---

## Code Blocks

Inline: use the `hugo server` command to start a local preview.

Fenced code block:

```html
<section class="hero">
  <h1>{{ .Site.Params.heroTitle }}</h1>
  <p>{{ .Site.Params.heroSubtitle }}</p>
</section>
```

```css
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
}
```

---

## Images

![Bathing](/images/backgrounds/bathing.jpg)

![Ground Swell](/images/backgrounds/ground-swell.jpg)

---

## Horizontal Rule

The three dashes above and below this section are horizontal rules, used to separate thematic groups of content.

---

## Table

| Element       | Tag          | Purpose                |
|---------------|--------------|------------------------|
| Heading       | `<h1>`–`<h6>` | Section titles         |
| Paragraph     | `<p>`        | Body text              |
| Blockquote    | `<blockquote>` | Quoted material      |
| Code          | `<code>`     | Inline code            |
| Pre           | `<pre>`      | Code blocks            |
