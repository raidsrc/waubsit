import React, { useState } from "react"
import { Transition, useSpring, animated, useTransition } from "react-spring"

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
   const [isVisible, setIsVisible] = useState(true)
   let page = props.page
   // const animationProps = useSpring({
   //    to: { opacity: 1, },
   //    from: { opacity: 0, },
   //    delay: 50,
   //    config: {
   //       duration: 500
   //    }
   // })
   const transition = useTransition(page, {
      from: { opacity: 0.5 },
      enter: { opacity: 1 },
      leave: { opacity: 0.1 },
   })
   return (
      <div>
         hi
         {transition((style, item) => {
            item ? <animated.div style={style}>sldkf<br />jal<br />ks<br />djf<br />alk<br />sdjfla<br />ks<br />jdf</animated.div> : <div>no</div>
            // <animated.div className="flex justify-center w-full" style={style}>
            //    <div className="w-11/12 max-w-screen-xl flex flex-col justify-center mt-24">
            //       {props.children}
            //    </div>
            // </animated.div>
         })}
      </div>
   )
}

export { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer }

