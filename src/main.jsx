import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./css/animationStyles.css"
import "./css/otherStyles.css"
import "./css/index_compiled.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <App />
    </Router >
  </React.StrictMode>
  ,
  document.getElementById('root')
)
