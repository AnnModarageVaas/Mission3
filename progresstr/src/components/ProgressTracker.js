

import React from 'react'

import PartOne from './PartOne'
import PartTwo from './PartTwo'
import StudentReco from './StudentReco'
import ExportCompo from './ExportCompo'
import './ProgressTracker.css'


export default function ProgressTracker() {
  return (
    //calling components
    
    <div>
     <PartOne/>
     
     <PartTwo/>
     
     <ExportCompo/>


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
  )
}
