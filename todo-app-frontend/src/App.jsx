import { useState } from 'react'
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

function App() {
  //this is how you render a todo, and react know to watch the state of this variable
  //It says whenever you are updating, call setTodo
  const[todo, setTodo] = useState({
    title: "Assignment 1",
    desc: "Complete CSOR Assignment 1",
    id: 1
    });

  setInterval(()=>{
    setTodo({
      title: "Assignment 10",
      desc: "Complete CSOR Assignment 10",
      id: 2
    })
  }, 2000)

  return (
  <>
    <h1>Hello </h1>
    <span>{todo.title}</span>
    {todo.desc}
    {todo.id}
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

export default App
