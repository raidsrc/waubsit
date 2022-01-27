import React, { useState, useEffect } from 'react'
import { Navbar } from './ReusableComponents'
import { Redirect, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'
import LinksPage from './Pages/LinksPage'
import SiteInfoPage from './Pages/SiteInfoPage.jsx'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
    // setTimeout(() => alert("Website construction in progress. Pardon my dust.", 420))
  }, []) // since the dependencies array is empty, this effect will only be activated and cleaned up once. after this component mounts aka after app begins and then when component unmounts aka when app is closed. 

  const routes = [
    { path: '/home', name: 'Home', Component: HomePage },
    { path: '/about', name: 'About', Component: AboutPage },
    { path: '/contact', name: 'Contact', Component: ContactPage },
    { path: '/links', name: 'More Stuff', Component: LinksPage },
    { path: '/siteinfo', name: 'Site Info', Component: SiteInfoPage },
  ]

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        {routes.map(({ path, Component }) => (
          <Route exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} classNames="fade" unmountOnExit onExited={() => {
                scroll(0, 0)
              }} timeout={200}>
                {/* the value of timeout just needs to be longer than the amount of time it takes for the exit animation to finish. else they'll look choppy. timeout is how long a component stays in the 'entering' state before it switches over to 'entered' */}
                <div className='fade'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Redirect exact from="/" to="/home" />
      </div>
    </div>
  )
}

export default App
