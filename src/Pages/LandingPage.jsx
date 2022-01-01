import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import rayShiprock from "../static/ray atop shiprock.jpg"
import rayShiprockWide from "../static/ray atop shiprock wide.jpeg"
import { CenteredFullPageFlexContainer, SiteConstructionBanner, NewTab, scrollToTop } from '../ReusableComponents'
import { Link } from "react-router-dom"

function LandingPage(props) {
   
   return (
      <div className="homepage">
         <div className="mb-20">
            {/* <div className="w-full py-12 md:py-16 lg:py-0">
               <img className="h-112 w-full object-cover sm:h-50vh md:h-60vh lg:hidden" src={rayShiprock} />
               <img className="hidden w-screen h-screen lg:block lg:object-cover lg:object-center" src={rayShiprockWide} />
            </div> */}
            <CenteredFullPageFlexContainer>
               <SiteConstructionBanner />
               <h1 className="text-xl sm:text-2xl 2xl:text-3xl text-white mb-5">
                  <span className="font-semibold text-2xl sm:text-3xl 2xl:font-bold 2xl:text-4xl">H</span>ey. I'm Ray, and this is my personal website. Welcome.
               </h1>
               <p className="homepage-paragraph text-black">
                  It's not gonna win any design awards, but I'm still very proud of it. I built it myself, with the help of some modern web development technologies and a generous serving of elbow grease. The work was worth it. I have now carved a little space out of the Web that belongs completely to me (mostly).
               </p>
               
               <p className="homepage-paragraph text-black">
                  Enjoy your stay.
               </p>
            </CenteredFullPageFlexContainer>
         </div>
      </div >
   )
}

export default LandingPage