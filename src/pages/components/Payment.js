import React from 'react'

const Payment = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-red-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Payment Option</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5"> OPTION 1-Bank Transfer</h2>
        <p className="text-base leading-relaxed mt-2">EAST WEST BANK</p>
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">OPTION 2-GCASH</h2>
        <p className="text-base leading-relaxed mt-2">SEND NIYO SA GCASH NG SCHOOL</p>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
     
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505/"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">OPTION 3-Direct Payment</h2>
        <p className="text-base leading-relaxed mt-2">At SFAC Accounting Las Piñas</p>
        
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Payment