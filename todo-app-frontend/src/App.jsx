//import { useState } from 'react'
import React, {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//custom hook
function useTodos(){
  const[todos, setTodo] = React.useState([]);

    React.useEffect(()=>{
      fetch("http://localhost:3000/todos",{
        method:"GET"
      }).then((response)=>{
        response.json().then((data)=>{
          console.log(data);
          setTodo(data);
        })
      });
    }, []);

  setInterval(()=>{
    fetch("http://localhost:3000/todos",{
        method:"GET"
      }).then((response)=>{
        response.json().then((data)=>{
          console.log(data);
          setTodo(data);
        })
      });
  }, 1000)
  return todos
}

function App() {
  const todos = useTodos()
  
  return (
    
    <div>
      <PersonName firstname={"Nikita"} lastname={"Jare"}></PersonName>
      {todos.map(todo => {
        return <div>
          {todo.title}
          {todo.description}
          <button>Delete</button>
          <br/>
        </div>
      })}
    </div>
    )
}

function PersonName(props){
  return <div>
    {props.firstname} {props.lastname}
  </div>
}

export default App
