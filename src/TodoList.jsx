import React from 'react'
import styles from './App.module.css'

const TodoList = ({todo, func}) => {
    return (
        <li key={todo.id} className={styles.li}>
            <input
                type={"checkbox"}
                checked={todo.completed}
                onChange={() => func.ToggleChecked(todo.id)}
                className={styles.check}
            />
            <span>{todo.text}</span>
            <span className={styles.delete} onClick={() => func.DeleteTodo(todo.id)}>&times;</span>
        </li>
    )
}

export default TodoList