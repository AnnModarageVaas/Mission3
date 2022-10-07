import React from 'react'
import './StudentReco.css';

export default function StudentReco(props) {
    const CompletedStatement= "Projects completed";
  return (
<div className='StudentReco'>
    <div className='progressTrackerWhiteBox'>

        <div className="progressTrackerName">{props.student}</div>

        <div className='progressTracker'>
            <div className='progresstrackerProjects'>{props.levels}</div>
        </div>

        <div className="progressTrackerCompletedPojects">{CompletedStatement}</div>

    </div>
    </div>

  )
  }