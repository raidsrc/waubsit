import React, { useState, useEffect } from "react"
import './index.css'
import { Navbar, Button, ClickableRaidsrcIcon } from './ReusableComponents'

function HomePage(props) {

}

function AboutPage(props) {
   const [nameStage, setNameStage] = useState("empty")
   const [nameBoxContents, setNameBoxContents] = useState("")

   function doNameShit() {
      if (nameStage == "empty") { // if we ain't run yet
         // then we can run
         setNameStage("typing")
      } else {
         // if our name stage is not empty, we are probably in the middle of running, don't want to update the dom again and descend into hell
         return // quit out quick
      }

      function randomlyPickName() { // returns a random name string from this namesList
         const namesList = [
            "Raymond", "Ray", "Raymond Louis Chen", "陈睿明", "Ray Louis", "Ramón", "Lemon", "Lei Mung", "Roy", "Mistah Chen", "Razor", "Raimund", "Raymie", "Ramin D", "Raid", "raidsrc", "big raid from the 510", "Raymond's Dictionary", "Golden Dragon", "Fire Feet", "Chico", "Bite Me", "A Drop of Golden Sun ☀️", "Half of Sonar Alchemy", "Big Head"
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

      function alwaysChooseFirstThreeNames() {

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
            setTimeout(function () { typeInName(name, i + 1) }, 100)
         } else {
            console.log("done")
            setNameStage("finished")
            setTimeout((name) => { eraseName(name) }, 2000)
         }
      }
      function eraseName(name) {
         // need to make it look like i'm selecting the text and deleting it. need a css pseudostate select thing. idk.
         setTimeout(() => { setNameBoxContents("") }, 1000)
         // setNameStage("empty")
         setTimeout(() => { letsGo() }, 1000)
      }

   }

   return (
      <div>
         <Navbar />
         <div className="flex justify-center w-full">
            <div className="w-11/12 max-w-screen-xl flex flex-col justify-center">
               <div className="the-big-nicknames-banner rounded-md p-6 mt-24 bg-gray-100 font-serif text-xl font-bold
               tiny-screen:text-2xl
               sm:text-3xl
               lg:text-3xl
               xl:text-4xl
               2xl:text-5xl" onLoad={doNameShit()}>
                  <input className="font-bold" readOnly type="text" value={nameBoxContents} /> <br />
                  site constru ction in progress BE PATIENT
               </div>
               <p className="text-center text-white py-10 text-xl">
                  I'm Ray. I've gone by many names in my life. Some of those names were given. Some of them were chosen. Some are funny, and some are cool. Some of them I really like. Others, not so much. But these names reflect how the world sees me, and I've taken them to heart. <br /><br />
                  i'm aiming to make this a react app that shows you various shits if you click on buttons up top like my resume and where you can find me online, scrollable up and down here on the main page and everything. i think i ought to make the things on different pages though so when you click you go to a different page, not just a single page app type thing, gotta have multiple pages to click to and from, but reuse your components to practice designing reactively and efficiently. nah never mind i'll make it a single page react app. it's cooler that way lol  </p>
               <a href="elsewhere.html" className="text-white">wsup</a>
            </div>
         </div>
      </div>
   )
}

export { HomePage, AboutPage }