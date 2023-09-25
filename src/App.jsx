import React, {useState} from 'react'
import styles from './App.module.css'
import TodoList from "./TodoList";

const App = () => {
    const [Text, setText] = useState(null)
    const [Todos, setTodos] = useState([])
    const AddTodo = () => {
        if (!Text) {}
        else {
            setTodos([
                ...Todos,
                {
                    id: new Date().toISOString(),
                    Text,
                    completed: false
                }
            ])
            setText(null)
        }
    }
    const DeleteTodo = (todoId) => {
        setTodos(Todos.filter(todo => todo.id !== todoId))
    }
    const toggleTodoChecked = (todoId) => {
        setTodos(Todos.map(todo => {
            if (todo.id !== todoId) return null
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }
        return (
            <div className={styles.App}>
                <label>
                    <input onChange={event => setText(event.target.value)}/>
                    <button onClick={AddTodo}>Add Todo</button>
                </label>
                <TodoList Todos={Todos} DeleteTodo={DeleteTodo} toggleTodoChecked={toggleTodoChecked}/>
            </div>
        )
}
export default App
