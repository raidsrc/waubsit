import React, { useState, useEffect, useContextjj, useContext } from 'react'
import { Navbar } from './ReusableComponents'
import { Redirect, Route, Switch, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'
import LinksPage from './Pages/LinksPage'
import SiteInfoPage from './Pages/SiteInfoPage.jsx'

function App() {
  let location = useLocation()
  const [alerted, setAlerted] = useState(false)
   if (!alerted) {
      setTimeout(() => alert("i'm not done constructing the website yet. please excuse the presence of any wack shit"), 420)
      setAlerted(true)
   }

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}> 
          {
            //might need to make this timeout prop above more accurate to the lengths of the css transitions in animationStyles.css
          }
            <Switch location={location}>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/resume">
                <ResumePage />
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
              <Route exact path="/links">
                <LinksPage />
              </Route>
              <Route exact path="/siteinfo">
                <SiteInfoPage />
              </Route>
              <Redirect exact from="/" to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
