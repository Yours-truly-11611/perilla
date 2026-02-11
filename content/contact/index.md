---
title: "Contact"
date: 2025-01-01
heroImage: "images/backgrounds/cloud-world.jpg"
heroTintColor: "rgba(30, 20, 40, 0.55)"
heroSubtitle: "Say hello"
---

## Let's talk


Let's talk about your project.
The best way to start is a discovery call. 30 minutes, free, no obligation. You tell me what you're building. I'll tell you honestly whether I can help.
If calls aren't your thing, fill out the intake form below. I'll get back to you within 48 hours with some initial thoughts.

I'm currently available for freelance copywriting and content strategy projects. If you have something in mind — or just want to see if we'd be a good fit — say hello.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Discovery Form - Three Legged Crow Studio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg: #F6F1EA;
      --warm-white: #FAF8F5;
      --charcoal: #2B2B2B;
      --bronze: #8B6B4A;
      --bronze-hover: #7A5C3D;
      --soft-brown: #7A6B5D;
      --light-line: #D1C7B8;
      --field-bg: #FFFFFF;
      --field-border: #D1C7B8;
      --field-focus: #8B6B4A;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background-color: var(--bg);
      color: var(--charcoal);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 3rem 1.5rem;
    }

    .form-container {
      width: 100%;
      max-width: 580px;
    }

    .form-header {
      margin-bottom: 2.5rem;
    }

    .form-header h1 {
      font-family: 'Lora', serif;
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--charcoal);
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }

    .form-header p {
      font-size: 0.975rem;
      color: var(--soft-brown);
      line-height: 1.65;
    }

    .form-divider {
      width: 60px;
      height: 2px;
      background-color: var(--bronze);
      margin: 1.5rem 0 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .field-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    label {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--charcoal);
      letter-spacing: 0.01em;
    }

    label .hint {
      font-weight: 400;
      color: var(--soft-brown);
      font-size: 0.8rem;
    }

    input[type="text"],
    input[type="email"],
    select,
    textarea {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem;
      color: var(--charcoal);
      background-color: var(--field-bg);
      border: 1px solid var(--field-border);
      border-radius: 4px;
      padding: 0.7rem 0.85rem;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      width: 100%;
      appearance: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: var(--field-focus);
      box-shadow: 0 0 0 2px rgba(139, 107, 74, 0.12);
    }

    input::placeholder,
    textarea::placeholder {
      color: var(--light-line);
    }

    select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A6B5D' fill='none' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.85rem center;
      padding-right: 2.5rem;
      cursor: pointer;
    }

    textarea {
      resize: vertical;
      min-height: 110px;
      line-height: 1.55;
    }

    .submit-area {
      margin-top: 0.5rem;
    }

    button[type="submit"] {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--warm-white);
      background-color: var(--bronze);
      border: none;
      border-radius: 4px;
      padding: 0.85rem 2.25rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
      letter-spacing: 0.015em;
    }

    button[type="submit"]:hover {
      background-color: var(--bronze-hover);
    }

    button[type="submit"]:active {
      transform: translateY(1px);
    }

    .form-footer {
      margin-top: 1.75rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--light-line);
    }

    .form-footer p {
      font-size: 0.85rem;
      color: var(--soft-brown);
      line-height: 1.6;
    }

    @media (max-width: 520px) {
      .field-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      body {
        padding: 2rem 1.25rem;
      }

      .form-header h1 {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>

<div class="form-container">
  <div class="form-header">
    <h1>Tell me what you're working on.</h1>
    <p>
      Fill out what you can. I'll get back to you within 48 hours.
    </p>
    <div class="form-divider"></div>
  </div>

  <form action="https://formspree.io/f/xgoloyvv" method="POST">

    <div class="field-row">
      <div class="field-group">
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="field-group">
        <label for="email">Your email</label>
        <input type="email" id="email" name="email" required>
      </div>
    </div>

    <div class="field-group">
      <label for="business">Your business or project</label>
      <input type="text" id="business" name="business">
    </div>

    <div class="field-group">
      <label for="description">What you do <span class="hint">(keep it short, we'll get into it later)</span></label>
      <input type="text" id="description" name="description">
    </div>

    <div class="field-group">
      <label for="writing-type">What do you need written?</label>
      <select id="writing-type" name="writing_type" required>
        <option value="" disabled selected>Pick the closest fit</option>
        <option value="website">Website copy</option>
        <option value="social">Social media</option>
        <option value="email">Emails</option>
        <option value="blog">Blog posts</option>
        <option value="brand">Brand messaging</option>
        <option value="multiple">Some combination</option>
        <option value="not-sure">Not sure yet</option>
      </select>
    </div>

    <div class="field-group">
      <label for="timeline">When do you need it?</label>
      <input type="text" id="timeline" name="timeline" placeholder="Ballpark is fine">
    </div>

    <div class="field-group">
      <label for="anything-else">Anything else?</label>
      <textarea id="anything-else" name="anything_else" placeholder="Budget, past experiences, what's frustrating you, whatever."></textarea>
    </div>

    <div class="submit-area">
      <button type="submit">Let's Go</button>
    </div>

  </form>

  <div class="form-footer">
    <p>No sales pitch. No follow-up sequence. Just a real reply from the person who'd be doing the work.</p>
  </div>
</div>

</body>
</html>



**Upwork:** [Alexandria — Copywriter & Content Strategist](https://www.upwork.com)

---

*Response time is usually within a day or two. If it's urgent, say so and I'll prioritize.*
