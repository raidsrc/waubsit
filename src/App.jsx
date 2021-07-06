import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import './App.css'

function PickThePage(props) {
  let showMount = props.showMount
  let setShowMount = props.setShowMount
  let page = props.page

  if (page === "HomePage") {
    return (
      <HomePage />
    )
  } else if (page === "AboutPage") {
    return (
      <AboutPage />
    )
  } else if (page === "ResumePage") {
    return (
      <ResumePage page={page} showMount={showMount} setShowMount={setShowMount} />
    )
  } else if (page === "FindMePage") {
    return (
      <FindMePage />
    )
  }
}

function App() {
  const [page, setPage] = useState("HomePage")
  const [showMount, setShowMount] = useState(true)

  return (
    <div>
      <Navbar setPage={setPage} setShowMount={setShowMount} />
      <PickThePage page={page} showMount={showMount} setShowMount={setShowMount} />
    </div>
  )
}

export default App
