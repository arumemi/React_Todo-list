import { memo } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
  return (
    <div className={`${styles.item} ${todo.completed ? styles.completed : ''}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.text}>{todo.text}</span>
      </label>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </div>
  )
})

TodoItem.displayName = 'TodoItem'

export default TodoItem
