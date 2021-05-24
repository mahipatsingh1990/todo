import logo from './logo.svg';
import './App.css';
import React, {useRef, useState, useEffect } from 'react';

function UncontrolledForm() {
  const inputRef = React.useRef({});
  const [todos, setTodos] = useState([{
    'name':'todo1',
    'checked': true
  },{
    'name':'todo2',
    'checked': false
  }])
 
  
  useEffect(() => {
    console.log("todo added")
  }, [todos]) 


  const addToTodos = () => {
    var  todo = {
      name: inputRef.current['name'].value,
      checked: inputRef.current['checked'].checked
    }
    setTodos([...todos, todo]);
  }
  const showTodos = () => {
    console.log("todos", todos);
    console.log("todo", todo);
    
  }
  return (
    <div className="App">
      <h1> Todo UncontrolledForm</h1>
      <ul>
        {
          todos.map(todo => {
            return <li> {todo.name}</li>
          })
        }
      </ul>
      <input type="text" name="name" ref={el => inputRef.current['name'] = el} placeholder='name' />
      <input type="checkbox"  name="checked" ref={el => inputRef.current['checked'] = el} />
     
      <button onClick={() => addToTodos()}>Add new Task</button>
      <button onClick={() => showTodos()}>show Task</button>
    </div>
  );
}

export default UncontrolledForm;
