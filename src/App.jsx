import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Inside App</h1>
      <Home></Home>
      <Counter/>
    </div>
  )
}

export default App
