
//1st big Rectangle
import React from 'react'
import './PartOne.css'


export default function PartOne(props) {
  const LetsExport="Export as spreadsheet"//dynamic components 1 //canot use ob and boolean values
  const CompletedStatement= "projects completed";
  return (
  
  <div className='progressTrackerAll'>

      <div className='progressTrackerLightBackground'>

          <div className="progressTrackerExport">{LetsExport}</div>

             <span className="progressTrackerHeader">BEGINNER COURSE</span>
         


      <div className='progressTrackerStudent'>
        <div className='ProgresprogressTrackerWhiteboxsBar'>
             <div className="progressTrackerName">{props.student}</div>
             <div className='progressTracker'></div>
              <div className="progressTrackerCompletedPojects">{CompletedStatement}</div>
              </div>
        </div>
       </div>
  </div>

    

  
  )
}
