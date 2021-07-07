import React, { useState } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { useTransition } from '@react-spring/core'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

function App() {
  const [page, setPage] = useState("HomePage")
  const [showMount, setShowMount] = useState(true)
  const [arrayOfAnimatedShit, setArrayOfAnimatedShit] = useState([])

  return (
    <Router>
      <div className="whole-app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage page={page}/>
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/resume">
              <ResumePage />
            </Route>
            <Route exact path="/contact">
              <FindMePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
