import React, { useState, useContextjj, useContext } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './App.css'
import "./animationStyles.css"

function App() {

  let location = useLocation()
  console.log(location)

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        <div className="h-20"></div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={10}>

            <Switch location={location}>
              <Route exact path="/">
                <HomePage />
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
