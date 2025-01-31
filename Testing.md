## Types of Testing (Developer)

1. Unit Testing
   - Test react components in isolation.
   - Test small unit/portion/component is unit testing
2. Integration Testing
   - testing multiple components at a time by triggering events
3. End to End Testing - e2e testing
   - Test how the user will flow across the application

- Testing is part of writing code.

- **Libraries for testing**
    - React Testing Library
       - build top of DOM testing library
       - RTL uses Jest library
    - jest

- **Setting up for Testing**
    - Install react testing library
    - install jest
    - install babel dependencies
    - configure babel 
    - configure Parcel config file to decide default babel transpilation
    - write jest configuration `npx jest --init`
    - install jsdom library
    - install `@babel/preset-react` library - to make jsx work in test cases
    - Include `@babel/preset-react` in the babel.config.js file
    - install `@testing-library/jest-dom` library 
       - npm install -D @testing-library/jest-dom

- **jsdom (browser-like)** JSDOM is a library, which parses and interacts with assembled HTML like a browser.
- __tests__ : dunder(__) test

- test function takes 2 arguments
   - description
   - implementation of the function
   - it and test functions work as same
   - beforeAll() - called bbefore running all the test cases
   - beforeEach() - called before each testcase
   - afterAll() - called after completing all testcases
   - afterEach() - called after each test