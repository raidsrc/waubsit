import React, { useState, useEffect } from "react"
import { CenteredFullPageFlexContainer, SiteConstructionBanner } from '../ReusableComponents'
import bananas2Jpg from "../static/bananas2.jpg"
import rayPiano2017 from "../static/IMG_8031.MOV_snapshot_00.35_[2020.04.09_10.03.38].jpg"
import rayDrummingMonochrome from "../static/20200913_185258-01.jpeg"
import stinkyTofu from "../static/stinky_tofu_lol.jpg"

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
                      I'm Raymond. I usually go by Ray, but people have known me by many names. Some of these names were given to me. Some of them I chose myself. Some of them are funny, and some I think are pretty cool. Some of them I like. Others, not so much. Regardless, I feel as though every single one of these names has become an important part of my identity—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.
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
                      I'm from the San Francisco Bay Area. I was born here and I've lived most of my life here. I've been all around the world and experienced all sorts of different cultures and climates; still, the Bay is and has always been my favorite place. Not once have I grown weary of returning home to it.
                   </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:col-start-1 lg:col-end-3">
                   <img src={bananas2Jpg} className="about-me-img" />
                   <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. 2;</span> bananana.</span>
                </div>
 
                <div className="about-me-grid-item row-start-5 md:row-start-3 md:col-start-1 lg:col-end-4">
                   <p className="about-me-paragraph text-black">
                      Currently, I'm a rising senior at the University of California, Davis, completing a major in Biochemistry and Molecular Biology and a minor in Computer Science. My favorite subjects of study so far have been full-stack web development, bioinformatics, genetics, the ethics of technology, and the neuroscience of music. I'm also kind of interested in writing, editing, teaching, and activism.
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
                      I like Kendrick Lamar, Fullmetal Alchemist, 小笼包, and grilled salmon. I like driving fast with the windows down and viewing the world from high places. I dislike candy, soda, humid weather, and mushrooms. Everybody always tells me that mushrooms are amazing and that I simply haven't had a great-tasting mushroom. I doubt it.
                      {/* have modal that pops up when you click the first "like" that talks about more stuff i like and don't like */}
                   </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:col-start-4 lg:col-end-6">
                   <img src={stinkyTofu} className="about-me-img" />
                   <span className="about-me-img-caption"><span className="not-italic font-semibold">Fig. 5; </span>just ate a mushroom, probably, i don't know. friend appears very happy about it.</span>
                </div>
 
                <div className="about-me-grid-item row-start-11 md:row-start-6 md:col-start-2 lg:col-start-3 lg:col-end-6">
                   <p className="about-me-paragraph md:text-right">
                      In my free time, I enjoy programming, working out, cooking, learning new things, editing videos, and playing, composing, arranging, and producing music. I'm quite the novice at skiing, snowboarding, and skateboarding, but I find those activites really fun, too.
                   </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:col-start-1 lg:col-end-3">
                   <img src={rayPiano2017} className="about-me-img" />
                   <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. 6;</span> c. 2017. performing some banger homestuck piano music for a few hundred people. </span>
                </div>
             </div>
          </CenteredFullPageFlexContainer>
       </div>
    )
 }

 export default AboutPage