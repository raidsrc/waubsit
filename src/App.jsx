import React, { useState, useContextjj, useContext } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage } from './Pages'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './App.css'
import "./animationStyles.css"
import "./otherStyles.css"

function App() {

  let location = useLocation()
  //console.log(location)

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={600}> 
          {
            //might need to make this timeout prop above more accurate to the lengths of the css transitions in animationStyles.css
          }
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
