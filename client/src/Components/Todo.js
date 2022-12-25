import React from 'react'

export default function Todo({todo, toggleTodo}) {

  function handleChange(e) {
    toggleTodo(todo.id)
  }

  return (
    <div className='todo-item'>
      <label className='todo-text'>
        <input type="checkbox" checked={todo.complete} onChange={handleChange}/>
        <span> {todo.name}</span>
      </label>
    </div>
  )
}
