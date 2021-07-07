import React, { useState, useEffect } from "react"
import './index.css'
import { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, } from './ReusableComponents'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./animationStyles.css"

function HomePage(props) {
   const [animateShit, setAnimateShit] = useState(false)
   return (

      <div className="homepage">
         {
            // TODO: ADD COOL DIAGONAL LINE COLORED SHIT ON THE HOMEPAGE FROM TOP LEFT TO BOTTOM RIGHT SLIGHT INCLINE GREY BELOW COLORED ABOVE 
         }
         <div>
            <CenteredFullPageFlexContainer>
               <span className="text-5xl bg-red-600 mb-6">
                  site construction in progress BE PATIENT
               </span>
               <CSSTransition unmountOnExit in={animateShit} classNames="homepage-swoop" timeout={1000}>
                  <div>
                     This is the Home Page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! <br />
                     <button onClick={() => setAnimateShit(false)}>click to get rid of this shit </button>
                  </div>
               </CSSTransition>
               <button onClick={() => setAnimateShit(true)}>
                  click to make some shit appear
               </button>
            </CenteredFullPageFlexContainer>
         </div>
      </div >
   )
}

function AboutPage(props) {
   const [nameStage, setNameStage] = useState("empty")
   const [nameBoxContents, setNameBoxContents] = useState("")
   const [timeToSelect, setTimeToSelect] = useState(false)
   const [abort, setAbort] = useState(false)

   useEffect(() => {
      setAbort(false) // i hope this'll set abort to false when we render the page, then set abort to true when we hop off
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
            "Raymond", "Ray", "Raymond Louis Chen", "陈睿明", "Ray Louis", "Ramón", "Lemon", "弟弟", "Lei Mung", "Waymon Zen", "Roy", "Mistah Chen", "Razor", "Raimund", "Raymie", "Ramin D", "Raid", "raidsrc", "big raid from the 510", "Raymond's Dictionary", "Ray Mahn", "Golden Dragon", "Fire Feet", "Chico", "Bite Me", "A Drop of Golden Sun ☀️", "Half of Sonar Alchemy", "1337+", "Big Head"
         ]
         function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
         }
         let index = getRandomInt(0, namesList.length)
         return namesList[index]
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
            setTimeout(function () { typeInName(name, i + 1) }, 60)
         } else {
            setNameStage("finished")
            setTimeout((name) => { eraseName(name) }, 1500)
         }
      }
      function eraseName(name) {
         setTimeToSelect(true) // this will make the text look like it got selected 
         setTimeout(() => { setNameBoxContents("") }, 550) // after it gets selected, we wait, then we erase the shit
         setTimeout(() => { setTimeToSelect(false) }, 551) // after it gets selected, we wait and remove the selected effect. interestingly this timeout doesn't start up after setting the name box contents. it begins immediately after setTimeToSelect. must be javascript immediately jumping through my shit to be fast. asynchronous actions. i think. 
         if (abort == false) {
            setTimeout(() => { letsGo() }, 2000) // 2 seconds after we remove the selected effect, we restart the cycle 
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
            <span className="text-5xl bg-red-600 mb-6">
               site construction in progress BE PATIENT
            </span>
            <div className="the-big-nicknames-banner rounded-md p-6 bg-gray-100 font-serif text-xl font-bold shadow-sm tiny-screen:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl" >
               <NameInputTypingEffectBox className="px-2 py-2 " onLoad={doNameShit()} timeToSelect={timeToSelect} /> <br />
            </div>
            <p className="text-center text-white py-10 text-lg sm:text-xl xl:text-2xl">
               I'm Ray. People have known me by many names throughout my life. Some of these names were given to me. Some of them I chose. Some are funny, and some are cool. Some of them I like. Others, not so much. Regardless, I feel as though each and every one of these names has become an important part of me—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.<br /><br />

               I come from the San Francisco Bay Area. I've seen and experienced a great deal of the world; still, the Bay remains my favorite place, and California remains my favorite state. <br /><br />

            </p>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function ResumePage(props) {
   // NOW. TRY TO ANIMATE THE ENTIRETY OF RESUMEPAGE TRANSITIONING AWAY.
   // useEffect(() => {
   //    if (showMount === false && page === "ResumePage") {
   //       doSetShowMount(true)
   //    }
   // })

   return (
      <div className="resume-page">
         <div>
            <CenteredFullPageFlexContainer>
               <span className="text-5xl bg-red-600 mb-6">
                  site construction in progress BE PATIENT
               </span>
               resume goes here eventually<br /><br />
            </CenteredFullPageFlexContainer>
            <div className="text-6xl text-center mt-10">
            </div>
         </div>
      </div>
   )
}

function FindMePage(props) {
   return (
      <div className="find-me-page">
         <CenteredFullPageFlexContainer>
            <span className="text-5xl bg-red-600 mb-6">
               site construction in progress BE PATIENT
            </span>
            <div className="grid grid-cols-3 grid-rows-6">
               <div className="row-start-2 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/raidsrc"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                  <span className="px-4 text-lg font-semibold">@raidsrc</span>
               </div>
               <div className="row-start-4 col-start-2 flex flex-row items-center justify-center">
                  <a target="_blank" rel="noreferrer noopener" href="https://youtube.com/c/raidsrc"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a>
                  <span className="px-4 text-lg font-semibold">/c/raidsrc</span>
               </div>
               <div className="row-start-6 col-start-2 mt-4 text-center text-xs font-semibold">
                  icons © 2021 iconmonstr
               </div>
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

export { HomePage, AboutPage, ResumePage, FindMePage }