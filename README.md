# Stellix Portfolio - Next.js Refactor

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.4-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🚁 Project Overview
This is the official portfolio website of **Gabriel Menezes**, a Software Quality & Testing Specialist. The project serves as a dynamic professional showcase, designed under the **"Technical Grid Aesthetic"** concept. It bridges the gap between the analytical precision of Quality Assurance and the creative freedom of outdoor exploration and aerial photography.

The website highlights:
- **Professional Journey**: Over 7 years of expertise in QA, technical leadership, and Android automation.
- **Community Engagement**: Active involvement in the Python Brazil community, including event organization and public speaking.
- **Perspectives**: A visual gallery of aerial photography captured via drone, representing the balance between code and the horizon.

---

## 🏗️ Design Pattern: Component-Based Architecture
The project has been refactored from a legacy single-file HTML/JS project into a professional Next.js 14+ application using the App Router architecture to ensure scalability and maintainability.

### 🧩 Componentization
Deconstructed the legacy `index.html` into specialized React components in `src/components/`:
- **Navbar**: Dynamic navigation with active section tracking.
- **Hero**: Main entry point with Spotify integration and optimized images.
- **Experience**: Timeline and technical stack display.
- **Journey**: Community involvement and event history.
- **Lifestyle**: Interactive mosaic gallery for aerial photography.
- **Social**: Connection points and footer links.

### 🌍 i18n & State Management
- **Language Switcher (PT/EN)**: Implemented via **React Context API** (`LanguageContext.tsx`). Preference is persisted in `localStorage`.
- **Theme Management**: Dark/Light mode managed via `ThemeContext.tsx`, integrating with Tailwind's `dark:` classes.

---

## 🚀 Optimization & Engineering
- **Next/Image**: All images utilize optimized loading, resizing, and modern formats.
- **Next/Font**: Google Fonts (**Manrope**, **Epilogue**, **Inter**, **Space Grotesk**) are hosted locally for zero layout shift.
- **Performance**: High Server-Side Rendering (SSR) utilization with minimal client-side interactivity.

---

## 🛠️ Local Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/stellix-adm/Stellix.git
   cd Stellix
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment to Vercel
1. Ensure all changes are pushed to the `main` branch.
2. In the [Vercel Dashboard](https://vercel.com/), import the repository.
3. Use the **Next.js** preset with the build command `npm run build`.

---
© 2026 Gabriel Menezes. Where Code Meets the Horizon.
