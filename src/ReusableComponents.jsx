import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import {Transition} from "react-transition-group"

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
   return (
      <animated.div className="flex justify-center w-full" style={animationProps}>
         <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-24">
            {props.children}
         </div>
      </animated.div>
   )
}

function TransitioningThing(props) {
   const [inProp, setInProp] = useState(false);
   return (
      <div>
         <Transition in={inProp} timeout={500}>
            <div>asdlkfjaslkdfjalskdjflaskjd</div>
         </Transition>
         <button onClick={() => setInProp(true)}>
            Click to Enter
         </button>
      </div>
   );
}

export { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, TransitioningThing }

