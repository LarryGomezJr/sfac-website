import React from 'react'

const HeroSection = () => {
  return ( 
    
<div className="hero flex items-center justify-center relative h-screen sm:h-[50vh] md:h-[70vh]">
  {/* Background layer */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: 'url(https://stfrancis.edu.ph/college/images/about-img.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur(5px)',
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="hero-content text-white text-center z-10 flex flex-col items-center justify-center w-full">
    <div className="max-w-full sm:max-w-2xl text-center">
      <img
        src="https://stfrancislp.com/landing-lp/img/sfac_logo.png"
        alt="Small Icon"
        className="mx-auto mb-5 w-20 h-20"
      />
      <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-semibold">Welcome to</h1>
      <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl text-red-600 font-semibold whitespace-nowrap max-w-full">
        Saint Francis of Assisi College
      </h1>
      <p className="mb-5">
        045 Admiral, Las Piñas, 1740 Metro Manila, Philippines
      </p>
      <a href="/components/Contacts"  target="_blank"  class="btn btn-primary bg-red-600 p-3 rounded-lg">Contact Us</a>

    </div>
  </div>
</div>






  )
}

export default HeroSection