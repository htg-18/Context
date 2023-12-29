import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-screen w-screen'>
    <div className='mih-w-full flex flex-col justify-center items-center'>
      <AddTodo/>
      <Todo/>
      </div>
    </div>
    </>
  )
}

export default App
