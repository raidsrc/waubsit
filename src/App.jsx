import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import './App.css'

function App() {

  const [page, setPage] = useState("HomePage")
  const [showMount, setShowMount] = useState(true)
  function doSetShowMount (value) {
    setShowMount(value)
  }

  function PickThePage(props) {
    let showMount = props.showMount 
    let doSetShowMount = props.doSetShowMount 
    let page=props.page

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
        <ResumePage page={page} showMount={showMount} doSetShowMount={doSetShowMount} />
      )
    } else if (page === "FindMePage") {
      return (
        <FindMePage />
      )
    }
  }
  
  return (
    <div>
      <Navbar setPage={setPage} setShowMount={setShowMount} />
      <PickThePage page={page} showMount={showMount} doSetShowMount={doSetShowMount}/>
    </div>
  )
}

export default App
