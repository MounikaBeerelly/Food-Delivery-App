# Redux

- It is a state management library.
- We can use Redux with other frameworks also.
- Two libraries from the Redux team
   - React-Redux
   - Redux Toolkit
- Redux Toolkit is the standard way to write Redux logic.
- `https://redux-toolkit.js.org`
- **Architecture of Redux**
1. Store:
    - it is an object.
    - every component can access this store
    - divide into multiple slices
    - We cannot modifies the store directly
    - modify the store through dispatching the action, it calls the function(reducer) and this function internally modifies the store
    - **Selector** used to read the data from store and it gives the data to the component.
2. Action:
3. Reducer

     `ADD => Action => Reducer => Store => Selector => Cart`
       |       |          |         |         |
    `click  dispatch  function    slice   Subscribing to the strore`


difference between - 
onClick = {handleAddItem}
onClick = {() => handleAddItem{item}}
onClick = {handleAddItem()} - calling the function right away
