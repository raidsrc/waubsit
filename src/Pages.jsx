import React, { useState, useEffect } from "react"
import './index.css'
import { Navbar, NavButton, ClickableRaidsrcIcon, CenteredFullPageFlexContainer, SiteConstructionBanner, } from './ReusableComponents'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useSpring, animated, config } from "react-spring"
import "./animationStyles.css"
import bananasJpg from "./static/bananas.jpg"
import bananas2Jpg from "./static/bananas2.jpg"
import rayShiprock from "./static/ray atop shiprock.jpg"
import rayShiprockWide from "./static/ray atop shiprock wide.jpeg"

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
            <div className="w-full py-16 lg:py-0">
               <img className="h-112 w-full object-cover sm:h-50vh md:h-60vh lg:hidden" src={rayShiprock} />
               <img className="hidden w-screen h-screen lg:block lg:object-cover lg:object-center" src={rayShiprockWide} />
            </div>
            <CenteredFullPageFlexContainer>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus fuga eum expedita qui impedit eos, itaque quis quidem quod?
               </p>
               <p className="homepage-paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, molestiae?
               </p>
               <p className="homepage-paragraph text-black">
                  Enjoy your stay.
               </p>
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
            <SiteConstructionBanner />
            <div className="flex justify-center">
               <div className="w-900px the-big-nicknames-banner rounded-md p-5 bg-gray-100 font-serif text-xl font-bold shadow-sm tiny-screen:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl xl:mb-4 2xl:text-5xl" >
                  <NameInputTypingEffectBox className="px-2 py-2 " onLoad={doNameShit()} timeToSelect={timeToSelect} />
               </div>
            </div>
            {
               // in widescreen view, do grid with 3 columns, text taking up two columns and an image taking up 1 col. in phone or thin view, have single column layout and show things one by one in a single column since we got no fucking space 
            }
            <div className="flex flex-col justify-center grid-cols-1 grid-rows-10 mb-12 items-center lg:py-2 md:mb-0 md:grid md:py-8 md:grid-rows-6 md:grid-cols-2 lg:grid-cols-3">
               {
                  // MEDIUM AND UP: 2 COLUMNS, TEXT TAKES UP 1 COLUMN OF SPACE
                  // LARGE AND UP: 3 COLUMNS, TEXT TAKES UP 2 COLUMNS WORTH OF SPACE
               }
               <div className="about-me-grid-item row-start-1 col-start-1 lg:col-end-3">
                  <p className="about-me-paragraph text-black">
                     Yo. In case you don't know me, I'm Raymond Chen. I usually go by Ray, but people have known me by many names. Some of these names were given to me. Some of them I chose myself. Some of them are funny, and some I think are pretty cool. Some of them I like. Others, not so much. Regardless, I feel as though every single one of these names has become an important part of my identity—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
               <div className="about-me-grid-item row-start-3 md:row-start-2 md:col-start-2 lg:col-end-4">
                  <p className="about-me-paragraph md:text-right">
                     I'm from the San Francisco Bay Area. I was born here and I've lived here for most of my life. I've been all around the world and seen all sorts of things; still, the Bay is and has always been my favorite place. Not once have I grown weary of returning home to it.
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
               <div className="about-me-grid-item row-start-5 md:row-start-3 md:col-start-1 lg:col-end-3">
                  <p className="about-me-paragraph text-black">
                     Currently, I'm a rising senior at the University of California, Davis, completing a major in Biochemistry and Molecular Biology and a minor in Computer Science. My favorite subjects of study so far have been genetics, protein structure and function, bioinformatics, the ethics of technology, full-stack web development, and the neuroscience of music. I'm also pretty interested in writing, proofreading, teaching, and political activism.
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
               <div className="about-me-grid-item row-start-7 md:row-start-4 md:col-start-2 lg:col-end-4">
                  <p className="about-me-paragraph md:text-right">
                     My career aspirations are simple. I'll cure cancer at the age of 26, then be a busker in San Francisco for a decade, and then retire to a log cabin deep in the Sierra Nevadas with my crossbow and my Siberian Husky.<br /><span className="text-gray-449">(just joking. i hope to make a career out of being a freelance science + technology + music tutor for society's disadvantaged)</span>
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
               <div className="about-me-grid-item row-start-9 md:row-start-5 md:col-start-1 lg:col-end-3">
                  <p className="about-me-paragraph text-black">
                     I like Kendrick Lamar, Fullmetal Alchemist, steamed pork buns, Bill Evans, grilled salmon, California poppies, and challah bread. I don't like candy, soda, humid weather, and mushrooms. Everybody always tells me that mushrooms are amazing and that I simply haven't had a great-tasting mushroom. I doubt it.
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
               <div className="about-me-grid-item row-start-11 md:row-start-6 md:col-start-2 lg:col-end-4">
                  <p className="about-me-paragraph md:text-right">
                     When I'm not busy butchering sketches of Haworth projections or <a className="underline active:text-blue-900 text-blue-600 hover:text-blue-700" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=supYVmjGi50">presenting lectures on Super Smash Bros. Melee,</a> I spend my time programming, working out, cooking, teaching myself things, editing videos, and composing/arranging/producing/playing music.
                  </p>
               </div>
               <div className="flex justify-center items-center">
                  <img src={bananas2Jpg} className="about-me-img" />
               </div>
            </div>
         </CenteredFullPageFlexContainer>
      </div>
   )
}

function ResumePage(props) {
   return (
      <div className="resume-page">
         <div>
            <CenteredFullPageFlexContainer>
               <SiteConstructionBanner />
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
            <SiteConstructionBanner />
            <div className="text-center py-5 px-2 text-base md:text-lg">I don't have accounts on most major social media platforms. But here are two places where you can find me online if you really need to.</div>
            <div className="grid grid-cols-3 grid-rows-7">
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