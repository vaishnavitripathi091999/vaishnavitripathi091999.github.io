# Vaishnavi Tripathi — Portfolio

A dark-themed, fully responsive portfolio site. Plain HTML, CSS and JavaScript — no build step,
no frameworks, no dependencies to install. Drop the files into your GitHub Pages repo and it works.

---

## 1. Files

```
index.html                  Home page (hero → projects → skills → experience → education → contact)
style.css                   Shared stylesheet — used by the home page AND every project page
script.js                   Nav, mobile menu, scroll reveal, hero typing animation
.nojekyll                   Tells GitHub Pages to serve files as-is (keep this)
README.md                   This file

assets/
  Vaishnavi_Tripathi_CV.pdf The CV linked by every "Download CV" button
  profile.jpg               Your hero photo (already cropped to a square)
  projects/                 Project images — used BOTH on the home page cards
    commbank-complaints-dashboard.png    and at the top of each case study
    PickMYUNISS.png
    TrafficSign.webp
    Predictive.png

projects/
  commbank-complaints-dashboard.html
  pickmyuni.html
  traffic-sign-recognition.html
  predictive-modelling.html
  _template.html            Blank case-study page — copy this to add a new project

  demos/
    commbank-complaints-dashboard/
      index.html            The live dashboard, opened from the case study page
```

---

## 2. Publish it

Everything here goes in the **root** of your `vaishnavitripathi091999.github.io` repository.

**Option A — GitHub web interface (easiest)**

1. Go to https://github.com/vaishnavitripathi091999/vaishnavitripathi091999.github.io
2. Delete the old `index.html` (and any old css/js files).
3. Click **Add file → Upload files** and drag in `index.html`, `style.css`, `script.js`,
   `.nojekyll`, `README.md`, and the `assets` and `projects` folders.
4. Commit. Your site updates at https://vaishnavitripathi091999.github.io/ within a minute or two.

> If `.nojekyll` doesn't appear in your file picker, it's a hidden file — on Windows enable
> "Hidden items" in Explorer, on Mac press `Cmd + Shift + .` in Finder.

**Option B — Git**

```bash
git clone https://github.com/vaishnavitripathi091999/vaishnavitripathi091999.github.io.git
cd vaishnavitripathi091999.github.io
# copy the contents of this folder in, replacing the old files
git add -A
git commit -m "New portfolio"
git push
```

**To preview locally before publishing:** just double-click `index.html`. Everything works offline
except the Google Fonts (which fall back to your system font).

---

## 3. One thing left to personalise

Search for `TODO` in `index.html` and in the files under `projects/` to find these.

### GitHub links

Every project page currently points at your GitHub profile. Search for:

```
https://github.com/vaishnavitripathi091999
```

and replace each one with the specific repo URL, e.g.
`https://github.com/vaishnavitripathi091999/commbank-complaints-dashboard`.

> Also check your GitHub username is right — I guessed it from your site URL. If it's different,
> do a find-and-replace across all the HTML files.

### Swapping the photo later

Your photo is in `assets/profile.jpg`, cropped square and framed for the circle.
To change it, save a new **square** image over that same filename — nothing else needs editing.

---

## 4. Adding a new case study

This is the part you'll do most often. Three steps, about ten minutes.

### Step 1 — Create the page

Copy `projects/_template.html` → `projects/your-project-name.html`.

Use lowercase-with-hyphens for the filename; it becomes the URL
(`yoursite.github.io/projects/your-project-name.html`).

The template is already structured. Fill in these six sections and nothing else:

| Section | What goes in it | Length |
|---------|-----------------|--------|
| **Overview** | The problem, then what you built | 2 short paragraphs |
| **The questions** | What you set out to answer | 3–4 bullets |
| **The data** | Size, date range, fields, how you prepared it | 2 short paragraphs |
| **How I built it** | The actual steps you took | 4 bullets |
| **What it shows** | Your findings, one headline each | 4–5 items |
| **Outcome** | What it produced, what you learned | 2 short paragraphs |

Also update at the top: the `<title>`, the breadcrumb name, the pill label (tools · domain),
the `<h1>`, the intro sentence, and the three `case-meta` boxes (Type / Dataset / Built with).
In the sidebar, update the **Built with** tags.

Keep it tight. The whole point of the six-section shape is that a recruiter can skim it in
under a minute — if a section runs past two paragraphs, cut it.

### Step 1b — Add the project image

The same image is used in two places: the card on the home page, and the wide slot under the
title on the case study page. Until you fill it, the template shows a dashed placeholder box.

