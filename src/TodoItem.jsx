import React from 'react'
import styles from "./App.module.css";

const TodoItem = ({id, Text, completed, DeleteTodo, toggleTodoChecked}) => {
    return (
        <li key={id} className={styles.li}>
            <input
                type={"checkbox"}
                checked={completed}
                onChange={() => toggleTodoChecked(id)}
                className={styles.check}
            />
            <span>{Text}</span>
            <span className={styles.delete} onClick={() => DeleteTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem