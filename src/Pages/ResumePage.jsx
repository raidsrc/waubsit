import React, { useState, useEffect } from "react"
import { CenteredFullPageFlexContainer, SiteConstructionBanner } from '../ReusableComponents'
import { Bars } from "svg-loaders-react"

function ResumePage(props) {
    const [firstRender, setFirstRender] = useState(true)
    const [putIframeOnPage, setPutIframeOnPage] = useState(false)
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const [iframeClassName, setIframeClassName] = useState("hidden")
    useEffect(() => {
       setFirstRender(false)
       // setTimeout(() => {
       //    window.scrollBy({
       //       top: -10000,
       //       left: 0,
       //       behavior: "smooth",
       //    })
       // }, 1200 )
       setTimeout(() => { setPutIframeOnPage(true) }, 1500)
    }, [firstRender])
    function whenIframeLoaded() {
       setIframeLoaded(true)
       setIframeClassName("inline-block border-2 border-red-800")
    }
    let windowInnerHeight = window.innerHeight
    console.log(windowInnerHeight)
    return (
       <div className="resume-page">
          <div>
             <CenteredFullPageFlexContainer>
                <h1 className="mb-5 px-2 ">
                   Résumé
                </h1>
                <SiteConstructionBanner />
                <div className="flex justify-center h-112 sm:h-128 md:h-144 lg:h-160 xl:h-176">
                   {iframeLoaded ? "" : // this curly braced pocket of code controls the loading bars animation 
                      <div className="w-5/12 flex flex-col justify-center items-center tiny-screen:w-4/12 sm:w-2/5 max-w-2xs">
                         <div className=" flex w-2/4 sm:3/4 justify-center items-center">
                            <div>
                               <Bars opacity="0.9" width="100%" height="auto" />
                               <div className="text-center w-full text-base lg:text-lg">pdf loading. sit tight.</div>
                            </div>
                         </div>
                      </div>
                   }
                   {putIframeOnPage ? <iframe className={iframeClassName} src="https://drive.google.com/file/d/1s9PB0FQxfU37sWj9wIOjnX5I3KpWtocF/preview" width="90%" height="auto" allow="autoplay" onLoad={whenIframeLoaded} /> : ""}
                </div>
 
             </CenteredFullPageFlexContainer>
          </div>
       </div>
    )
 }

 export default ResumePage