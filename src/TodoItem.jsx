import React from 'react'
import TodoList from "./TodoList";

const TodoItem = ({Todos, func}) => {
    return (
        <ul style={{listStyle:"none"}}>
            {Todos.map((todo) => (
                <TodoList key={todo.id} todo={todo} func={func}/>
            ))}
        </ul>
    )
}

export default TodoItem