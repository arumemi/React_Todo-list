import styles from './TodoFilter.module.css'

const TodoFilter = ({ filter, onFilterChange, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <span className={styles.stat}>Total: {stats.total}</span>
        <span className={styles.stat}>Pendentes: {stats.pending}</span>
        <span className={styles.stat}>Concluídas: {stats.completed}</span>
      </div>
      
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Todos
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'pending' ? styles.active : ''}`}
          onClick={() => onFilterChange('pending')}
        >
          Pendentes
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Concluídas
        </button>
      </div>
    </div>
  )
}

export default TodoFilter
