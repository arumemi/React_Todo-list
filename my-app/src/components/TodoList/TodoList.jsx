import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhuma tarefa para exibir</p>
      </div>
    )
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
