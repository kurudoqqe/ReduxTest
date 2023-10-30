import React, {useState} from 'react'
import styles from './App.module.css'
import TodoItem from "./TodoItem";
import InputList from "./InputList";

const App = () => {
    const [Text, setText] = useState('')
    const [Todos, setTodos] = useState([])
    const AddTodo = () => {
        if (Text === '') return null
        setTodos([
            ...Todos,
            {
                text: Text,
                id: new Date().toISOString(),
                isCompleted: false
            }])
        setText('')
    }
    const DeleteTodo = (id) => {
        setTodos(Todos.filter((todo) => todo.id !== id))
    }
    const ToggleChecked = (id) => {
        setTodos(Todos.map((todo) => {
                if (todo.id !== id) return todo
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }))
    }
    return (
        <div className={styles.App}>
            <InputList Text={Text} setText={setText} AddTodo={AddTodo}/>
            <TodoItem Todos={Todos} func={{DeleteTodo, ToggleChecked}}/>
        </div>
    )
}

export default App