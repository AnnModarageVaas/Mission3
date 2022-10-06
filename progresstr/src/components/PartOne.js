
//1st big Rectangle
import React from 'react'
import './PartOne.css'


export default function PartOne(props) {
  const LetsExport="Export as spreadsheet"//dynamic components 1 //canot use ob and boolean values
  const CompletedStatement= "projects completed";
  return (
  
  <div className='contentAll'>

      <div className='secondBox'>
          <div className="exportpdf">{LetsExport}</div>

             <span className="header">BEGINNER COURSE</span>
          </div>
      <div className='studentAll'>
             <div className="ProgressBarName">{props.student}</div>
              <div className="CompletedPojects">{CompletedStatement}</div>

       </div>
  </div>

    

  
  )
}
