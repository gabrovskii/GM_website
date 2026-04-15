# Project Reorganization Prompt

## Context
Analyze a legacy web project where HTML, CSS, and JS are combined into a single file and the file structure is flat.

## Objective
Organize the project following modern web development patterns.

## Instructions
1.  **Directory Structure**:
    *   `src/`: Main source code directory.
    *   `src/index.html`: Main entry point (moved from root).
    *   `src/css/styles.css`: External stylesheet.
    *   `src/js/scripts.js`: External JavaScript file.
    *   `src/assets/images/`: Directory for static image assets.
    *   `docs/`: Documentation directory.
2.  **Code Separation**:
    *   Extract all `<style>` block content into `src/css/styles.css`.
    *   Extract all `<script>` block content into `src/js/scripts.js`.
    *   Update `src/index.html` to reference the external CSS and JS files.
3.  **Asset Localization**:
    *   Download all external images and save them to `src/assets/images/`.
    *   Update all `<img>` tags and CSS `url()` declarations to point to the local files.
4.  **File Migration**:
    *   Move any documentation (like `DESIGN.md`) to the `docs/` folder.
    *   Move image assets to `src/assets/images/`.
5.  **Consistency**: Ensure that relative paths in the HTML file are updated to reflect the new directory structure.

## Expected Outcome
A clean, modular project structure that separates concerns and facilitates maintenance.