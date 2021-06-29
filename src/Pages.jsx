import React, { useState, useEffect } from "react"
import './index.css'
import { Navbar, Button, ClickableRaidsrcIcon, CenteredFullPageFlexContainer } from './ReusableComponents'

function HomePage(props) {
   return (
      <div>
         <Navbar setPage={props.setPage} />
         <CenteredFullPageFlexContainer>
            <br /><br /><br /><br /> This is the Home Page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         </CenteredFullPageFlexContainer>
      </div>
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
         setTimeout(() => { setTimeToSelect(false) }, 600) // after it gets selected, we wait and remove the selected effect. interestingly this timeout doesn't start up after setting the name box contents. it begins immediately after setTimeToSelect. must be javascript immediately jumping through my shit to be fast. asynchronous actions. i think. 
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
      <div>
         <Navbar setPage={props.setPage} />
         <CenteredFullPageFlexContainer>
            <span className="text-6xl bg-red-600 mb-6">
               site construction in progress BE PATIENT
            </span>
            <div className="the-big-nicknames-banner rounded-md p-6 bg-gray-100 font-serif text-xl font-bold
               tiny-screen:text-2xl
               sm:text-3xl
               lg:text-3xl
               xl:text-4xl
               2xl:text-5xl" >
               <NameInputTypingEffectBox className="px-2 py-2 " onLoad={doNameShit()} timeToSelect={timeToSelect} /> <br />
            </div>
            <p className="text-center text-white py-10 text-xl">
               I'm Ray. People have known me by many names throughout my life. Some of these names were given to me. Some of them I chose. Some are funny, and some are cool. Some of them I like. Others, not so much. Regardless, I feel as though each and every one of these names has become an important part of me—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.<br /><br />

               I come from the San Francisco Bay Area. I've seen and experienced a great deal of the world; still, the Bay remains my favorite place, and California remains my favorite state. <br /><br />

               text text text alsdkfjasldkfjasldkfj asdlfkj asdlkf jasdlkf jasd i'm aiming to make this a react app that shows you various shits if you click on buttons up top like my resume and where you can find me online, scrollable up and down here on the main page and everything. i think i ought to make the things on different pages though so when you click you go to a different page, not just a single page app type thing, gotta have multiple pages to click to and from, but reuse your components to practice designing reactively and efficiently. nah never mind i'll make it a single page react app. it's cooler that way lol  </p>
            <a href="elsewhere.html" className="text-white">wsup</a>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function ResumePage(props) {
   return (
      <div>
         <Navbar setPage={props.setPage} />
         <CenteredFullPageFlexContainer>
            <br /><br /><br /><br />resume goes here eventually
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function FindMePage(props) {
   return (
      <div>
         <Navbar setPage={props.setPage} />
         <CenteredFullPageFlexContainer>
            <br /><br /><br /><br />twitter youtube that's it lol i ain't online a whole lot
         </CenteredFullPageFlexContainer>
      </div>
   )
}

export { HomePage, AboutPage, ResumePage, FindMePage }