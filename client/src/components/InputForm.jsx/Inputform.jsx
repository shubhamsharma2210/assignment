import React from 'react'
import './inputfrom.css'

const Inputform = () => {
  return (
    <div>
    <form action="/submit" method="post"> 
    <label for="textInput">Enter text:</label>
    <input type="text" id="textInput" name="textInput" class="styledInput" placeholder="Type here..."/>
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Inputform
