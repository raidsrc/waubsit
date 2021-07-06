import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import './App.css'

function App() {
  const [page, setPage] = useState("HomePage")
  
  function PickThePage(props) {

    if (page === "HomePage") {
      return (
        <HomePage />
      )
    } else if (page === "AboutPage") {
      return (
        <AboutPage />
      )
    } else if (page === "ResumePage") {
      console.log("mounting ResumePage")
      return (
        <ResumePage />
      )
    } else if (page === "FindMePage") {
      return (
        <FindMePage />
      )
    }
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      <PickThePage />
    </div>
  )
}

export default App
