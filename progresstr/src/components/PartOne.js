
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
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='COUTNEY BRISTOL'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='NAGINI CORTES'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='RAWIRI FLETCHER'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='JAVIER FUEGO'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='TOKIO HAN'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='LISA HORAN'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='ALICE KINDELAN'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='SIMON LAINE'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='NEVEAH MACHENRY'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='HARRY MCGRATH'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='LUCIA MENDEZ'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student='HANU NEPE'/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student="SHENE O'MONAHAN"/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
            <StudentReco student="MARK 0'LEARY"/>
            <StudentReco levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
            
        </div>


       </div>
  </div>

    

  
  )
}