import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './Components/TodoList'
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef()

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos);
    if (storedTodos)
      setTodos(storedTodos)
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])



  function handleAddTodo(e) {

    const name = todoNameRef.current.value
      if (name === '') return
      if (e.key && e.key !== "Enter") return
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuid(), name: name, complete: false}]
      })

      todoNameRef.current.value = null;
  }

  function handleClear(e) {
    const newTodos = [...todos.filter(todo => !todo.complete)]
    setTodos(newTodos);
  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const modifiedItem = newTodos.find(todo => todo.id === id)
    modifiedItem.complete = !modifiedItem.complete
    setTodos(newTodos)
  }

  return (
    <div id="content">
      <div className="todo">
        <div className="title">
          Todo List
        </div>
        <div className='form'>
          <input onKeyUp={handleAddTodo} ref={todoNameRef} type="text"/>
          <span className='buttons'>
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleClear}>Clear Completed</button>
          </span>
        </div>
        <div className='task-count'>{todos.filter(todo => !todo.complete).length} Tasks Left</div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
    </div>
  );
}

export default App;
