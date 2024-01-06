import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/item'
import Inputform from './components/InputForm.jsx/Inputform'

function App() {


  return (
    <>
      <Item />
      <br />
      <hr />
      <p>5. Write an HTML form that includes a text input field and a submit button and apply a
CSS style to the input field.</p>
      <Inputform />
        
    </>
  )
}

export default App
