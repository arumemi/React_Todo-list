import { memo, useMemo } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import styles from './TodoList.module.css'

const TodoList = memo(() => {
  const { filteredTodos, toggleTodo, deleteTodo } = useTodoContext()

  // Memoize the todo items to avoid re-rendering all items when only one changes
  const todoItems = useMemo(() => {
    return filteredTodos.map(todo => (
      <li key={todo.id} className={styles.item}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className={styles.checkbox}
        />
        <span className={todo.completed ? styles.completed : ''}>
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)} className={styles.delete}>
          Deletar
        </button>
      </li>
    ))
  }, [filteredTodos, toggleTodo, deleteTodo])

  if (filteredTodos.length === 0) {
    return <p className={styles.empty}>Nenhuma tarefa encontrada</p>
  }

  return (
    <ul className={styles.list}>
      {todoItems}
    </ul>
  )
})

TodoList.displayName = 'TodoList'

export default TodoList 
 

