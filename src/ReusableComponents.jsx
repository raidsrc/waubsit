import React, { useState, useEffect } from "react"
import { useSpring, useTransition, animated, config } from "react-spring"

function Navbar(props) {
   let setPage = props.setPage
   let setShowMount = props.setShowMount 
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
   let show = props.show
   let set = props.doSetShow
   let page = props.page
   console.log("rendered mount. show:", show)

   // useEffect(() => {
   //    //set(true)
   //    //console.log("used effect ")
   //    return function cleanup() {
   //       console.log("cleaned up")
   //       set(false)
   //    }
   // })

   const transitions = useTransition(show, {
      from: { opacity: 0, x: -200 },
      enter: { opacity: 1, x: 0 },
      leave: { opacity: 0, x: 200 },
      //reverse: show,
      delay: 10,
      //config: config.molasses,
      // config: {
      //    duration: 2000,
      // }
      //onRest: () => set(!show),
   })
   return transitions(
      (styles, item) => item &&
         <animated.div style={styles}>
            <div className="text-sm">
               ✌️ <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, mollitia.</span>
               <div>
                  There's a lot of stuff in this div
               </div>
               <div>
                  12345678901234567890-=-0-=-=_)-09*90-)9876%43@#$567*()*(&*^765^46&%7^(8&(*)(*)*-9*_0(*8_)))
               </div>
            </div>
         </animated.div>
   )
}

export { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, Mount }

