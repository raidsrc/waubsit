import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { useTransition } from '@react-spring/core'
import { Navbar } from './ReusableComponents'
import './App.css'

function PickThePage(props) {
  let showMount = props.showMount
  let setShowMount = props.setShowMount
  let page = props.page
  let setPage=props.setPage

  if (page === "HomePage") {
    return (
      <HomePage page={page} />
    )
  } else if (page === "AboutPage") {
    return (
      <AboutPage />
    )
  } else if (page === "ResumePage") {
    return (
      <ResumePage page={page} setShowPage={setPage} showMount={showMount} setShowMount={setShowMount} />
    )
  } else if (page === "FindMePage") {
    return (
      <FindMePage />
    )
  } else {
    return null
  }
}

function App() {
  const [page, setPage] = useState("HomePage")
  const [showMount, setShowMount] = useState(true)
  const [arrayOfAnimatedShit, setArrayOfAnimatedShit] = useState([])

  return (
    <div className="everything-dawg">
      <Navbar setPage={setPage} />
      <div className="page-contents-container">
        <PickThePage page={page} setPage={setPage} showMount={showMount} setShowMount={setShowMount} />
      </div>
    </div>
  )
}

export default App
