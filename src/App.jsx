import React, { useState, useEffect } from 'react'
import { Navbar } from './ReusableComponents'
import { Redirect, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import ProjectsPage from './Pages/ProjectsPage'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []) // since the dependencies array is empty, this effect will only be activated and cleaned up once. after this component mounts aka after app begins and then when component unmounts aka when app is closed. 

  const routes = [
    { path: '/home', name: 'Home', Component: HomePage },
    { path: '/about', name: 'About', Component: AboutPage },
    { path: '/contact', name: 'Contact', Component: ContactPage },
    { path: '/projects', name: 'Projects', Component: ProjectsPage },
  ]

  return (
    <div className="whole-app">
      <Navbar />
      <div className="content">
        {routes.map(({ path, Component }) => (
          <Route exact path={path} key={path}>
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
