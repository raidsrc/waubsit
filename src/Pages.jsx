import React, { useState, useEffect } from "react"
import './index.css'
import { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, HomepageCenteredFullPageFlexContainer, SiteConstructionBanner, } from './ReusableComponents'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useSpring, animated, config } from "react-spring"
import { Bars } from "svg-loaders-react"
import bananas2Jpg from "./static/bananas2.jpg"
import rayShiprock from "./static/ray atop shiprock.jpg"
import rayShiprockWide from "./static/ray atop shiprock wide.jpeg"
import rayPiano2017 from "./static/IMG_8031.MOV_snapshot_00.35_[2020.04.09_10.03.38].jpg"
import rayDrummingMonochrome from "./static/20200913_185258-01.jpeg"
import stinkyTofu from "./static/stinky_tofu_lol.jpg"

function HomePage(props) {
   const [reverse, setReverse] = useState(false)
   const [cancel, setCancel] = useState(false)


   useEffect(() => {
      setCancel(false)
      return () => {
         setCancel(true)
      }
   })
   const animatedStyles = useSpring({
      from: { opacity: 0.5, color: "#FF69B4", },
      to: { opacity: 1, color: "#124563", },
      reverse: reverse,
      cancel: cancel,
      onRest: () => { setReverse(!reverse) },
      config: {
         mass: 1,
         tension: 500,
         friction: 6,
      },
   })
   return (
      <div className="homepage">
         {
            // TODO: ADD COOL DIAGONAL LINE COLORED SHIT ON THE HOMEPAGE FROM TOP LEFT TO BOTTOM RIGHT SLIGHT INCLINE GREY BELOW COLORED ABOVE 
         }
         <div className="mb-20">
            <div className="w-full py-12 md:py-16 lg:py-0">
               <img className="h-112 w-full object-cover sm:h-50vh md:h-60vh lg:hidden" src={rayShiprock} />
               <img className="hidden w-screen h-screen lg:block lg:object-cover lg:object-center" src={rayShiprockWide} />
            </div>
            <HomepageCenteredFullPageFlexContainer>
               <SiteConstructionBanner />
               { /*
               <animated.div style={animatedStyles}>
                  <span className="text-2xl">This is the Home Page!!!!!!! !!!!!!!!!!!!! !!!!!!!!!! !!!!!!!!!! !!!!!!!</span>
               </animated.div>
               */
               }
               <h1 className="text-xl sm:text-2xl 2xl:text-3xl text-white mb-5">
                  <span className="font-semibold text-2xl sm:text-3xl 2xl:font-bold 2xl:text-4xl">H</span>ey. I'm Ray, and this is my personal website. Welcome.
               </h1>
               <p className="homepage-paragraph text-black">
                  It's not gonna win any design awards, but I'm still very proud of it. I built it myself, with the help of some modern web development technologies and a generous serving of elbow grease. The work was worth it. I have now carved a little space out of the Web that belongs completely to me (mostly).
               </p>
               <p className="homepage-paragraph">
                  Have a look around! I know you'll find something worth your time. You can read a little bit about me in the "About" section. You can view my résumé in the "Résumé" section. Check out "Find Me" if you want to know where you can contact me. I've got links to some of my work in "Links." And if you want to know how I built this site, check out "Site Info."
               </p>
               <p className="homepage-paragraph text-black">
                  Enjoy your stay.
               </p>
            </HomepageCenteredFullPageFlexContainer>
         </div>
      </div >
   )
}

