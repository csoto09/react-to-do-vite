import { useState, SyntheticEvent, ChangeEvent } from 'react'
import {ToDo} from './components/ToDo'
import './App.css'

const initialTodos = [
  { description: 'Walk the cat', isCompleted: true },
  { description: 'Throw the dishes away', isCompleted: false },
  { description: 'Buy new dishes', isCompleted: false }
]



function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [newTodoDescription, setNewTodoDescription] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoDescription(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (!newTodoDescription) return
    const newTodo = { description: newTodoDescription, isCompleted: false };
    setNewTodoDescription('')
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (idx: number): void => {
    const todosCopy = [...todos]
    const todo = todosCopy[idx];
    todo.isCompleted = todo.isCompleted ? false : true;
    setTodos(todosCopy)
  }

  return (
    <div className="App">
      <ul>
        {todos.map((todo, index) =>
          <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={() => toggleComplete(index)} />
        )}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={newTodoDescription} onChange={(e) => handleChange(e)} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
