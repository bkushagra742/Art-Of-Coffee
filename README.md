# Art of Coffee — Premium Café Website

A premium, dark-themed website for Art of Coffee, Ujjain. Built with React + Vite + Tailwind CSS + Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

The production build will be output to the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

## Project Structure

```
src/
  App.jsx              Root component — assembles all sections
  main.jsx             React entry point
  index.css            Tailwind directives + global styles
  theme.js             Brand color tokens and animation easing
  data/
    content.js          Menu items, reviews, gallery, highlights data
    images.js            Base64-embedded café photography
  components/
    Shared.jsx          Reusable primitives (Reveal, Blob, Logo, nav scroll helper)
    Nav.jsx              Sticky navigation with smooth-scroll links
    Hero.jsx             Full-screen hero with animated particles
    About.jsx            Brand story section
    Highlights.jsx       Trust badges grid
    Menu.jsx             Filterable menu with category tabs
    Experience.jsx       Lifestyle/experience cards
    Gallery.jsx          Masonry photo gallery with lightbox
    Reviews.jsx          Auto-rotating customer review carousel
    Visit.jsx            Contact info + embedded Google Map
    Footer.jsx           Site footer
    BackToTop.jsx        Scroll-to-top button
```

## Customizing

- **Colors**: edit `src/theme.js` and `tailwind.config.js`
- **Menu items, reviews, gallery captions**: edit `src/data/content.js`
- **Photos**: replace base64 strings in `src/data/images.js`, or swap to `/src/assets/*.jpg` + standard imports for a cleaner setup in a real production build
- **Contact details / address / map embed**: edit `src/components/Visit.jsx` and `src/components/Footer.jsx`

## Notes

- Images are currently embedded as base64 strings directly in `images.js` for a zero-config single-repo setup. For a leaner production build, move them to `/src/assets/` as actual image files and import them normally (`import exterior from "../assets/exterior.jpg"`) — this allows Vite to optimize and lazy-load them.
- Smooth scroll-to-section navigation accounts for the fixed header height (68px offset).
