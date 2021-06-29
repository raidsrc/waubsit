import React, { useState } from 'react'
import { HomePage, AboutPage } from './Pages'
import logo from './logo.svg'
import './App.css'

function App() {
  

  const [page, setPage] = useState("HomePage")
  
  return (
    <AboutPage />
  )
}

export default App
