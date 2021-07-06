import React, { useState, useEffect } from "react"
import { useSpring, useTransition, animated, config } from "react-spring"

function Navbar(props) {
   let setPage = props.setPage
   return (
      <div>
         <div className="bg-gray-800 shadow-lg flex fixed justify-center w-full">
            <div className="flex flex-row text-white top-0 w-full justify-between py-2 px-4 items-center max-w-yuge
            tiny-screen:py-3 tiny-screen:px-5
            sm:px-10
            md:px-16 md:text-lg md:h-20
            lg:h-20">
               <ClickableRaidsrcIcon onClick={() => { setPage("HomePage") }} />
               <div className="flex flex-row justify-around space-x-4 
               sm:space-x-7
               md:space-x-9
               lg:space-x-12">
                  <Button className="w-auto text-sm
                  tiny-screen:text-base
                  sm:text-lg 
                  md:text-xl 
                  xl:text-2xl" onClick={() => { setPage("AboutPage") }}>About</Button>
                  <Button className="w-auto text-sm
                  tiny-screen:text-base
                  sm:text-lg 
                  md:text-xl 
                  xl:text-2xl" onClick={() => { setPage("ResumePage") }}>Résumé</Button>
                  <Button className="w-auto text-sm
                  tiny-screen:text-base
                  sm:text-lg 
                  md:text-xl 
                  xl:text-2xl" onClick={() => { setPage("FindMePage") }}>Find Me</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

function Button(props) {

   return (
      <button className={props.className} onClick={props.onClick}>{props.children}</button>
   )
}

function ClickableRaidsrcIcon(props) {
   return (
      <div className="w-12">
         <button onClick={props.onClick}>
            <img src="src\raid handwritten alone thick very white no padding.png"></img>
         </button>
      </div>
   )
}

function CenteredFullPageFlexContainer(props) {
   const animationProps = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      delay: 10,
      config: {
         duration: 250
      }
      //TODO: ADD TRANSITION FADES INTO AND OUT OF EACH PAGE WHEN YOU CLICK
   })
   //const transition = useTransition()
   return (
      <animated.div className="flex justify-center w-full"
      //style={animationProps}
      >
         <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-24">
            {props.children}
            <div className="tiny-animation-test-div text-5xl text-center mt-10">
               sup
            </div>
         </div>
      </animated.div>
   )
}

function Mount(props) {
   useEffect(() => {
      return function cleanup () {
         set(false)
      }
   })
   const [show, set] = useState(true)
   const transitions = useTransition(show, { // useTransition returns a function. this makes transitions a function. useTransition takes 2 arguments. useTransition takes the state variable which you want to use to control the transition and the styles that govern the transitioning (also called "lifecycles" in the docs). HOW DIDN'T YOU UNDERSTAND THIS LAST NIGHT LOL
      // more about show. show is the react state variable that tells us whether or not the emoji is visible. we feed show to the useTransition hook to tell useTransition that we want to do a smooth transition from something to something WHENEVER SHOW CHANGES.
      from: { opacity: 0, x: -400 },
      enter: { opacity: 1, x: -250 },
      leave: { opacity: 0, x: 100 },
      reverse: show,
      delay: 100,
      config: config.molasses,
      onRest: () => set(!show), // onRest (when the animation finishes and we are resting there not doing anything not transitioning not doing shit[or when the animation is sitting still at the start!!!]) we flip the value of show. if it's true it's now false. if it's false it's now true. 
   })
   return transitions( // transitions is a function!!! it accepts a callback function that takes 4 arguments but you only need to worry about 2 for now: the animated values, aka styles, and the item you want to animate. 
      (styles, item) => item && <animated.div style={styles}>✌️</animated.div> // this line here means: if item exists, show animated.div. if item doesn't exist, show item, aka show something that doesn't exist, aka show nothing. 
      //show ? <animated.div style={styles}>✌️</animated.div> : " "
   )
   // you know, maybe i shouldn't be trying to useTransition. let me attempt to animate single component mount and unmount with useSpring...
}

export { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, Mount }

