import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import bananas2Jpg from "../static/bananas2.jpg"
import me2021dec from "../static/me_2021_dec.jpeg"
import { CenteredFullPageFlexContainer, SiteConstructionBanner, NewTab } from '../ReusableComponents'
import { Link } from "react-router-dom"

function SupPage(props) {

   return (
      <div className="homepage">
         <div className="mb-20">

            <CenteredFullPageFlexContainer>
               <SiteConstructionBanner />
               <div className="flex flex-row justify-center py-10">
                  sup
               </div>
            </CenteredFullPageFlexContainer>
         </div>
      </div >
   )
}

export default SupPage