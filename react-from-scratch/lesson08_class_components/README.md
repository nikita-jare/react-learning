## Class Based Components

ToDo: why we need super in class based components?, why cant i use async callback in useEffect, async callback in class based components

1. We never update state variables directly.
   class based components:
   Dont do this: `this.state.count = this.state.count + 1`
   Use this: `this.setState({count: this.state.count + 1})`

2. Lifecycle of react class based components
   How it is mounted to the DOM?

   - first consrtuctoris called and then render
     `class Counter extends React.Component {constructor(props) {}}`
     `class Counter extends Component {render() {}}`

   - In nested class components:
     parent constructor --> parent render --> child constructor --> child render

   - componentDidMount is called when the component is mounted i.e after it is rendered to the DOM
     parent constructor --> parent render --> child constructor --> child render --> child componentDidMount --> parent componentDidMount

   - componentDidMount is used to make an API call. Why?
     similar to useEffect in functional components. there is callback and dependency array in useEffect. (quickly render component --> API call --> re-render component)

   - When there are multiple child components,
     parent constructor --> parent render --> child 1 constructor --> child 1 render --> child 2 constructor --> child 2 render --> child 1 componentDidMount --> child 2 componentDidMount --> parent componentDidMount
     `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`

     ![alt text](<Screenshot 2024-06-15 at 6.02.34 PM.png>)

     As per this diagram, there are two phases in which lifecycle methods are called:

     1. Render phase (constructor and render)
     2. Commit/Mount phase (componentDidMount)

     Why React does all this? - React is batching up commit phase for all the components as it is an actual DOM manipulation which is expensive. React optimises the DOM manipulation.

     Everything in render phase is done in virtual DOM. So it is not that expensive.
     Diff is calculated and reconciliation is triggered.

3. Lifecycle:
   - Mounting:
     Constructor(dummy)
     Render(dummy)
     `<HTML Dummy>`
     ComponentDidMount
     API call
     this.state --> state variable is updated
   - Updating:
     render(API data)
     `<HTML new API data>`
     ComponentDidUpdate

Never compare React's lifecyle to functional components.
useEffect is not equivalent to componentDidMount

After the first render componentDidMount is called
For every subsequent render, componentDidUpdate is called
When the component is unmounted, componentWillUnmount is called

Earlier had to write condition based in componentDidMount. prevProps and prevState as arguments in componentDidMount

If there are two different things to do - For Ex, if count changes do one thing and if count2 changes do another thing
We can simply use two useEffect hooks.
Earlier we had to write long conditions based in componentDidUpdate.

Use of componentWillUnmount: clean up any resources that are not needed.

React is a single page application (SPA)

- One of the issues is - consider this code:
  `componentDidMount () {
this.interval = setInterval(() => {
console.log("hello")
},1000)
}`
  This will run every second even if you go out of the page, if you go back to another page, it will create a second instance. The reason is it just is a single page application.
  when you are changing pages, it is just re-rendering the component
  This can add performance issue.

  So, you need to use componentWillUnmount to clean up resources.
  How to clear above interval?

  `componentWillUnmount () {
clearInterval(this.interval)
}`

- Similarly, in functional components, if you create a setInterval in useEffect, it will start running every second, if you change the page, it will not stop running because we are not clearing the interval.
  `useEffect(() => {
setInterval(() => {
console.log("hello")
},1000)
})`

  to clear it we need to use return in useEffect
  when we change the page, the UseEffect return is called

  `useEffect(() => {
 const this.interval = setInterval(() => {
 console.log("hello")
 },1000)
 return () => {
 clearInterval(this.interval)
 console.log("UseEffect return")
 }
 })`
