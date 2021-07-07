import React, { useState, useContextjj, useContext } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { useTransition, animated } from 'react-spring'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { __RouterContext } from 'react-router'
import './App.css'

function App() {
  const [page, setPage] = useState("HomePage")
  const [showMount, setShowMount] = useState(true)
  const [arrayOfAnimatedShit, setArrayOfAnimatedShit] = useState([])

  //const {location} = useContext(__RouterContext)
  let location = useLocation()
  console.log(location)
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    keys: loc => loc.pathname,
  })

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        {transitions(
          ({item, props, key}) => { item &&
          <animated.div key={key} style={props}>
            
          </animated.div>
        })}
        <Switch>
          <Route exact path="/">
            <HomePage page={page} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage page={page} showMount={showMount} setShowMount={setShowMount} />
          </Route>
          <Route exact path="/contact">
            <FindMePage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
