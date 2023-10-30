import React from 'react'
import styles from './App.module.css'

const InputList = ({Text, setText, AddTodo}) => {
    return (
        <label>
            <input className={styles.Input}
                   placeholder='New Todo'
                   onChange={event => setText(event.target.value)}
                   value={Text}
            />
            <button className={styles.btn} onClick={AddTodo}>Create</button>
        </label>
    )
}

export default InputList