# Art of Coffee — Premium Café Website

A premium, dark-themed café website for **Art of Coffee**, Ujjain — built with React, Vite, Tailwind CSS, and Framer Motion.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)

---

## ✨ Features

- Full single-page café experience: Hero, About, Highlights, Menu, Experience, Gallery, Reviews, Visit, Footer
- Smooth-scroll navigation with sticky glassmorphism header
- Filterable interactive menu (Coffee, Cold Coffee, Shakes, Snacks, Desserts)
- Auto-rotating customer review carousel with real café photography
- Masonry photo gallery with lightbox
- Animated background blobs, floating particles, and scroll-reveal transitions
- Embedded Google Maps location
- Fully responsive, mobile-first design
- SEO-ready with Open Graph tags and Local Business schema markup

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **Lucide React** — icon set

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

```bash
git clone https://github.com/your-username/art-of-coffee.git
cd art-of-coffee
npm install
```

### Development

```bash
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

The production-ready files will be in the `dist/` folder, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

---

## 📁 Project Structure

```
src/
├── App.jsx              # Root component — assembles all sections
├── main.jsx             # React entry point
├── index.css            # Tailwind directives + global styles
├── theme.js              # Brand color tokens and animation easing
├── data/
│   ├── content.js         # Menu items, reviews, gallery, highlights
│   └── images.js           # Base64-embedded café photography
└── components/
    ├── Shared.jsx         # Reusable primitives (Reveal, Blob, Logo, scroll helper)
    ├── Nav.jsx             # Sticky navigation with smooth-scroll links
    ├── Hero.jsx            # Full-screen hero with animated particles
    ├── About.jsx           # Brand story section
    ├── Highlights.jsx      # Trust badges grid
    ├── Menu.jsx             # Filterable menu with category tabs
    ├── Experience.jsx       # Lifestyle/experience cards
    ├── Gallery.jsx           # Masonry photo gallery with lightbox
    ├── Reviews.jsx           # Auto-rotating customer review carousel
    ├── Visit.jsx              # Contact info + embedded Google Map
    ├── Footer.jsx             # Site footer
    └── BackToTop.jsx          # Scroll-to-top button
```

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Brand colors | `src/theme.js` and `tailwind.config.js` |
| Menu items, reviews, gallery captions | `src/data/content.js` |
| Photos | `src/data/images.js` |
| Contact details, address, map embed | `src/components/Visit.jsx`, `src/components/Footer.jsx` |

> **Note:** Images are currently embedded as base64 strings in `images.js` for a zero-config single-repo setup. For a leaner production build, move them to `src/assets/` as actual image files and import them normally, allowing Vite to optimize and lazy-load them.

---

## 📍 About Art of Coffee

Art of Coffee is located in Triveni Vihar, near D-Mart, Pawapuri Colony, Ujjain, Madhya Pradesh. Rated 4.7★ with 128+ reviews — known for premium coffee, signature shakes, and a cozy, modern ambience.

---

## 📄 License

This project is open source and available for private work

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.
```
