import React from "react"
import './index.css'
import { Navbar, Button, ClickableRaidsrcIcon } from './ReusableComponents'

function HomePage(props) {

}

function AboutPage(props) {
   return (
      <div>
         <Navbar />
         <div className="flex justify-center w-full">
            <div className="w-11/12 max-w-screen-xl flex flex-col justify-center">

               <div className="the-big-nicknames-banner rounded-md p-6 mt-36 bg-gray-100 font-serif text-6xl">
                  big raid from the 510<br />.<br />
                  site constru ction in progress BE PATIENT
               </div>
               <p className="text-center text-white py-10 text-xl">
                  Hi. I'm Ray. I've gone by many names in my life. Some of those names were given. Some of them were chosen. Some are funny, and some are cool. Some of them I really like. Others, not so much. But these names reflect how the world sees me, and I've taken them to heart. <br /><br />
                  i'm aiming to make this a react app that shows you various shits if you click on buttons up top like my resume and where you can find me online, scrollable up and down here on the main page and everything. i think i ought to make the things on different pages though so when you click you go to a different page, not just a single page app type thing, gotta have multiple pages to click to and from, but reuse your components to practice designing reactively and efficiently. nah never mind i'll make it a single page react app. it's cooler that way lol  </p>
               <a href="elsewhere.html" className="text-white">wsup</a>
            </div>
         </div>
      </div>
   )
}

export { HomePage, AboutPage }