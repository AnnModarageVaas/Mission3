
//1st big Rectangle
import React from 'react'
import './PartOne.css'

const BigBox= new URL('./icons/BoxOneO.svg',import.meta.url)
export default function PartOne() {
  return(
    <div>
      <div className="BoxOneSvg">
       <img src={BigBox}/>
      </div>
<h1>hello</h1>
    </div>
  )
}
