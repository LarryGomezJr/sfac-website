import React from 'react'

const HeroSection = () => {
  return ( 
    
    <div
    className="hero min-h-[85vh] flex items-center justify-center"
    style={{
      backgroundImage: "url(https://stfrancis.edu.ph/wp-content/uploads/2022/09/IMG_3447-Copy-2.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "brightness(0.9) contrast(1.4)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-white mt-12">
      <div className="max-w-sm">
      </div>
    </div>
  </div>
  


  )
}

export default HeroSection