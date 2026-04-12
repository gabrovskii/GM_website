# Horizon Shift | Portfolio & Lifestyle

A modern, responsive, and modular portfolio website for **Gabriel Menezes**, Software Quality & Testing Specialist. This project showcases technical expertise, community engagement, and personal lifestyle through a clean and professional user interface.

## 🚀 Key Features

- **Dual Language Support**: Seamlessly toggle between Portuguese (PT) and English (EN).
- **Dark/Light Mode**: Integrated theme switching with persistence using `localStorage`.
- **Modular Architecture**: Separated concerns with externalized CSS and JavaScript for better maintainability.
- **Responsive Design**: Built with a mobile-first approach using Tailwind CSS.
- **Asset Localization**: All image assets are stored locally for better performance and reliability.
- **Interactive Gallery**: A custom-built mosaic gallery showcasing drone photography.
- **Media Integration**: Embedded Spotify playlist for an immersive experience.

## 📁 Project Structure

The project follows a clean and organized directory structure:

```text
.
├── index.html              # Main entry point (root)
├── src/                    # Source code directory
│   ├── css/
│   │   └── styles.css      # Custom external stylesheet
│   ├── js/
│   │   └── scripts.js      # Application logic (Dark Mode, Language, Nav)
│   └── assets/
│       └── images/         # Localized image and media assets
├── docs/                   # Documentation and project resources
│   ├── DESIGN.md           # Design System tokens and principles
│   ├── prompt.md           # Original project requirements
│   └── ...
└── README.md               # Project overview
```

## 🛠️ Technical Stack

- **Frontend**: HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN).
- **Typography**: 
  - [Epilogue](https://fonts.google.com/specimen/Epilogue) (Headlines/Labels)
  - [Manrope](https://fonts.google.com/specimen/Manrope) (Body)
  - [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Icons**: [Material Symbols Outlined](https://fonts.google.com/icons).

## 🎨 Design System

As documented in `docs/DESIGN.md`, the UI follows a "Technical Grid" aesthetic:
- **Primary Color**: `#40617f` (Light) / `#a8caec` (Dark).
- **Typography**: Consistent use of the Epilogue font family across all weights.
- **Shapes**: Modern rounded corners (`0.125rem` to `0.75rem`).
- **Overlays**: Glassmorphism effects with `backdrop-filter: blur(20px)`.

## 📖 Getting Started

To view the project locally:
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

---
*Created as part of a project reorganization to follow modern web development patterns.*
