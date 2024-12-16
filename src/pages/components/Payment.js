import React from 'react'
import Image from 'next/image'

const Payment = () => {
  return (
        <section className="text-gray-600 body-font justify-center">
  <div className="container px-1 py-24 mx-auto ">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-red-500"></div>
      </div>
      <div className=" sm:flex-row flex-col py-6 mb-12">
      <h1 class="title-font sm:text-6xl  font-medium text-grey  text-center mb-3">Payment Option</h1>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 w-60 overflow-hidden relative">
          <Image alt="content"  layout="fill" src="/eastWest.jpg"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5"> OPTION 1 - Bank Transfer</h2>
        <p className="text-base leading-relaxed mt-2">THROUGH EAST WEST BANK</p>
         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 w-64 overflow-hidden relative">
          <Image alt="content" layout="fill" src="/gCash.jpg"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">OPTION 2 - GCash</h2>
        <p className="text-base leading-relaxed mt-2">THROUGH ACCOUNTING GCASH</p>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
     
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 w-60 overflow-hidden relative">
        <Image alt="content" layout="fill" src="/SFAC.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">OPTION 3 - Direct Payment</h2>
        <p className="text-base leading-relaxed mt-2">AT SFAC-LP ACOUNTING</p>
        
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
      </div>
    </div>
  </div>
</section>
  )
}

export default Payment