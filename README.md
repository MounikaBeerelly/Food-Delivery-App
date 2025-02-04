# Food-Delivery-App

1. Header Component
    - Logo
    - Nav Items
2. Body Component
    - Search
    - Restaurant Container
        - Restaurant Card
            - Img
            - Name of Restaurant, Star Rating, Cuisine, Delivery Time
3. Footer Component
    - Copyright
    - Links
    - Address
    - contact

## Folder Structure
- src folder: source code
- components
- utils: common/reusable files

## Two types of Export/Import
1. Default Export/Import
    - export default Component;
    - import Component from "path";
2. Named Export/Import
    - export const Component;
    - import {Component} from "path";

- loads the app -> make api call -> render the data.
- loads the app -> render the app -> make api call -> render the data
- ***CORs policy*** - the browser blocks calling api in local
    - add corsproxy `https://corsproxy.io/?` before the api call, fix the cors issue.
- ***Conditional Rendering*** - Renders the data based on the condition.

## Hooks: 
- Hooks are like utility functions.
1. useState() hook
2. useEffect() hook
3. useParams() hook
4.

## CSS Libraries:
1. Internal Styling (normal CSS)
2. SASS(Syntatically Awesome Style Sheets) & SCSS()
3. Styled-components : `https://styled-components.com`
4. Bootstrap
5. Material UI : very popular react UI library
6. Chakra UI
6. Ant design Library
7. Tailwind CSS

## State Management Libraries
1. Redux 
     - Application become easy to debug
2. Zustand
3. MobX

## Redux Toolkit

  - install libraries `@reduxjs/toolkit and react-redux`
  - Build our store
  - Connect our store to our app
  - Create slice (cartSlice)
  - dispatch (action)
  - Selector
  

  ## Top UI Libraries:

  - A UI library is a collection of pre-built reusable components.
  - It saves time by providing ready-to-use components.
  - It allow customization to fit your project.
  Optimized for speed and responsiveness.
  1. **Shadcn UI** (https://www.ui.shadcn.com)
    - It's a great choice if you want to create highly customizable, unstyled components.
  2. **Tailwind UI** (https://www.tailwindui.com)
    - Helps to create unique UIs without writing custom css.
  3. **Hero UI** (https://www.heroui.com)
    - Beautiful, fast UI components for React & best suited for elegant, smooth UI designs.
 4. **Geist UI** (https://www.geist-ui.dev)
    - It works seamlessly wiith Next.js. Ideal for modern, clean web applications.
 5. **Mantine** (https://www.mantine.dev)
    - Rich set of flexible, customizable components. Good for building dashboards.
