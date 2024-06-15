## Food Ordering App

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-     - Image
-     - Name
-     - Cuisines
-     - Rating
-     - Delivery Time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

To read about: `React File Structure, Can I do default export with named, acdlite/react-fiber-architecture`

1. Why React? - You can still do things with plain HTML, CSS, JS

- React makes it easy to create reusable UI components. It makes the development experience easier.

Make spearate files for separate components.
Folder structure:

- All main code in src folder
- you can add any extension i.e js, ts, jsx etc.
- you have to export your component before you can import it.
- Whenever you have any hardcoded data, url, image string, never keep in components.
- two ways to export - default (`import component from filename`) and named (use curly brackets `import {component} from filename`)

2. React Hooks - Hooks are functions that let you use state and other React features without writing a class.
   Make website dynamic.

//show top rated restaurant
Suppose you have to keep data consistent with UI layer - React is fast in DOM manipulation. UI should update according to the data.

For this we need a state variable which will be keep track of latest data. This can be created using hooks.

A React hook is normal JS utility function - the only difference is that function has some logic in it by default.

How do you use it? There are two very imortant hooks - `useState` and `useEffect`
`import {useState, useEffect} from 'react'`

useState - is use to keep track of state variable.
`const [listofRestaurants] = useState([])`

To modify this state variable, we need to call `setListofRestaurants` function to set the updated value in the state variable.

`const [listofRestaurants, setListofRestaurants] = useState([])`

Whenever a state variable updaes, react re-render the component. This happens in the background.

3. React uses reconciliation algorithm to update the DOM. There is also something know as React Fiber.

- We have a DOM tree on UI layer. Now suppose my UI changes from 10 components to 4 components. React creates a Virtual DOM.
- Virtual DOM is represetation of actual DOM. So it is not same as actual DOM.
- Virtual DOM is basically those React Elements.
- Diff Algorithm - This algorithm is responsible for finding the differences between two Virtual DOM trees.
- Finding out difference between two HTML trees is difficult and slow but finding out difference between two Virtual DOM trees (which are basically React Elements i.e JS Objects) is fast.
- Why is React fast? -- efficient DOM manipulation using Virtual DOM
  Virtual DOM existed long before React. But React's core algorithm makes Virtual DOM manipulation efficient and faster.
