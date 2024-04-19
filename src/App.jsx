import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Chatscreen from './components/Chatscreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar/>
      <Chatscreen/>
    </>
  )
}

export default App
