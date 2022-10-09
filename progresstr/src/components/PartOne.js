
//1st big Rectangle
import React from 'react'
import './PartOne.css'
import StudentReco from './StudentReco'


export default function PartOne(props) {
  const LetsExport="Export as spreadsheet"//dynamic components 1 //canot use ob and boolean values
  return (
  <div className='progressTrackerAll'>
    <div className='progressTrackerLightBackground'>
      <div className="progressTrackerExport">{LetsExport}
      </div>
      <span className="progressTrackerHeader">BEGINNER COURSE</span>   
      <div className='studentRecoContainer'>
        <StudentReco student='AIDEN ANDREWS' levels={['1',`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`]}/>
        <StudentReco student='COUTNEY BRISTOL' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='NAGINI CORTES' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='RAWIRI FLETCHER' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='JAVIER FUEGO' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='TOKIO HAN' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='LISA HORAN' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='ALICE KINDELAN' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='SIMON LAINE' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='NEVEAH MACHENRY' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='HARRY MCGRATH' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='LUCIA MENDEZ' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student='HANU NEPE' levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student="SHENE O'MONAHAN" levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
        <StudentReco student="MARK 0'LEARY" levels={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']}/>
      </div>
    </div>
  </div>);
}