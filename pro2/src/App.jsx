import { useState } from 'react'
import {Bookmark} from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src = "https://stockunlock.com/stockDetails/AMZN/general" alt="amzn logo" />
          <button className="bookmark"> save<Bookmark /></button>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default App
