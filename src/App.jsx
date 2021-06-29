import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import './App.css'

function App() {


  const [page, setPage] = useState("HomePage")


  if (page === "HomePage") {
    return (
      <HomePage setPage={setPage} />
    )
  } else if (page === "AboutPage") {
    return (
      <AboutPage setPage={setPage} />
    )
  } else if (page === "ResumePage") {
    return (
      <ResumePage setPage={setPage} />
    )
  } else if (page === "FindMePage") {
    return (
      <FindMePage setPage={setPage} />
    )
  }
}

export default App
