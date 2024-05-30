import React from 'react';
import './label.css'

export default function Label({text1, text2}) {
  return (
    <div id="restricaoMidia">
        <label >{text1}</label><br/>
        <label >{text2}</label>


      
    </div>
  )
}
