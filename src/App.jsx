import React, { useState, useContextjj, useContext } from 'react'
import { HomePage, AboutPage, ResumePage, FindMePage, LinksPage, SiteInfoPage } from './Pages'
import { Navbar } from './ReusableComponents'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./animationStyles.css"
import "./otherStyles.css"

function App() {
  let location = useLocation()
  const [alerted, setAlerted] = useState(false)
  //  if (!alerted) {
  //     setTimeout(() => alert("i'm not done constructing the website yet. please excuse the presence of any wack shit"), 420)
  //     setAlerted(true)
  //  }

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
              <Route exact path="/links">
                <LinksPage />
              </Route>
              <Route exact path="/siteinfo">
                <SiteInfoPage />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
