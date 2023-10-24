//import { useState } from 'react'
import React, {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let todo = {
// title: "Assignment 1",
// desc: "Complete CSOR Assignment 1",
// id: 1
// }

/* This wont work because react needs to know if it is a state variable*/
// setInterval(()=>{
//   todo.title = "njsdfnvjkdf"
// },1000)
var ctrl = 0
function App() {
  //this is how you render a todo, and react know to watch the state of this variable
  //It says whenever you are updating, call setTodo
  /*Here React.useState protects the original variable everytime a state changes
  and does not reset */
  /*useState is React hook - hooks remain independent of re-renders */
  const[todos, setTodo] = React.useState([{
    title: "Assignment 1",
    desc: "Complete CSOR Assignment 1",
    id: 1
    },
    {
      title: "Assignment 5",
      desc: "Complete CSOR Assignment 5",
      id: 2
    }]);

    React.useEffect(()=>{
      setInterval(()=>{
        setTodo({
          title: "Assignment 10 " + Math.random(),
          desc: "Complete CSOR Assignment 10",
          id: 3
        })
    }, 1000)
    }, []);
  
  /*setInterval runs more quickly than 1second, because every time a state is changed,
   again an instance of setInterval is created, so it creates a bunch of intervals*/
  // setInterval(()=>{
  //   setTodo({
  //     title: "Assignment 10 " + Math.random(),
  //     desc: "Complete CSOR Assignment 10",
  //     id: 3
  //   })
  // }, 2000)
  console.log("Render")
  
//   if (ctrl == 0) { setInterval(()=>{
//     setTodo({
//       title: "Assignment 10 " + Math.random(),
//       desc: "Complete CSOR Assignment 10",
//       id: 3
//     })
//   }, 2000)
//   ctrl = 1
// }

//   //JSON.stringify have to convert JSON objects to string to render to html

  //****Method 1: */
  // return (
  // <>
  //   <h1>Hello </h1>
  //   {todos.map((todo)=>{
  //     return <div>
  //       {todo.title}
  //       {todo.desc}
  //       <br/>
  //     </div>
  //   })}
    
  //   <span>{JSON.stringify(todos)}</span>  
  //   <PersonName firstname={"Nikita"} lastname={"Jare"}></PersonName>
  // </>
  // )
  // return (
  //   <>
  //     <h1>Hello </h1>
  //     {todos.map((todo)=>{
  //       return <Todo title={todo.title} desc={todo.desc}></Todo>
  //     })}
      
  //     <PersonName firstname={"Nikita"} lastname={"Jare"}></PersonName>
  //   </>
  //   )
  return (
    <>
      <h1>Hello </h1>
      {todos.title}
      <br/>
      {todos.desc}
      
      <PersonName firstname={"Nikita"} lastname={"Jare"}></PersonName>
    </>
    )

}

//this is component, it can accept props i.e states
function PersonName(props){
  return <div>
    {props.firstname} {props.lastname}
  </div>
}

//components can be reused at any place in the code
function Todo(props){
  return (
    <div>
      {props.title}
      {props.desc}
    </div>
  )
}

export default App
