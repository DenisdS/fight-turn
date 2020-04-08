import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'

import App from "../components/templates/App"

const Root = () => {
  return(
    <Router>
      <App />
    </Router>
  )
}

export default Root;
