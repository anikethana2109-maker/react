import React from 'react'
import { Bookmark } from 'lucide-react'
import './App.css'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AMZN.svg" alt="Amazon" />
          <button className="save-btn">
            Save <Bookmark size={16} />
          </button>
        </div>
        <div className="center">
          <h1>Amazon</h1>
          <p>Global e-commerce leader.</p>
        </div>
      </div>
    </div>
  )
}

export default App