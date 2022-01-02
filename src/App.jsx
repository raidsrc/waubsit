import React, { useState, useEffect, useContextjj, useContext } from 'react'
import { Navbar, scrollToTop } from './ReusableComponents'
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
  const routes = [
    { path: '/home', name: 'Home', Component: HomePage },
    { path: '/about', name: 'About', Component: AboutPage },
    { path: '/resume', name: 'Resume', Component: ResumePage },
    { path: '/contact', name: 'Contact', Component: ContactPage },
    { path: '/links', name: 'More Stuff', Component: LinksPage },
    { path: '/siteinfo', name: 'Site Info', Component: SiteInfoPage },
  ]

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        <Route exact path="/home">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <HomePage />
            </CSSTransition>
          )}
        </Route>

        <Route exact path="/about">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <AboutPage />
            </CSSTransition>
          )}
        </Route>

        <Route exact path="/resume">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <ResumePage />
            </CSSTransition>
          )}
        </Route>

        <Route exact path="/contact">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <ContactPage />
            </CSSTransition>
          )}
        </Route>

        <Route exact path="/links">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <LinksPage />
            </CSSTransition>
          )}
        </Route>

        <Route exact path="/siteinfo">
          {({ match }) => (
            <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={1000}>
              <SiteInfoPage />
            </CSSTransition>
          )}
        </Route>
        <Redirect exact from="/" to="/home" />
      </div>
    </div>
  )
}

export default App
