import { memo } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { useInput } from '../../hooks/useInput'
import styles from './TodoInput.module.css'

const TodoInput = memo(() => {
  const task = useInput('')
  const { addTodo } = useTodoContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.value.trim()) {
      addTodo(task.value)
      task.reset()
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicionar nova tarefa..."
        value={task.value}
        onChange={task.onChange}
      />
      <button type="submit" className={styles.button}>
        Adicionar Tarefa
      </button>
    </form>
  )
})

TodoInput.displayName = 'TodoInput'

export default TodoInput