1. Save a screenshot as `assets/projects/your-project-name.png`
   (roughly 1600px wide works well — a full-width grab of your dashboard, notebook, or a chart).
2. In your project page, find the `<figure class="case-figure case-figure--empty">` block and
   replace the whole thing with:

```html
<figure class="case-figure reveal in">
  <img src="../assets/projects/your-project-name.png" alt="Describe what the image shows" />
  <figcaption>One line explaining what the reader is looking at.</figcaption>
</figure>
```

The commented-out version of exactly this snippet already sits just above the placeholder in
every project page, so you can uncomment it rather than typing it out.

> **Watch out when uncommenting.** An HTML comment runs from `<!--` to `-->`. If you delete the
> closing `-->` but leave the opening `<!--` (or vice versa), the instruction text ends up
> printed on the live page. After editing, open the page in a browser and check that no
> "PROJECT IMAGE: save a screenshot to…" text is visible.

`commbank-complaints-dashboard.html` is the worked example — open it to see a filled-in figure.

### Step 2 — Add the card to the home page

In `index.html`, find the comment block that says `TO ADD A NEW PROJECT` inside the projects
grid. Copy one of the existing `<article class="project reveal">` blocks, paste it just above
that comment, and update:

- `project__kicker` — the small coloured label (e.g. `Python · NLP · Text Analytics`)
- `project__title` — the project name
- `project__desc` — two sentences
- the three `metric__v` / `metric__l` pairs — your headline numbers
- the `href` on "Read case study" → `projects/your-project-name.html`
- the second link — either a GitHub URL, or a live demo (see step 4 below)
- **the card image** — the `<img>` inside `project__cover`, pointing at your file in
  `assets/projects/` (note: no `../` here, the home page is one level up from the project pages)

Every card header is 178px tall and uses one of two image styles. Pick the one that matches:

| Class on `project__cover` | Use it for | What it does |
|---|---|---|
| `project__cover--img project__cover--shot` | screenshots and photos | fills the frame, cropped from the top, slight zoom on hover |
| `project__cover--img project__cover--art` | diagrams / flowcharts on a white background | shows the whole image on a light panel, nothing cropped |

If you don't have an image yet, use a plain coloured header instead — `<div class="project__cover
cover--a">` with a `<span class="project__icon">…</span>` inside. `cover--a/b/c/d` are blue,
purple, green and orange.

With five or more projects the grid just keeps flowing two-per-row — nothing to adjust.

### Step 3 — Wire up the prev/next links

At the bottom of each project page there's a `<div class="case-nav">` with a previous and next
link. Slot the new page into that loop so all your case studies chain together.

### Step 4 (optional) — Add a live demo

If the project is something someone can actually click — a dashboard, a tool, a web app — put it
in its own folder under `projects/demos/`:

```
projects/demos/your-project-name/index.html
```

Then link to it from the case study page and from the home page card with:

```html
<a href="demos/your-project-name/index.html" target="_blank" rel="noopener">Open the live dashboard</a>
```

(from the home page card the path is `projects/demos/your-project-name/index.html`).

This is how the Customer Complaints Dashboard works — copy that project's page if you want a
worked example. A live demo is by far the strongest thing you can put on a portfolio, so use
this whenever the project allows it.

---

## 5. Changing the colours

Everything lives in the `:root` block at the top of `style.css`:

```css
--bg:#070b14;        /* page background          */
--accent:#38bdf8;    /* primary blue             */
--accent-2:#a78bfa;  /* purple (gradients)       */
--accent-3:#34d399;  /* green (the "open to work" dot) */
--text:#e9eefb;      /* body text                */
```

Change those five values and the whole site — both pages and all components — follows.

---

## 6. Other things worth knowing

- **Section numbers** (01, 02, 03…) are plain text in `index.html`. If you add or remove a section,
  renumber them by hand and update the nav links to match.
- **The rotating hero line** ("I turn data into …") is driven by one attribute. In `index.html`,
  find `data-words="…"` and edit the pipe-separated list — add, remove or reword as you like.
- **The skills section** is a framed 3×2 matrix of six areas, each with a one-line description
  and its tools. Tags marked `class="tag tag--core"` render highlighted in blue — use those for
  the tools you genuinely work in day to day (two or three per cell, no more, or the highlight
  stops meaning anything). The legend underneath explains the highlight to the reader.
- **Mobile menu** kicks in below 860px. Test by narrowing your browser window.
- **Reduced motion** is respected: if a visitor has motion sensitivity enabled in their OS, the
  typing animation and the spinning ring around your photo are disabled automatically.
- **Accessibility**: every icon link has an `aria-label`, and colour contrast meets WCAG AA on
  the body text.
