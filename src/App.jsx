import React, { useState } from 'react'
import { HomePage, AboutPage } from './Pages'
import logo from './logo.svg'
import './App.css'

function App() {
  function doNameShit() {
    // have a list of names, pick a name, type it out with the cursor flashing and everything, then cursor highlights and selects it and cut it away, pick another name randomly, type that one out, repeat forever
    // choose a name, loop through the number of characters in that name and type out each character with a little bit of sleep, once finished typing it all out, remove all the characters, use sleeps and shit to add some humanity to it
    // then have a function call and call and call again and finally call the first one again to randomly pick a name and start the shit over 
  }

  const [page, setPage] = useState("HomePage")

  return (
    <AboutPage />
  )
}

export default App
