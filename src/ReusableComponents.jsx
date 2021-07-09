import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./index.css"
import raidsrcLogoUrl from "./static/raid handwritten alone thick very white no padding.png"

function Navbar(props) {
   return (
      <nav className="bg-gray-800 shadow-lg flex fixed justify-center w-full z-10">
         <div className="flex flex-row text-white top-0 w-full justify-between py-2 px-4 items-center max-w-yuge tiny-screen:py-3 tiny-screen:px-5 sm:px-10 md:px-16 md:text-lg md:h-20 lg:h-20">
            <ClickableRaidsrcIcon to="/" />
            <div className="flex flex-row justify-around space-x-4 sm:space-x-7 md:space-x-9 lg:space-x-12">
               <NavButton className="w-auto hover:text-gray-200 active:text-gray-600 text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl"
                  to="/about" >
                  About
               </NavButton>
               <NavButton className="w-auto hover:text-gray-200 active:text-gray-600 text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl"
                  to="/resume">
                  Résumé
               </NavButton>
               <NavButton className="w-auto hover:text-gray-200 active:text-gray-600 text-sm tiny-screen:text-base sm:text-lg md:text-xl xl:text-2xl"
                  to="/contact">
                  Find Me
               </NavButton>
            </div>
         </div>
      </nav>
   )
}

function NavButton(props) {
   let location = useLocation()
   let theClass = props.className
   if (location.pathname === props.to) {
      theClass += " disabled-link"
   }
   return (
      <Link className={theClass} to={props.to} onClick={smoothScrollToTop}>{props.children}</Link>
   )
}

function ClickableRaidsrcIcon(props) {
   let location = useLocation()
   let theClass = props.className
   if (location.pathname === props.to) {
      theClass += " disabled-link"
   }
   return (
      <div className="w-12">
         <Link className={theClass} onClick={smoothScrollToTop} to={props.to}>
            <img src={raidsrcLogoUrl} className="filter hover:brightness-75 active:brightness-50" ></img>
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
         </div>
      </div>
   )
}

function SiteConstructionBanner(props) {
   return (
      <div className="mb-6 mt-24">
         <span className="text-5xl bg-red-600">
            site construction in progress BE PATIENT
         </span>
      </div>
   )
}

function smoothScrollToTop() {
   window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
   })
}

export { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, SiteConstructionBanner }

