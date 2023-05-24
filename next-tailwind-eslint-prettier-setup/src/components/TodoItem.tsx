'use client'

import React from 'react'
type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li className="flex gap-4 items-center">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.complete}
        className="curor-pointer peer"
        onChange={(e) => props.toggleTodo(props.id, e.target.checked)}
      />
      <label
        className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400"
        htmlFor={props.id}
      >
        Name: {props.title}{' '}
        <div>Completed: {props.complete ? 'yes' : 'no'}</div>
      </label>
    </li>
  )
}

export default TodoItem
