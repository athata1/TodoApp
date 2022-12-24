import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './Components/TodoList'


function App() {

  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}, {id: 2, name: 'Todo 2', complete: false}]);

  const todoNameRef = useRef()

  function handleAddTodo(e) {

    const name = todoNameRef.current.value
      if (name === '') return

      setTodos(prevTodos => {
        return [...prevTodos, {id: 1, name: name, complete: false}]
      })

      todoNameRef.current.value = null;
  }

  function handleClear(e) {
    
  }

  return (
    <div id="content">
      <div className="todo">
        <div className="title">
          Todo List
        </div>
        <div className='form'>
          <input ref={todoNameRef} type="text"/>
          <span className='buttons'>
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleClear}>Clear Completed</button>
          </span>
        </div>
        <div className='task-count'>0 Tasks Left</div>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
