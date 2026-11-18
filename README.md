# Business Website Showcase

Responsive React + Vite project with three routes:
- `/` — portfolio landing page
- `/dental` — Everwell Dental concept
- `/plumbing` — Waterwise Plumbing concept

## Setup

From this project folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## If adding to an existing Vite project

Copy `src/` and `index.html` into your existing project, then install:

```bash
npm install react-router-dom lucide-react
```

Keep your existing Vite dependencies and scripts.

## Before using with a real business

Replace the sample business details, phone numbers, email addresses, service areas, testimonials and imagery. The plumbing quote form currently opens the visitor's email app using `mailto:`; connect a secure backend or form service for real lead collection. Add real appointment booking and map integrations as required.

## Responsive behaviour

The layouts include desktop, tablet and mobile breakpoints. Navigation collapses into a mobile menu, multi-column layouts stack, and forms and buttons adapt to narrow screens.
