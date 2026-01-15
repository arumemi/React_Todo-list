import { useState, useMemo } from 'react'
import Tittle from './components/Title/Tittle.jsx'
import TodoInput from './components/TodoInput/TodoInput.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import TodoFilter from './components/TodoFilter/TodoFilter.jsx'
import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Filter todos based on current filter
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'pending':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  // Calculate stats
  const stats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length
  }), [todos])

  return (
    <div className={styles.app}>
      <Tittle />
      <TodoInput onAddTodo={addTodo} />
      <TodoFilter 
        filter={filter} 
        onFilterChange={setFilter}
        stats={stats}
      />
      <TodoList 
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
