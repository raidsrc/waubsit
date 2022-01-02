import React, { useState, useEffect } from "react"
import { useSpring } from "react-spring"
import bananas2Jpg from "../static/bananas2.jpg"
import me2021dec from "../static/me_2021_dec.jpeg"
import { CenteredFullPageFlexContainer, SiteConstructionBanner, NewTab, LandingPageLinkButton } from '../ReusableComponents'
import { Link } from "react-router-dom"

function LandingPage(props) {

   // i didn't really plan this out. i don't want this to be a page on raidsrc.me. i want this to be a whole ass other subdomain. landing.raidsrc.me. or something like that. how the fuck do i do that?
   // i'll need to host this page somewhere else, i think. 

   return (
      <div className="homepage">
         <div className="mb-20">
            {/* <div className="w-full py-12 md:py-16 lg:py-0">
               <img className="h-112 w-full object-cover sm:h-50vh md:h-60vh lg:hidden" src={rayShiprock} />
               <img className="hidden w-screen h-screen lg:block lg:object-cover lg:object-center" src={rayShiprockWide} />
            </div> */}
            <CenteredFullPageFlexContainer>
               <SiteConstructionBanner />
               {/* the plan: centered circle image of me. big text below that say Raid. or Bite Me. or Ray Louis. below that have links to where i be at. youtube, spotify, apple music, etc. have them arranged like linktree has it but different. wide buttons with off-white colored backgrounds. black text. icons on the buttons.*/}
               <div className="flex flex-row justify-center pt-7 sm:pt-4 md:pt-0">
                  <img src={me2021dec} className="rounded-full w-9/12 
                  tiny-screen:w-8/12 
                  sm:w-6/12 
                  md:w-4/12 
                  lg:w-3/12" />
               </div>
               <div className="flex flex-row justify-center py-6">
                  <h1 className="text-white mild-text-shadow-left-down">
                     Raid  //  Bite Me  //  Ray Louis
                  </h1>
               </div>
               <LandingPageLinkButton href="https://youtube.com/c/raidsrc">
                  YouTube
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://spotify.com">
                  Spotify
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://apple.com">
                  Apple Music
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://twitter.com/raidsrc">
                  Twitter
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://github.com/raidsrc">
                  Github, Personal
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://github.com/rsrchen">
                  Github, School
               </LandingPageLinkButton>
               <LandingPageLinkButton href="https://soundcloud.com/raidsrc">
                  SoundCloud
               </LandingPageLinkButton>
               <div className="flex flex-row justify-center py-4">
                  <span className="inline-red-bg-link text-white">
                     <NewTab href="/sup">
                        Sup.
                     </NewTab>
                  </span>
               </div>
            </CenteredFullPageFlexContainer>
         </div>
      </div >
   )
}

export default LandingPage