import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [

      // ── Home ────────────────────────────────────────────────
      {
        name: "homepage",
        label: "Home",
        path: "content",
        match: { include: "_index" },
        format: "md",
        frontmatterFormat: "yaml",
        fields: [
          { name: "heroTitle",       label: "Hero Title",       type: "string" },
          { name: "heroSubtitle",    label: "Hero Subtitle",    type: "string" },
          { name: "heroVideo",       label: "Hero Video (path)", type: "string" },
          { name: "heroImage",       label: "Hero Image",       type: "image" },
          { name: "menuButtonLabel", label: "Hero Button Label", type: "string" },
          {
            name: "studio",
            label: "Studio Section",
            type: "object",
            fields: [
              { name: "heading", label: "Heading", type: "string" },
              { name: "body",    label: "Body",    type: "string", ui: { component: "textarea" } },
              { name: "cta",     label: "Button Label", type: "string" },
              { name: "ctaURL",  label: "Button URL",   type: "string" },
            ],
          },
          { name: "studioImage",      label: "Studio Image",      type: "image" },
          { name: "missionStatement", label: "Mission Statement", type: "string", ui: { component: "textarea" } },
          {
            name: "homeServices",
            label: "Services Overview",
            type: "object",
            list: true,
            fields: [
              { name: "num",     label: "Number",  type: "string" },
              { name: "title",   label: "Title",   type: "string" },
              { name: "tagline", label: "Tagline", type: "string" },
            ],
          },
          {
            name: "process",
            label: "Process",
            type: "object",
            list: true,
            fields: [
              { name: "num",   label: "Number", type: "string" },
              { name: "title", label: "Title",  type: "string" },
              { name: "body",  label: "Body",   type: "string", ui: { component: "textarea" } },
            ],
          },
          {
            name: "faq",
            label: "FAQ",
            type: "object",
            list: true,
            fields: [
              { name: "q", label: "Question", type: "string" },
              { name: "a", label: "Answer",   type: "string", ui: { component: "textarea" } },
            ],
          },
          { name: "statement", label: "Statement", type: "string", ui: { component: "textarea" } },
          {
            name: "testimonial",
            label: "Testimonial",
            type: "object",
            fields: [
              { name: "quote",  label: "Quote",  type: "string", ui: { component: "textarea" } },
              { name: "author", label: "Author", type: "string" },
              { name: "role",   label: "Role",   type: "string" },
            ],
          },
          { name: "testimonialImage", label: "Testimonial Image", type: "image" },
        ],
      },

      // ── Studio (About) ──────────────────────────────────────
      {
        name: "studio",
        label: "Studio",
        path: "content/about",
        match: { include: "index" },
        format: "md",
        frontmatterFormat: "yaml",
        fields: [
          { name: "pageSubtitle", label: "Page Subtitle", type: "string" },
          { name: "introHeading", label: "Intro Heading", type: "string" },
          { name: "aiPolicy",     label: "AI Policy",     type: "string", ui: { component: "textarea" } },
          {
            name: "howWeWork",
            label: "How We Work",
            type: "object",
            list: true,
            fields: [
              { name: "num",   label: "Number", type: "string" },
              { name: "title", label: "Title",  type: "string" },
              { name: "text",  label: "Text",   type: "string", ui: { component: "textarea" } },
            ],
          },
          {
            name: "whatWeValue",
            label: "What We Value",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Title", type: "string" },
              { name: "text",  label: "Text",  type: "string", ui: { component: "textarea" } },
            ],
          },
          {
            name: "body",
            label: "Intro Text",
            type: "rich-text",
            isBody: true,
          },
        ],
      },

      // ── Services ────────────────────────────────────────────
      {
        name: "services",
        label: "Services",
        path: "content/services",
        match: { include: "index" },
        format: "md",
        frontmatterFormat: "yaml",
        fields: [
          {
            name: "services",
            label: "Services",
            type: "object",
            list: true,
            fields: [
              { name: "num",     label: "Number",  type: "string" },
              { name: "title",   label: "Title",   type: "string" },
              { name: "tagline", label: "Tagline", type: "string" },
              { name: "body",    label: "Body",    type: "string", ui: { component: "textarea" } },
              {
                name: "faq",
                label: "FAQ",
                type: "object",
                list: true,
                fields: [
                  { name: "q", label: "Question", type: "string" },
                  { name: "a", label: "Answer",   type: "string", ui: { component: "textarea" } },
                ],
              },
            ],
          },
        ],
      },

      // ── Journal ─────────────────────────────────────────────
      {
        name: "journal",
        label: "Journal",
        path: "content/journal",
        match: { exclude: "**/_index" },
        format: "md",
        frontmatterFormat: "yaml",
        fields: [
          { name: "title",   label: "Title",   type: "string", isTitle: true, required: true },
          { name: "date",    label: "Date",    type: "datetime" },
          { name: "summary", label: "Summary", type: "string", ui: { component: "textarea" } },
          { name: "heroImage", label: "Hero Image", type: "image" },
          { name: "draft",   label: "Draft",   type: "boolean" },
          {
            name: "body",
            label: "Content",
            type: "rich-text",
            isBody: true,
          },
        ],
      },

    ],
  },
});