function AboutPage(props) {
   const [nameStage, setNameStage] = useState("empty")
   const [nameBoxContents, setNameBoxContents] = useState("")
   const [timeToSelect, setTimeToSelect] = useState(false)
   const [abort, setAbort] = useState(false)
   let firstRun = true // this ensures that we always show the name "Raymond" first 
   let prevFiveNames = [".", ".", ".", ".", "."]
   let newName = "sup"

   useEffect(() => {
      setAbort(false) // i hope this'll set abort to false when we first render + re-render the page, then set abort to true when we hop off
      return function cleanThatShitUpDawg() {
         setNameStage("stop")
         setAbort(true)
      }
   })

   function doNameShit() {
      if (nameStage == "empty" && abort == false) { // if we ain't run yet
         // then we can run
         setNameStage("typing")
      } else {
         // if our name stage is not empty, we are probably in the middle of running, don't want to update the dom again and descend into hell
         return // quit out quick
      }

      function randomlyPickName() { // returns a random name string from this namesList
         const namesList = [
            "Raymond", "Ray", "Raymond Louis Chen", "陈睿明", "Ray Louis", "Ramón", "Lemon", "弟弟", "Lei Mung", "Waymon Zen", "Roy", "Mistah Chen", "Razor", "Raimund", "Raymie", "Ramin D", "Raid", "raidsrc", "big raid from the 510", "Raymond's Dictionary", "raymawn", "Golden Dragon", "Fire Feet", "Chico", "Bite Me", "A Drop of Golden Sun ☀️", "Drummer @ Sonar Alchemy", "1337+", "Big Head", "Rayon",
         ]
         function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
         }
         // if (firstRun) {
         //    let index = 0
         // } else {
         //    let index = getRandomInt(0, namesList.length)
         // }
         prevFiveNames.shift()
         prevFiveNames.push(newName)
         while (prevFiveNames.includes(newName)) {
            let index = firstRun ? 0 : getRandomInt(0, namesList.length)
            newName = namesList[index]
         }
         firstRun = false
         // console.log(prevFiveNames)
         return newName
      }

      setTimeout(function () { letsGo() }, 200) // start the infinite function calling cycle 

      function letsGo() {
         let randomlyChosenName = randomlyPickName()
         setTimeout(function () { typeInName(randomlyChosenName, 0) }, 200)
      }

      function typeInName(name, i) {
         if (i < name.length + 1) {
            /**
             * start with empty state of name
             * take substring of name from 0 to i
             * update the name state to be that substring
             * increase i by one
             * setTimeout to do again...
             * repeat...?
             */
            let nameSubstring = name.substring(0, i)
            setNameBoxContents(nameSubstring)
            setTimeout(function () { typeInName(name, i + 1) }, 40)
         } else {
            setNameStage("finished")
            setTimeout((name) => { eraseName(name) }, 1300)
         }
      }
      function eraseName(name) {
         setTimeToSelect(true) // this will make the text look like it got selected 
         setTimeout(() => { setNameBoxContents("") }, 550) // after it gets selected, we wait, then we erase the shit
         setTimeout(() => { setTimeToSelect(false) }, 551) // after it gets selected, we wait and remove the selected effect. interestingly this timeout doesn't start up after setting the name box contents. it begins immediately after setTimeToSelect. must be javascript immediately jumping through my shit to be fast. asynchronous actions. i think. 
         if (abort == false) {
            setTimeout(() => { letsGo() }, 1500) // 2 seconds after we remove the selected effect, we restart the cycle 
         }
      }

   }

   function NameInputTypingEffectBox(props) {
      let timeToSelect = props.timeToSelect
      let theClassName = props.className
      if (timeToSelect) {
         theClassName += "font-bold selected-effect"
      } else {
         theClassName += "font-bold not-selected"
      }
      return (
         <span className={theClassName} readOnly type="text">{nameBoxContents}</span>
      )
   }

   return (
      <div className="about-page">
         {
            // TODO: IMPLEMENT HAMBURGER MENU FOR MOBILE SMALL SCREEN
         }
         <CenteredFullPageFlexContainer>
            <SiteConstructionBanner />
            <h1 className="mb-5 px-2 text-white">
               About Me
            </h1>
            <div className="flex justify-center">
               <div className="w-900px the-big-nicknames-banner rounded-md p-5 bg-gray-100 font-serif text-xl font-bold shadow-sm tiny-screen:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl xl:mb-4 2xl:text-5xl" >
                  <NameInputTypingEffectBox className="px-2 py-2 " onLoad={setTimeout(() => doNameShit(), 420)} timeToSelect={timeToSelect} />
               </div>
            </div>
            {
               // in widescreen view, do grid with 3 columns, text taking up two columns and an image taking up 1 col. in phone or thin view, have single column layout and show things one by one in a single column since we got no fucking space 
            }
            <div className="flex flex-col lg:mt-6 justify-center grid-cols-1 grid-rows-10 mb-12 items-center lg:py-2 md:mb-0 md:grid md:py-8 md:grid-rows-6 md:grid-cols-2 lg:grid-cols-5">
               {
                  // MEDIUM AND UP: 2 COLUMNS, TEXT TAKES UP 1 COLUMN OF SPACE
                  // LARGE AND UP: 3 COLUMNS, TEXT TAKES UP 2 COLUMNS WORTH OF SPACE
               }
               <div className="about-me-grid-item row-start-1 col-start-1 lg:col-end-4">
                  <p className="about-me-paragraph text-black">
                     Yo. In case you don't know me, I'm Raymond Chen. I usually go by Ray, but people have known me by many names. Some of these names were given to me. Some of them I chose myself. Some of them are funny, and some I think are pretty cool. Some of them I like. Others, not so much. Regardless, I feel as though every single one of these names has become an important part of my identity—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-4 lg:col-end-6">
                  <img src={rayDrummingMonochrome} className="about-me-img" />
                  <span className="about-me-img-caption"><span className="not-italic font-semibold">Fig. 1;</span> me, in my basement, drumming very intensely as I read a text message from my neighbor telling me to quiet down. yeah, they complain a lot.</span>
               </div>

               <div className="about-me-grid-item row-start-3 md:row-start-2 md:col-start-2 lg:col-start-3 lg:col-end-6">
                  <p className="about-me-paragraph md:text-right">
                     {
                        //I am a student, teacher, musician, computer programmer, biologist,
                     }
                     I'm from the San Francisco Bay Area. I was born here and I've lived most of my life here. I've been all around the world and seen all sorts of things; still, the Bay is and has always been my favorite place. Not once have I grown weary of returning home to it.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-1 lg:col-end-3">
                  <img src={bananas2Jpg} className="about-me-img" />
                  <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. 2;</span> bananana.</span>
               </div>

               <div className="about-me-grid-item row-start-5 md:row-start-3 md:col-start-1 lg:col-end-4">
                  <p className="about-me-paragraph text-black">
                     Currently, I'm a rising senior at the University of California, Davis, completing a major in Biochemistry and Molecular Biology and a minor in Computer Science. My favorite subjects of study so far have been genetics, protein structure and function, bioinformatics, the ethics of technology, full-stack web development, and the neuroscience of music. I'm also pretty interested in writing, editing, teaching, and activism.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-4 lg:col-end-6">
                  <img src={bananas2Jpg} className="about-me-img" />
                  <span className="about-me-img-caption"><span className="not-italic font-semibold">Fig. 3;</span> banaba.</span>
               </div>

               <div className="about-me-grid-item row-start-7 md:row-start-4 md:col-start-2 lg:col-start-3 lg:col-end-6">
                  <p className="about-me-paragraph md:text-right">
                     My career aspirations are simple. I'll cure cancer at the age of 26, then be a busker in San Francisco for a decade, and then retire to a log cabin deep in the Sierra Nevadas with my crossbow and my Siberian Husky.<br /><span className="text-gray-449">(just joking. i'm hoping to make a career out of being a freelance science + technology + music tutor for society's disadvantaged)</span>
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-1 lg:col-end-3">
                  <img src={bananas2Jpg} className="about-me-img lg:col-end-3" />
                  <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. 4;</span> something else lol banaba bananb bananana.</span>
               </div>

               <div className="about-me-grid-item row-start-9 md:row-start-5 md:col-start-1 lg:col-end-4">
                  <p className="about-me-paragraph text-black">
                     I like Kendrick Lamar, Fullmetal Alchemist, steamed pork buns, and the ocean breeze. I don't like candy, soda, humid weather, and mushrooms. Everybody always tells me that mushrooms are amazing and that I simply haven't had a great-tasting mushroom. I doubt it.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-4 lg:col-end-6">
                  <img src={stinkyTofu} className="about-me-img" />
                  <span className="about-me-img-caption"><span className="not-italic font-semibold">Fig. 5; </span>just ate a mushroom, probably, i don't know. friend appears very happy about it.</span>
               </div>

               <div className="about-me-grid-item row-start-11 md:row-start-6 md:col-start-2 lg:col-start-3 lg:col-end-6">
                  <p className="about-me-paragraph md:text-right">
                     In my free time, I enjoy programming, working out, cooking, learning all sorts of new things, editing videos, and composing/arranging/producing/playing music.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center lg:col-start-1 lg:col-end-3">
                  <img src={rayPiano2017} className="about-me-img" />
                  <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. 6;</span> c. 2017. performing some homestuck music for a few hundred people. yes really. </span>
               </div>
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

// load the page. don't show iframe yet because iframe fucks with the smooth scrolling animation. show loading anim. wait for however long it takes for the smooth scroll to finish, maybe half a second. after half a second, trigger a re-render somehow. i think by changing the putIframeOnPage state variable. after that becomes true, then i mount the iframe. 
// you know that weird issue where when you scroll to the bottom of the homepage and click the resume link, the auto scroll to top doesn't actually scroll to the top of the page before the next page loads? for some reason everything is fine on mobile. 
// also, it appears that this issue doesn't exist when i use chrome. the scrolling up works perfectly. 
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

function FindMePage(props) {
   return (
      <div className="find-me-page">
         <CenteredFullPageFlexContainer>
            <SiteConstructionBanner />
            <h1 className="mb-5 px-2 text-white">
               Contact
            </h1>
            <div className="text-center py-5 px-2 text-base md:text-lg">
               I don't have accounts on most major social media platforms. But here are two places where you can find me online if you really need to.
            </div>
            <div className="grid grid-cols-3 grid-rows-5">
               <div className="row-start-2 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/raidsrc">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white">@raidsrc</span>
               </div>
               <div className="row-start-4 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://youtube.com/c/raidsrc">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white">/c/raidsrc</span>
               </div>
            </div>
            <div className="text-center py-5 px-2 text-base md:text-lg">
               Alternatively, you could email me at the address below.
            </div>
            <div className="grid grid-cols-3 grid-rows-6">
               <div className="row-start-2 col-start-2 flex flex-row items-center justify-center">
                  <a href="mailto:rsrchen@ucdavis.edu">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>
                  </a>
                  <span className="px-4 text-lg font-semibold text-white col-start-2">rsrchen@ucdavis.edu</span></div>
            </div>
            <div className="mt-4 mb-1 text-center text-xs font-semibold">
               twitter, youtube, email icons © 2021 iconmonstr
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function LinksPage(props) {
   return (
      <div className="links-page">
         <CenteredFullPageFlexContainer>
            <SiteConstructionBanner />
            <h1 className="mb-5 px-2">
               Links
            </h1>
            <h2 className="mb-4 px-2 pt-4"></h2>
            <p className="about-me-paragraph">An online portfolio of essays and blog posts I wrote for <span className="italic">UWP 101Y - Advanced Composition</span>. In this body of work, I investigate the history, geography, and circumstances of two urban redevelopment schemes in the San Francisco Bay Area and examine how money, location, and collective civic action have shaped the outcomes of both projects.</p>

            <p className="about-me-paragraph text-black">A fitness-tracking web application I developed for <span className="italic">ECS 162 - Web Programming</span>. This application supports Google sign-in using OAuth 2.0, logging of past and future activity, and data visualization of recorded progress.</p>

            <p className="about-me-paragraph">My final project for <span className="italic">ECS 162 - Web Programming</span>; a web application I developed for the exhibit <span className="italic">Education Should Be Free</span> at the Manetti Shrem Museum at the University of California, Davis. Use this web application to estimate the cost of education at various public universities in California using data drawn from the U.S. Department of Education's College Scorecard.</p>

            <p className="about-me-paragraph text-black">A video about a procedure I devised for transforming Super Smash Bros. Melee inputs into music. This mechanism works with any valid Slippi replay file (.slp) and outputs MIDI notes with millisecond-perfect temporal precision.</p>

            <p className="about-me-paragraph">The website for Virovek, a Hayward-based gene therapy company. I played a major role in debugging the website's stylesheets. It's built on WordPress, which I'm not very familiar with, but I managed to work my magic all the same. </p>

            <p className="about-me-paragraph text-black">A lecture on Super Smash Bros. Melee that I presented for <span className="italic">CTS 172 - Metagaming</span>, a course all about "examining the community histories and material practices that have evolved alongside videogames as a mass medium, cultural commodity, and digital technology." This class just might be one of the most enjoyable university courses I've ever taken.</p>

            <p className="about-me-paragraph">A webpage I designed on my own, just for fun. I wanted to try my hand at designing a sleek, beautiful, majestic, responsive webpage. This is the result of that work.</p>
            {
               // include uwp101y, tractivity, shop til you drop, slippi sampler, a cool sick design showcase, virovek.com 
            }
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function SiteInfoPage(props) {
   return (
      <div className="site-info-page">
         <CenteredFullPageFlexContainer>
            <SiteConstructionBanner />
            <h1 className="text-white mb-5 px-2">
               Site Info
            </h1>
            <p className="about-me-paragraph text-black">I built this site using React, mostly. I learned about React from <span className="italic">ECS 162: Web Programming</span>, a course I took at UC Davis during Spring Quarter 2021. I've been enthralled since.</p>
            <p className="about-me-paragraph">To put it all together, I enlisted the help of vitejs, svg-loaders-react, react-transition-group, react-spring, and tailwindcss.</p>
            <p className="about-me-paragraph text-black">Building the site took me a couple weeks of on-and-off work. Much of it was spent teaching myself how to use the technologies listed above. I struggled a lot with react-spring in particular, spending hours staring at my laptop screen in the dark cabin of an airplane wondering what was going wrong. Programming is confusing, dawg.</p>
            <p className="about-me-paragraph">If you're reading this right now, I'm still building the site, so I guess the first sentence of the previous paragraph was a lie, since I'm not done yet and I don't know how long it'll take me to finish. Welcome to my in-progress personal website. How the hell did you get here? I haven't told anyone about this site or advertised it anywhere...</p>
            <div className="flex justify-center mt-28">
               <a href="https://icons8.com/icon/83195/menu" className="blue-n-purple-link mb-1 text-center text-xs font-semibold">
                  mobile hamburger menu icon © Icons8
               </a>
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

export { HomePage, AboutPage, ResumePage, FindMePage, LinksPage, SiteInfoPage }