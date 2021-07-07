import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { useTransition } from '@react-spring/core'
import { Navbar } from './ReusableComponents'
import './App.css'

// how do i get the fucking pages to animate between one another? i need to have a bottom layer div that stays there forever. on the App component. i need to have the pages (homepage about page etc.) switch out while sitting on top of that div that stays forever. i need to control those animations from somewhere. i don't fucking know. i'll start by having homepage come and go.

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
