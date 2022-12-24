import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => {
        return<Todo todoKey={todo.id} todo={todo}/>
      })}
    </div>
  )
}
