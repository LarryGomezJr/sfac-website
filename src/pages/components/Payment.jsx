import React from 'react'
import Image from 'next/image'

const Payment = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-red-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">PAYMENT OPTIONS</h1>
          <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
        </div>
      </div>
      <div className='gap-4'>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-4 place-content-center">
        <div class="p-4 md:w-3/12 sm:mb-0 mb-6 bg-red-700 rounded-lg drop-shadow-xl">
          <div class="rounded-lg h-55 overflow-hidden">
            <Image src="/eastwest.jpg" alt="eastwest logo" width={1500} height={1500}/>
            
          </div>
          <h2 class="text-xl font-bold title-font text-slate-50 mt-5">OPTION 1 - BANK DEPOSIT</h2>
          <p class="text-base leading-relaxed mt-2 text-slate-50"><span className='font-semibold'>Account Name:</span> <br/>Saint Francis de Assisi Educational Foundation Inc.
                                                    <br/> <span className='font-semibold'>Account Number:</span> 2000-0074-2383
                                                    Branch Alabang Madrigal</p>
          
        </div>
        <div class="p-4 md:w-3/12 sm:mb-0 mb-6 bg-red-700 rounded-lg drop-shadow-xl">
          <div class="rounded-lg h-55 overflow-hidden">
            <Image src="/steps.jpg" alt="gcash logo" width={500} height={500}/>
          </div>
          <h2 class="text-lg font-bold title-font text-slate-50 mt-5">OPTION 2 - GCASH PAYMENT</h2>
          <p class="text-base leading-relaxed mt-2 text-slate-50">Choose Bank Transfer then choose Eastwest Bank. 
                                                    <br/> <span className='font-semibold'>Account Name:</span> <br/>Saint Francis de Assisi Educational Foundation Inc.
                                                   <br/> <span className='font-semibold'>Account Number:</span> 2000-0074-2383
                                                    Branch Alabang Madrigal.</p>
         
        </div>
        <div class="p-4 md:w-3/12 sm:mb-0 mb-6 bg-red-700 rounded-lg drop-shadow-xl">
          <div class="rounded-lg h-55 overflow-hidden">
            <Image src="/bac.jpg" alt="bac logo" width={1500} height={1500}/>
          </div>
          <h2 class="text-xl font-bold title-font text-slate-50 mt-5">OPTION 3 - DIRECT TO OFFICE</h2>
          <p class="text-base leading-relaxed mt-2 text-slate-50">At SFAC - Accounting Office Las Piñas
                                                    Monday to Friday: 7:00am to 4:00pm / Saturday 8:00am to 12:00nn
                                                                                                    </p>
          
        </div>
      </div>
      
      </div>
    </div>
  </section>
  )
}

export default Payment