import React from 'react'
import styles from "./App.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({Todos, DeleteTodo, toggleTodoChecked}) => {
    return (
        <ul className={styles.ul}>
            {Todos.map(todo => <TodoItem key={todo.id} {...todo} DeleteTodo={DeleteTodo} toggleTodoChecked={toggleTodoChecked}/>)}
        </ul>
    )
}

export default TodoList