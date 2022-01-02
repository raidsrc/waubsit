import React, { useState, useEffect, useContextjj, useContext } from 'react'
import { Navbar } from './ReusableComponents'
import { Redirect, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'
import LinksPage from './Pages/LinksPage'
import SiteInfoPage from './Pages/SiteInfoPage.jsx'

function App() {
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
        {routes.map(({ path, name, Component }) => (
          <Route exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} classNames="fade" unmountOnExit timeout={500}>
                {/* the value of timeout just needs to be longer than the amount of time it takes for the enter and exit animations to finish. else they'll look choppy. timeout is how long a component stays in the 'entering' state before it switches over to 'entered' */}
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
