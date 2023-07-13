import React, { Component } from 'react'
import Abaut from "../src/pages/js/Abaut"

import './App.css'
import Blog from './pages/js/Blog'
import Services from './pages/js/Services'
import Ourteam from './pages/js/Ourteam'

export default class App extends Component {
  render() {
    return (
      <div>
{/* <Abaut/> */}
{/* <Services/> */}
<Ourteam/>
      </div>
    )
  }
}
