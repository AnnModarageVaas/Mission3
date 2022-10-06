import React from 'react'
import './StudentReco.css'

export default function StudentReco(props) {
    const CompletedStatement= "projects completed";
  return (
<div className='progressTrackerStudent'>
    <div className='progressTrackerWhiteBox'>
      <div className="progressTrackerName">{props.student}</div>
    <div className='progressTracker'></div>
     <div className="progressTrackerCompletedPojects">{CompletedStatement}</div>
     </div>
    </div>
  )
  }