import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"


function Navbar(props) {
   let setPage = props.setPage
   return (
      <nav>
         <div className="bg-gray-800 shadow-lg flex fixed justify-center w-full">
            <div className="flex flex-row text-white top-0 w-full justify-between py-2 px-4 items-center max-w-yuge tiny-screen:py-3 tiny-screen:px-5 sm:px-10 md:px-16 md:text-lg md:h-20 lg:h-20">
               <ClickableRaidsrcIcon to="/"/>
               <div className="flex flex-row justify-around space-x-4 sm:space-x-7 md:space-x-9 lg:space-x-12">
                  <NavButton className="w-auto text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl" to="/about">
                     About
                  </NavButton>
                  <NavButton className="w-auto text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl" to="/resume">
                     Résumé
                  </NavButton>
                  <NavButton className="w-auto text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl" to="/contact">
                     Find Me
                  </NavButton>
               </div>
            </div>
         </div>
      </nav>
   )
}

function NavButton(props) {
   return (
      <Link className={props.className} to={props.to}>{props.children}</Link>
   )
}

function ClickableRaidsrcIcon(props) {
   return (
      <div className="w-12">
         <Link to={props.to}>
            <img src="src\raid handwritten alone thick very white no padding.png"></img>
         </Link>
      </div>
   )
}

function CenteredFullPageFlexContainer(props) {
   
   return (
      <div className="flex justify-center w-full"
      //style={animationProps}
      >
         <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-10">
            {props.children}
            <div className="tiny-animation-test-div text-5xl text-center mt-10">
               sup
            </div>
         </div>
      </div>
   )
}

export { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer }

