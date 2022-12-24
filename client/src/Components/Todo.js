import React from 'react'

export default function Todo({todoKey ,todo}) {

  return (
    <div className='todo-item'>
      <label className='todo-text'>
        <input type="checkbox" checked={todo.complete}/>
        <span>{todo.name}</span>
      </label>
    </div>
  )
}
