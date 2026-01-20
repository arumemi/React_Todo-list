import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = useState('all')

  // Adicionar uma nova tarefa
  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }, [setTodos])

  // Alternar conclusão da tarefa
  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }, [setTodos])

  // Deletar uma tarefa
  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [setTodos])

  // Filtrar tarefas com base no filtro atual
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

  // Calcular estatísticas
  const stats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length
  }), [todos])

  const value = useMemo(() => ({
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    filteredTodos,
    stats
  }), [todos, filter, addTodo, toggleTodo, deleteTodo, filteredTodos, stats])

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext deve ser usado dentro de TodoProvider')
  }
  return context
}