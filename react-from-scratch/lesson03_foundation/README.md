Start with the foundations:

To look into: Babel, JSX, attributes in JSX, How JSX sanitizes data

1. Add scripts to package.json
   When you want to know how to run your app, add/check scripts from package.json
   `"start": "parcel index.html",
"build": "parcel build index.html"`

2. How to run the scripts:

   `npm run start` or `npm start`

   `npm run build` (npm build wont work, it only works for start)

3. What is a React Element?

Kind of quivalent to DOM element.
React element is not an HTML element, when we do React.createElement(), it returns an object. React element is an object.
When we render this object to the DOM, it becomes an HTML element.

4. What is JSX?
   JSX is a syntax extension to JavaScript and not a part of React
   JSX is seperate from React
   JSX tries to merge HTML and JS together.
   This is not HTML in Javascript, it is JSX - HTML like syntax
   How it becomes React element? --> using JSX syntax it becomes React
   JSX is used to render HTML in React

   React.createElement() will not be used anymore.

   Is object returned by JSX a valid JS object? Can JS engine understand it?

   - No. JS engine can not understand JSX. JSX is not JS code. JS understands ECMAScript syntax.

   Then how is this code working? --> PARCEL! (Bundlers)
   The code is transpiled before it goes to JS engine.

   PARCEL does not do this by itself , it is a manager. It does it with the help of Babel. Babel is a compiler and transpiler. Babel converts JSX to JS.

   JSX --> React Element --> rendered to HTML

5. If you have to give attributes in JSX, use camel case in JSX
   You have to give className (camel case) in JSX and class in HTML

   If we have to write JSX in multiple lines, wrap it in round brackets

6. Components in React
   There are two types of components in React

   - Functional components
   - Class components - (Not recommended - Old way, nobody uses it now)

7. What is a React functional component?
   It is just another JS function. Whenever we create it, use first letter capital.
   It returns some JSX, React Element.

   Render functional component as `root.render(<Component />)`

   Component composition is just nesting of functional components.

   Inside a component, we can write any JS code inside `{}`

8. JSX takes care of cross site scripting attacks. It sanitizes any piece of code.
   It prevents injection attacks.
