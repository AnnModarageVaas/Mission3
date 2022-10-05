import React from 'react'
import './StudentReco.css'

export default function StudentReco(props) {
    const CompletedStatement= "projects completed";
  return (
    
    <div>
      <div className="ProgressBarName">{props.student}</div>
      <div className="CompletedPojects">{CompletedStatement}</div>

    </div>//prop1
  )
}
