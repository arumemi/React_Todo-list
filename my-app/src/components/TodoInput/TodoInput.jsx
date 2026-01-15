import { useState } from 'react'
import styles from './TodoInput.module.css'

const TodoInput = ({ onAddTodo }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      onAddTodo(task)
      setTask('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Adicionar Tarefa
      </button>
    </form>
  )
}

export default TodoInput
