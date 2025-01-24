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

- loads the app -> make api call -> render the data
- loads the app -> render the app -> make api call -> render the data
- ***CORs policy*** - the browser blocks calling api in local
    - add corsproxy `https://corsproxy.io/?` before the api call, fix the cors issue.
- ***Conditional Rendering*** - Renders the data based on the condition.

