### Redux

### To Read:

> Redux vs Redux Toolkit
> Difference between: onClick={handleProduct}, onClick={handleProduct(item)} and onClick={() => handleProduct(item)}
> Now RTK Query - earlier middlewares and thunks

1. Redux is not always mandatory. It depends on how huge the project is.
   Context API can also be used for this.
   Use Redux wisely and only when required.
   Another alternative to Redux is Zustand.

2. Why do we use Redux?

- it provides a state management solution. For handling state of our application.
- application becomes easier to debug
- A predictable state container for JS Apps
- Two libraries: `react-redux` (bridges Redux and React) and `@reduxjs/toolkit` (newer version of Redux).

3. Redux toolkit

- standard way of using Redux
- three concerns of redux

  - redux was very complicated
  - Had to add lots of packages
  - required to add a lot of boilerplate code

- Architecture of Redux toolkit
  - What feature? Cart flow and Card page in our food application. Use redux store to store cart data.

> Install libraries:
> `npm i @reduxjs/toolkit` and `npm i recat-redux`
> Build store
> Connect store to app

- Doing `state = []` will not work during clearCart action
- Always subscribe only to a small portion of the store, only the required data.
- In vanilla redux, redux used to say do not mutate state. A copy of state variable was being created and then the state was mutated.

  > const newState = [...state];
  > newState.push(action.payload);
  > return newState;

- In newer version even return is not mandatory
- But if we are mutating state in newwer version of redux, behind the scene redux uses immer (package that allows to work with immutable objects conviniently) library to do the same thing as earlier. i.e make a copy of state and then mutate it.
- In clear cart, if we do this state = [] will not work. Because immer just creates a reference to the object. It mutates the local variable and is empty.
  The global state remains the same.
  We need to do either length zero or return empty array
