import React from "react";
import ReactDOM from "react-dom/client";

//This is React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React Layout!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//The above way is not a very good - developer friendly way to create elements
//So Facebook created JSX (JavaScript XML) for the same purpose
//JSX is a syntax extension to JavaScript and not a part of React
//JSX is seperate from React
//This is not HTML in Javascript, it is JSX - HTML or XML like syntax
const jsxHeader = <h1 id="heading">Hello World from JSX</h1>;

//Try to log jsxHeader and header to see the difference. It is exact same object.
console.log(jsxHeader);
console.log(heading);

const jsxHeaderMultiLine = <h1 id="heading">Hello World from JSX</h1>;

root.render(jsxHeader);

//Render aonther component
const Title = () => {
  return <h1 id="heading">Hello World from Title Functional component</h1>;
};

//React element inside another react element
const header = <h1 id="heading">Hello World from Header react element</h1>;

//how to put react element inside React component
const title = (
  <h1 id="heading">
    {header}
    Hello World from Title React element
  </h1>
);

//you can also call functional component inside react element
const title2 = (
  <h1 id="heading">
    {/* <Title /> You can call it as JS function as below*/}
    {Title()}
    <Title />
    <Title></Title>
    Hello World from Title React element
  </h1>
);

//JS inside JSX
const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="parent">
      {Title()}
      <Title />
      <Title></Title>
      {number + 2000}
      {title}
      <h1 id="heading">Hello World from Functional component</h1>;
    </div>
  );
};

//How to render functional components
root.render(<HeadingComponent />);
