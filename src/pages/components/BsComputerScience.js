import React from 'react'
import Requirements from './Requirements'
import Enrollment from './Enrollment'
import Steps from './Steps'
import Payment from './Payment'

const BsComputerScience = () => {
  return (
    <div className='bg-white'>
       
        <Enrollment/>
        <Requirements/>
        <Steps/>
        <Payment/>
    </div>
  )
}

export default BsComputerScience