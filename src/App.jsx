import React, { useState, useEffect, useContextjj, useContext } from 'react'
import { Navbar, scrollToTop } from './ReusableComponents'
import { Redirect, Route, Switch, useLocation, useHistory } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import LandingPage from "./Pages/LandingPage"
import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'
import LinksPage from './Pages/LinksPage'
import SiteInfoPage from './Pages/SiteInfoPage.jsx'
import SupPage from './Pages/SupPage'

function App() {
  let location = useLocation()
  let history = useHistory()
  const [alerted, setAlerted] = useState(false)
  if (!alerted) {
    setTimeout(() => alert("i'm not done constructing the website yet. please excuse the presence of any wack shit"), 420)
    setAlerted(true)
  }

  useEffect(() => {
    return () => {
      if (history.action === "POP") { // if i press the fwd or back buttons... or even do a hot reload......
        scrollToTop()
      }
    }
  })

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
              <Route path="/landing">
                <LandingPage />
              </Route>
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
              <Route exact path="/sup">
                <SupPage />
              </Route>
              <Redirect exact from="/" to="/landing" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
