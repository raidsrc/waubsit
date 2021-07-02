import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import './App.css'

function App() {


  const [page, setPage] = useState("HomePage")


  if (page === "HomePage") {
    return (
      <HomePage page={page} setPage={setPage} />
    )
  } else if (page === "AboutPage") {
    return (
      <AboutPage page={page} setPage={setPage} />
    )
  } else if (page === "ResumePage") {
    return (
      <ResumePage page={page} setPage={setPage} />
    )
  } else if (page === "FindMePage") {
    return (
      <FindMePage page={page} setPage={setPage} />
    )
  }
}

export default App
