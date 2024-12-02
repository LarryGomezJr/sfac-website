import React from 'react'
import Image from 'next/image'
import enrollment from '../../../public/enrollment.png';
// import binary from '../../../public/binary.png'



const Enrollment = () => {
  return (
    <div>
    <div className='hero-header'>
      <div className='text-overlay'>
        <h1>
            BS in Computer Science
        </h1>
      </div>
      
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