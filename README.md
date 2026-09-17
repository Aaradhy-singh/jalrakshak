# JalRakshak — Varanasi Water Advisory & Civic Awareness Platform

> **An academic portfolio project created for the 1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship.**

**JalRakshak** is a civic water-awareness and environmental-advisory web platform inspired by Varanasi (Kashi) and the sacred Ganga River. The platform brings environmental context, riverfront focus areas, atmospheric observations, and transparent civic guidance into one calm, editorial, modern, and culturally grounded public experience.

---

## 🏛️ Brand & Aesthetic Direction

Unlike generic modern SaaS templates with neon gradients and floating glass panels, JalRakshak embodies the architectural gravitas and cultural serenity of Varanasi:

- **Ghat Step Architectural Motif**: Subtle, recurring stacked horizontal tiers inspired by the 84 stone ghats of Varanasi, integrated into section dividers, card edges, and header accents.
- **Curated Color Palette**:
  - **Ganga Night** (`#0A1E2C`): The solemn depth of the river after dusk.
  - **River Teal** (`#135C63`): The deep green-teal tone of the sacred stream.
  - **Marigold** (`#E29433`): Warm floral offerings at morning arati.
  - **Diya** (`#F6C667`): Warm illumination of brass lamps floating upon the current.
  - **Mist** (`#EEF2F1`): Crisp morning haze over the riverbank.
- **Editorial Typography**:
  - Headings: *Fraunces* (Google Fonts, variable optical serif)
  - Body & UI: *Inter* (high-clarity modern sans-serif)

---

## 🛡️ Data Integrity Policy & Truth Boundaries

To maintain uncompromising ethical and civic standards, JalRakshak enforces strict truth boundaries:

1. **Zero Fabrication**: No invented statistics, simulated ward-level groundwater metrics, synthetic coliform indices, or fabricated survey dates.
2. **OpenStreetMap Attribution & Focus Areas**: The map is a real OpenStreetMap base map. Its six markers designate JalRakshak project civic focus areas (Assi, Dashashwamedh, Chowk, Bhelupur, Sigra, and Ramnagar)—not verified ward boundaries, official GIS geometry, hydrological buffers, survey points, or sensor locations.
3. **Transparent Meteorology vs. Static Baselines**: Ambient temperature, humidity, wind velocity, and air quality indices (AQI/PM2.5/PM10) are fetched live from the public [Open-Meteo API](https://open-meteo.com/) for Varanasi coordinates (25.3176° N, 82.9739° E). Hydrological figures (such as Ganga River Stage) are documented as static Central Water Commission (CWC) normal pool reference benchmarks (68.4 m MSL), not live automated telemetry.
4. **Prospective Municipal Integrations**: Datasets awaiting official institutional agreements (such as Varanasi Municipal Corporation GIS ward boundaries or Central Ground Water Board piezometer hydrographs) are categorized as prospective roadmap items and are never presented as active feeds.
5. **Attribution Authenticity**: No false claims regarding deployed AI models, third-party certifications, or commercial partnerships. The project documents only verified tools and APIs actually utilized.
6. **No External Stock Assets**: Atmosphere is generated entirely using semantic CSS, custom SVG geometries, and procedural Three.js mathematics—zero copyrighted or stock imagery.

---

## 🛠️ Technology Stack

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Vite 6)
- **Routing**: [React Router v7](https://reactrouter.com/) (Client-side SPA)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Mapping**: [Leaflet](https://leafletjs.com/) + [React Leaflet](https://react-leaflet.js.org/) + [OpenStreetMap](https://www.openstreetmap.org/)
- **Atmospheric Data**: [Open-Meteo Weather & Air Quality API](https://open-meteo.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Hero Scene**: [Three.js](https://threejs.org/) + [React Three Fiber](https://r3f.docs.pmnd.rs/) + [Drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🌐 Routes Overview

All eight routes support direct URL navigation, share a unified sticky navigation bar, and include the signature ghat-step footer:

| Route | Page | Purpose & Content |
|---|---|---|
| `/` | **Home** | Centered editorial hero with living river animation, civic foundation pillars, architectural ghat bands, and methodology CTA. |
| `/wards` | **Ward Explorer** | Interactive OpenStreetMap view with six selectable focus areas, cultural context, environmental settings, and verification standards. |
| `/environment` | **Environment Dashboard** | Live ambient weather and air quality observations via Open-Meteo for Varanasi (25.3176° N, 82.9739° E), with reference CWC river stage baselines. |
| `/methodology` | **How It Works** | 4-step plain-language workflow explaining the planned civic verification pipeline (Origin, Scope, Rules, Limits). |
| `/responsible-ai` | **Responsible AI** | Governance framework detailing Fairness, Transparency, Ethics, Privacy, and Human Agency. |
| `/sources` | **Sources & Data Notes** | 4-stage verification flow, interactive candidate simulation demonstration, and registered dataset catalog. |
| `/about` | **About JalRakshak** | Civic mission, 1M1B–IBM SkillsBuild internship context, engineering stack, and Kashi dedication. |
| `/insights` | **Civic Insights** | Editorial research briefing roadmap with strict data integrity notices and scheduled study topics. |

---

## ♿ Accessibility & Quality Standards

- **Semantic Landmarks**: Each page contains exactly one `<h1>`, `<header role="banner">`, `<main id="main-content">`, `<nav>`, and `<footer role="contentinfo">`.
- **Keyboard Navigation**: Complete tab-order accessibility, visible `:focus-visible` focus rings (`#E29433`), and a hidden-until-focused "Skip to main content" link.
- **Accessible Mobile Drawer**: Modal focus trap with Escape key dismissal and `aria-expanded` attributes.
- **Reduced Motion Support**: Fully respects `(prefers-reduced-motion: reduce)`. Halts vertex wave oscillations, stops camera drift, and disables CSS animation loops for motion-sensitive users.
- **WebGL Fallback**: Graceful fallback to a static SVG/CSS composition if WebGL is unavailable or fails.
- **High Contrast**: Meets WCAG AA contrast standards across both dark (Ganga Night) and light (Mist) surfaces.

---

## 🚀 Local Setup and Run Instructions

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
# Navigate to project directory
cd jalrakshak

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Type Checking & Linting
```bash
npm run lint
```

### Production Build & Preview
```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deployment to Vercel

JalRakshak is configured for immediate deployment on Vercel:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **SPA Rewrite Configuration**: The included `vercel.json` specifies:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```
  This ensures that direct route visits such as `/wards`, `/environment`, `/methodology`, and `/about` resolve correctly without 404 errors.

---

## 🗺️ OpenStreetMap Attribution Notice

The interactive base map utilizes map tiles and geospatial data provided by [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors under the Open Database License (ODbL). Markers displayed on the map indicate JalRakshak project civic focus areas only; they do not represent official municipal boundaries, land survey points, or government-certified hydrometric stations.

---

## 📜 Academic Attribution & Project Scope
Developed as an academic portfolio project for the **1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship**.
All architectural concepts, design tokens, and frontend code represent original work completed within this internship track.
