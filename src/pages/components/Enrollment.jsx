import React from 'react'
import Image from 'next/image'
import enrollment from '../../../public/enrollment.png';
import number from '../../../public/number.png'

const Enrollment = () => {
  return (
    <div className='py-24' >
    <div className='container-fluid bg-primary py-5 mb-5 hero-header'>
      <h1>
        ufhioefeh
      </h1>
    </div>
    <div className='col-lg-6 order-1 order-lg-2 aos-init aos-animate   '>
      
      <center>
      <Image className="w-f " src={enrollment} alt="enrollment" width={800} height={800} ></Image>
      </center>
    </div>
    </div>
  )
}

export default Enrollment