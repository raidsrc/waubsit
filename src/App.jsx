import React, { useState, useContextjj, useContext } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { __RouterContext } from 'react-router'
import './App.css'

function App() {

  //const {location} = useContext(__RouterContext)
  let location = useLocation()
  console.log(location)

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
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
