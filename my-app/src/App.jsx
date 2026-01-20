import { useTodoContext } from './context/TodoContext'
import Title from './components/Title/Title.jsx'
import TodoInput from './components/TodoInput/TodoInput.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import TodoFilter from './components/TodoFilter/TodoFilter.jsx'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  )
}

export default App
