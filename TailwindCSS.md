# Tailwind CSS

- `https://taiwindcss.com`
- Rapidly build modern websites without ever leaving your HTML.
- Configure Tailwind in project - 
    - go to framework guides
    - install Taiwind CSS with Parcel
    - `npm install -D tailwindcss postcss`
    - **Postcss** is a tool for transforming CSS with JavaScript. Tailwind css uses this postcss.
    - `npx tailwindcss init` after this tailwindcss.config.js file will be created.
    - Create configuration for postcss. 
        - Create **.postcssrc** file and add below code
        {
            "plugins": {
            "tailwindcss": {}
            }
        }
    - then configure tailwindcss 
    - import tailwind into `index.css` file
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

- Taiwindcss-vscode extension **Taiwind CSS IntelliSense** - install in vs code.
    - it gives the tailwind css suggestions.
    - px : padding left and right
    - py : padding top and bottom
    - pb : padding bottom
    - ml : margin left

- dark mode / light mode