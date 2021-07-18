import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./index.css"
import raidsrcLogoUrl from "./static/raid handwritten alone thick very white no padding.png"
import raidsrcLogoSvgUrl from "./static/raid_logo_thick_white.svg"

function Navbar(props) {
   //const [hamburgerVisible, setHamburgerVisible] = useState(false)
   const [showRightSideMenu, setShowRightSideMenu] = useState(false)
   return (
      <nav className="bg-gray-800 shadow-xl flex fixed justify-center w-full z-10">
         <div className="flex flex-row text-white top-0 w-full justify-between py-3 px-5 items-center max-w-yuge tiny-screen:px-7 sm:px-10 md:px-16 md:text-lg md:h-20 lg:h-20">
            <ClickableRaidsrcIcon to="/" setShowRightSideMenu={setShowRightSideMenu} />
            <HamburgerMenu className="smmd:hidden" showRightSideMenu={showRightSideMenu} setShowRightSideMenu={setShowRightSideMenu} />
            {showRightSideMenu ? <RightSideMenuThatAppearsWhenYouClickTheHamburger setShowRightSideMenu={setShowRightSideMenu} /> : ""}
            <TheNavButtonsAllTogether setShowRightSideMenu={setShowRightSideMenu} className="hidden flex-row justify-around space-x-4 smmd:flex tiny-screen:visible smmd:space-x-7 md:space-x-9 lg:space-x-12" />
         </div>
      </nav>
   )
}

function NavButton(props) {
   let setShowRightSideMenu = props.setShowRightSideMenu
   let location = useLocation()
   let theClass = props.className
   if (location.pathname === props.to) {
      theClass += " disabled-link"
   }
   function wheneverNavButtonClicked() {
      smoothScrollToTop()
      setShowRightSideMenu(false)
   }
   return (
      <Link className={theClass} to={props.to} onClick={() => wheneverNavButtonClicked()}>{props.children}</Link>
   )
}

function ClickableRaidsrcIcon(props) {
   let setShowRightSideMenu = props.setShowRightSideMenu
   let location = useLocation()
   let theClass = props.className
   if (location.pathname === props.to) {
      theClass += " disabled-link"
   }
   return (
      <div className="w-12">
         <Link className={theClass} onClick={() => { smoothScrollToTop(); setShowRightSideMenu(false) }} to={props.to}>
            <img src={raidsrcLogoSvgUrl} className="filter hover:brightness-75 active:brightness-50" ></img>
         </Link>
      </div>
   )
}

function RightSideMenuThatAppearsWhenYouClickTheHamburger(props) {
   let setShowRightSideMenu = props.setShowRightSideMenu
   return (
      <div className="absolute bg-gray-700 smmd:hidden right-4 top-20 w-5/12 h-60 flex items-center justify-center">
         <TheNavButtonsAllTogether className="flex flex-col space-y-3 text-center" setShowRightSideMenu={setShowRightSideMenu} />
      </div>
   )
}

function TheNavButtonsAllTogether(props) {
   return (
      <div className={props.className}>
         <NavButton className="navbutton-rightsidemenu-style smmd:navbutton-style"
            to="/about" setShowRightSideMenu={props.setShowRightSideMenu}>
            About
         </NavButton>
         <NavButton className="navbutton-rightsidemenu-style smmd:navbutton-style"
            to="/resume" setShowRightSideMenu={props.setShowRightSideMenu}>
            Résumé
         </NavButton>
         <NavButton className="navbutton-rightsidemenu-style smmd:navbutton-style"
            to="/contact" setShowRightSideMenu={props.setShowRightSideMenu}>
            Find Me
         </NavButton>
         <NavButton className="navbutton-rightsidemenu-style smmd:navbutton-style"
            to="/links" setShowRightSideMenu={props.setShowRightSideMenu}>
            Links
         </NavButton>
         <NavButton className="navbutton-rightsidemenu-style smmd:navbutton-style"
            to="/siteinfo" setShowRightSideMenu={props.setShowRightSideMenu}>
            Site Info
         </NavButton>
      </div>
   )
}

function HamburgerMenu(props) {
   {
      // TODO: put this somewhere <a href="https://icons8.com/icon/83195/menu">Menu icon by Icons8</a> in the site info section of the site to give them credit for the hamburger icon
      // ALSO TODO: animate the swingin out of the hamburger menu and swingin back in from the right side using react-spring 
   }
   let showRightSideMenu = props.showRightSideMenu
   let setShowRightSideMenu = props.setShowRightSideMenu
   return (
      <div className={props.className}>
         <button onClick={() => setShowRightSideMenu(!showRightSideMenu)}>
            <div className="w-6"><img src="https://img.icons8.com/material-rounded/192/ffffff/menu--v1.png" /></div>
         </button>
      </div>
   )
}

function CenteredFullPageFlexContainer(props) {
   return (
      <div className="flex justify-center w-full"
      //style={animationProps}
      >
         <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-14 py-7 tiny-screen:mt-16 md:mt-20 homepage-centeredfullpageflexcontainer-style">
            {props.children}
         </div>
      </div>
   )
}

function HomepageCenteredFullPageFlexContainer(props) {
   return (
      <div className="flex justify-center w-full">
         <div className="w-10/12 max-w-screen-xl flex flex-col justify-center mt-2 py-0 md:w-11/12 tiny-screen:mt-3 md:mt-0 lg:mt-10">
            {props.children}
         </div>
      </div>
   )
}

function SiteConstructionBanner(props) {
   return (
      <div>
         { /*
      <div className="mb-6 mt-24">
      <span className="text-5xl bg-red-600">
      site construction in progress BE PATIENT
      </span>
      </div>
      */
         }
      </div>
   )
}

function smoothScrollToTop() {
   // window.scroll({ 
   //    top: 0, 
   //    left: 0, 
   //    //behavior: "smooth",
   // }) // the scrolling issue goes away when the behavior property is removed or set to auto
   // what if i try scrollBy instead of scroll? and set the amount to some massive number that will always be greater than the height of the page?
   setTimeout(() => {
      window.scrollBy({
         top: -10000,
         left: 0,
         behavior: "auto",
      })
   }, 210)
   // IT LOOKS LIKE IT FUCKING WORKS!!!!!!!!!!!!!!!!!!!!!
   // just fucking kidding. tested again and it doesn't work. god fucking dammit. fuck. at least i'm certain it only appears in firefox and not in chrome
   // i found a workaround. i set the scroll to be sharp, not smooth, and time the scroll to occur right when the pages are invisible so the transition looks totally smooth. let's fucking go. this is the path forward. this is the way. 
}

export { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, HomepageCenteredFullPageFlexContainer, SiteConstructionBanner }

