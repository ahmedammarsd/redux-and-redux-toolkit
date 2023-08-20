import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {

  return (
   <div>
    <div>
      <Input />
      <TodoList />
    </div>
   </div>
  )
}

export default App
