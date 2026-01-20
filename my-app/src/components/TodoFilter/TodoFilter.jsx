import { memo } from 'react'
import { useTodoContext } from '../../context/TodoContext'
import styles from './TodoFilter.module.css'

const TodoFilter = memo(() => {
  const { filter, setFilter, stats } = useTodoContext()

  return (
    <div className={styles.filter}>
      <div className={styles.stats}>
        <span>Total: {stats.total}</span>
        <span>Concluídas: {stats.completed}</span>
        <span>Pendentes: {stats.pending}</span>
      </div>
      <div className={styles.buttons}>
        <button
          className={filter === 'all' ? styles.active : ''}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button
          className={filter === 'pending' ? styles.active : ''}
          onClick={() => setFilter('pending')}
        >
          Pendentes
        </button>
        <button
          className={filter === 'completed' ? styles.active : ''}
          onClick={() => setFilter('completed')}
        >
          Concluídas
        </button>
      </div>
    </div>
  )
})

TodoFilter.displayName = 'TodoFilter'

export default TodoFilter