import React from 'react'
import Requirements from './Requirements'
import Enrollment from './Enrollment'
import Steps from './Steps'
import Payment from './Payment'

const ABPsychology = () => {
  return (
    <div className='bg-white'>
       
        <Enrollment/>
        <Requirements/>
        <Steps/>
        <Payment/>
    </div>
  )
}

export default ABPsychology