import React, { useState, useEffect } from "react"
import { CenteredFullPageFlexContainer, NewTab } from '../ReusableComponents'
import goldenGate from "../static/goldengate (Large).jpg"
import eggheads from "../static/eggheads (Small).jpg"
import virovek from "../static/virovek_front (Small).jpg"
import rayPiano2017 from "../static/IMG_8031.MOV_snapshot_00.35_[2020.04.09_10.03.38].jpg"
import rayDrummingMonochrome from "../static/me_drumming.jpeg"
import stinkyTofu from "../static/stinky_tofu_lol.jpg"
import { Helmet } from "react-helmet"

function AboutPage(props) {
  const [nameStage, setNameStage] = useState("empty")
  const [nameBoxContents, setNameBoxContents] = useState("")
  const [timeToSelect, setTimeToSelect] = useState(false)
  const [abort, setAbort] = useState(false)
  let runNumber = 0 // i'll use this number to always ensure that i show the names "Raymond" "Ray" and "陈睿明" first 
  let prevFiveNames = [".", ".", ".", ".", "."]
  let newName = "sup"

  useEffect(() => {
    setAbort(false)
    return function cleanThatShitUpDawg() {
      setNameStage("stop")
      setAbort(true)
    }
  }, [])

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
        "Raymond", "Ray", "Raymond Louis Chen", "陈睿明", "Ray Louis", "Ramón", "Lemon", "弟弟", "Lei Mung", "Waymon Zen", "Roy", "Mistah Chen", "Razor", "Raimund", "Raymie", "Ramin D", "Raid", "raidsrc", "big raid from the 510", "Raymond's Dictionary", "raymawn", "Golden Dragon", "Fire Feet", "Chico", "Bite Me", "A Drop of Golden Sun ☀️", "Drummer @ Sonar Alchemy", "1337+", "Big Head", "Rayon", "Ray C", "Rude Custard",
      ]
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      prevFiveNames.shift()
      prevFiveNames.push(newName)
      while (prevFiveNames.includes(newName)) {
        let index = 0
        if (runNumber === 0) {
          index = 0
          runNumber = 1
        } else if (runNumber === 1) {
          index = 1
          runNumber = 2
        } else if (runNumber === 2) {
          index = 3
          runNumber = 420
        } else {
          index = getRandomInt(0, namesList.length)
        }
        newName = namesList[index]
      }
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

  const aboutSections = [
    { statement: "Hey. I'm Raymond. I usually go by Ray, but people have known me by many names. Most of these names were given to me. Some of them are silly, and some I think are pretty cool. Regardless, I feel as though every single one of these names has become an important part of my identity—as much an essential part of who I am as my hometown, my date of birth, or my favorite color.", image: rayDrummingMonochrome, figureNumber: 1, caption: "me, drumming." },
    { statement: "I was born in the San Francisco Bay Area and I've lived most of my life here. I've been all around the world and experienced all sorts of different cultures and climates; still, the Bay is and has always been my favorite place. Not once have I grown weary of returning home to it.", image: goldenGate, figureNumber: 2, caption: "the Golden Gate Bridge." },
    { statement: "Currently, I'm a senior at the University of California, Davis. I'm majoring in biochemistry and molecular biology and minoring in computer science. My favorite subjects of study so far have been computational structural bioinformatics, full-stack web development, genomics, and the neuroscience of music. I'm also kind of interested in writing, editing, teaching, and activism.", image: eggheads, figureNumber: 3, caption: "Egghead - Yin & Yang, outside the music building on the Davis campus." },
    { statement: "After I graduate, I plan to spearhead a web and communications technology advancement initiative at Virovek, a small Hayward-based gene therapy manufacturing company founded and directed by my beloved mother and father. Also gonna help out with the biological manufacturing pipeline when needed. I plan to continue doing musician stuff as well: street performing, arranging tunes, composing, stuff like that.", image: virovek, figureNumber: 4, caption: "the front of Virovek's office." },
    { statement: "I like Kendrick Lamar, Chinese food, ice cold spring water, and exploring the unknown. I like driving fast with the windows down and viewing the world from high places. I dislike candy, soda, humid weather, and mushrooms. Everybody always tells me that mushrooms are amazing and that I simply haven't had a great-tasting mushroom. I doubt it. I've tried a lot of mushrooms and they all suck.", image: stinkyTofu, figureNumber: 5, caption: "trying stinky tofu, a Chinese fermented tofu. it was alright, I suppose." },
    { statement: "In my free time, I enjoy programming, lifting weights, cooking, learning new things, editing videos, and making music. I also really enjoy skiing, snowboarding, and skateboarding, even though I don't typically get to do those things very often.", image: rayPiano2017, figureNumber: 6, caption: "me in 2017, performing Homestuck's \"Showtime - Piano Refrain\" for a few hundred people at a talent show." },
  ]
  return (
    <div className="about-page bg-zinc-500 pb-32">
      <Helmet>
        <meta charset="utf-8" />
        <title>About</title>
        <meta name="description" content="About. Learn a little about who I am, where I'm from, and what I'm like." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <CenteredFullPageFlexContainer>
        <h1 className="mb-5 px-2 text-white">
          About
        </h1>
        <div className="flex justify-center mb-8">
          <div className="w-900px the-big-nicknames-banner rounded-md p-5 bg-gray-100 font-serif text-xl font-bold shadow-md tiny-screen:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl xl:mb-4 2xl:text-5xl" >
            <NameInputTypingEffectBox className="px-2 py-2 " onLoad={setTimeout(() => doNameShit(), 420)} timeToSelect={timeToSelect} />
          </div>
        </div>


        {
          aboutSections.map(({ statement, image, figureNumber, caption }, index) => {
            let alterAlignment = ""
            let alterFlexJustify = ""
            let alterTextAlign = ""
            if (index % 2 === 0) {
              // image left text right
              alterFlexJustify = "justify-start"
              alterTextAlign = "text-left"
            } else {
              // image right text left 
              alterAlignment = "md:order-first"
              alterFlexJustify = "justify-end"
              alterTextAlign = "text-right"
            }
            return (
              <div className={"flex flex-col md:flex-row py-8 w-full " + alterFlexJustify}>
                <div className={"order-last md:w-6/12 lg:w-5/12 xl:w-6/12 px-4 " + alterAlignment}>
                  <p className={"pt-6 md:pt-0 md:text-lg w-wqhd:text-2xl " + alterTextAlign}>
                    {statement}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center md:w-5/12 xl:w-4/12 px-4 md:order-2">
                  <img src={image} className="w-11/12 max-h-80 max-w-xs md:max-h-96 md:max-w-lg object-contain" />
                  <span className="about-me-img-caption text-white"><span className="not-italic font-semibold">Fig. {figureNumber} &nbsp; </span>{caption}</span>
                </div>
              </div>
            )
          })
        }
      </CenteredFullPageFlexContainer >
    </div >
  )
}

export default AboutPage