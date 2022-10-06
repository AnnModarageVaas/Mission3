
//1st big Rectangle
import React from 'react'
import './PartOne.css'
import StudentReco from './StudentReco'


export default function PartOne(props) {
  const LetsExport="Export as spreadsheet"//dynamic components 1 //canot use ob and boolean values
  return(
  
  <div className='progressTrackerAll'>

      <div className='progressTrackerLightBackground'>

          <div className="progressTrackerExport">{LetsExport}</div>

            <span className="progressTrackerHeader">BEGINNER COURSE</span>
         
            <div className='studentRecoContainer'>
            <StudentReco student='AIDEN ANDREWS'/>
            <StudentReco student='COUTNEY BRISTOL'/>
            <StudentReco student='NAGINI CORTES'/>
            <StudentReco student='RAWIRI FLETCHER'/>
            <StudentReco student='JAVIER FUEGO'/>
            <StudentReco student='TOKIO HAN'/>
            <StudentReco student='LISA HORAN'/>
            <StudentReco student='ALICE KINDELAN'/>
            <StudentReco student='SIMON LAINE'/>
            <StudentReco student='NEVEAH MACHENRY'/>
            <StudentReco student='HARRY MCGRATH'/>
            <StudentReco student='LUCIA MENDEZ'/>
            <StudentReco student='HANU NEPE'/>
            <StudentReco student="SHENE O'MONAHAN"/>
            <StudentReco student="MARK 0'LEARY"/>

        
        </div>
       </div>
  </div>

    

  
  )
}