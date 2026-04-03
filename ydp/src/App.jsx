import { useState, useEffect } from 'react'
import './App.css'
import catLogo from './assets/cat.svg'
import quotesData from './quotes.json'

function App() {
  const [quote, setQuote] = useState("")

  // Цитата дня
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    setQuote(quotesData[randomIndex])
  }, [])

  return (
    <div className="app-container">
      {/* Блок с котиком */}
      <header className="header">
        <img src={catLogo} className="cat-mascot" alt="YDP Cat" />
        <h1>Your Daily Plan</h1>
      </header>

      {/* Блок с цитатой */}
      <div className="quote-box">
        <p>"{quote}"</p>
      </div>

      {/* Планы и задачи */}
      <main className="content">
        <p>Твой план на сегодня скоро появится здесь...</p>
      </main>
    </div>
  )
}

export default App