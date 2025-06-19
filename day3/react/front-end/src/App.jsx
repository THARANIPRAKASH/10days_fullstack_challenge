import { useState } from 'react'

import Welcome from './Welcome'
import Skills from './Skills'

//import './App.css'


function App() {

  return (
    <>
      <h1>Hello</h1>
      <Skills skill={["Mano","Tharani","sridhar"]}/>
      <Welcome name="React" />
    </>
  )
}

export default App
