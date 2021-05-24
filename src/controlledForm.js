import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function ControlledForm() {

  const [todos, setTodos] = useState([{
    'name':'todo1',
    'checked': true
  },{
    'name':'todo2',
    'checked': false
  }])

  const [todo, addTodo] = useState({name: '', checked: false});


  const handleChange = (event) => {
    addTodo(todo => ({...todo, [event.target.name]: event.target.type == 'checkbox' ?event.target.checked: event.target.value}));
  }

  
  useEffect(() => {
    console.log("todo added")
  }, [todos]) 


  const addToTodos = () => {
    var todoList = [...todos, todo];
    setTodos([...todos, todo]);
  }
  const showTodos = () => {
    console.log("todos", todos);
  }

  return (
    <div className="App">
      <h1> Todo ControlledForm</h1>
      <ul>
        {
          todos.map(todo => {
            return <li> {todo.name}</li>
          })
        }
      </ul>
      <input type="text" name="name" value={todo.name}  onChange={(e) => handleChange(e)}/>
      <input type="checkbox" name="checked" value={todo.checked} onChange={(e) => handleChange(e)}/>
      <button onClick={() => addToTodos()}>Add new Task</button>
      <button onClick={() => showTodos()}>show Task</button>
    </div>
  );
}

export default ControlledForm;
