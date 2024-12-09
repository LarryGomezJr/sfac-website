import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sfaclogo from '../../../public/sfaclogo.png'
import Nursing from '../../../public/Nursing.jpg'
import sfacbg from '../../../public/sfacbg.jpg'
import Gcashpayment from '../../../public/Gcashpayment.jpg'
const BsNursing = () => {
  return (
    <section className="text-gray-600 body-font">
     
     {/* BS IN NURSING PHOTO */}
     
    <figure >
     <Image className="items-center justify-center flex-col container-fluid bg-primary py-5 mb-5 hero-header transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 " src={Nursing} width={10000} height={10000} alt="image description"/>
     
</figure>

<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image className="md:w-1/4 md:w-3/6 w-1/4 mb-5 object-cover object-center rounded" alt="Logo" src={sfaclogo}   width={500}
    height={500}/>
    <div className="text-center lg:w-1/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ONLINE & ONSITE ENROLLMENT IS ONGOING</h1>

    </div>
  </div>




     {/* <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
     <Image className="container-fluid bg-primary py-5 mb-5 hero-header" src={Nursing} width={1000} height={1000} alt="image description"/>
     <figcaption className="absolute px-4  text-lg text-white bottom-6">
        <div className="container-fluid bg-primary py-5">
          <div className="container py-5">
          <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-;g-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
          BS in Nursing
            </h1>
        
          </div>
          </div>
          </div>
        </div>
      </figcaption>
    </figure>


    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="Logo" src={sfaclogo}   width={250}
    height={250}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ONLINE & ONSITE ENROLLMENT IS ONGOING</h1>

    </div>
  </div> */}



    {/* REQUIREMENTS */}

      {/* FRESHMEN COLLEGE ADMISSION */}
      
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">REQUIREMENTS</h1>
      <div className="flex mx-auto border-2 border-red-500 rounded overflow-hidden">
      </div>
    </div>
    <div className="flex flex-wrap -m-4 place-content-center " >
      <div className="p-4 xl:w-1/4 xl:w-1/2 w-full ">
        <div className="h-full p-6 rounded-lg border-2 border-red-500 flex flex-col relative overflow-hidden ">
          <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-red-300 leading-none grid grid-cols-2 gap-4 place-content-center h-30 ...">FRESHMEN</h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>ORIGINAL FORM 138
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>ORIGINAL CERTIFICATE OF GOOD MORAL CHARACTER
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>PHOTOCOPY OF PSA AUTHENTICATED BIRTH CERTIFICATE
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>TWO PEICES EACH OF"2X2" AND "1X1" ID PICTURE
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>ALS CERTIFICATE FOR ALS PASSER
          </p>
        </div>
      </div>

            {/* TRANSFEREE */}

            <div className="p-4 xl:w-1/4 xl:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-red-500 flex flex-col relative overflow-hidden">
          <h1 className="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-red-300 grid grid-cols-2 gap-4 place-content-center h-30 ...">
            <span>TRANSFEREES</span>
          </h1>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>RIGINAL TRANSCRIPT OF RECORD (TOR)
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>ORIGINAL CERTIFICATE OF GOOD MORAL CHARACTER
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>RIGINAL HONORABLE DISMISSAL
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>PHOTOCOPY OF PSA AUTHENTICATED BIRTH CERTIFICATE
          </p>
          <p className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>TWO PEICES EACH OF"2X2" AND "1X1" ID PICTURE
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>PHOTOCOPY OF MARRIAGE CERTIFICATE IF MARRIED
          </p>
          <p className="text-xs text-gray-500 mt-3">*Note: Transferee students should be under evaluation first. Should you wish to know the subjects that can be credited or taken, please email titsermardz@gmail.com and sfaccollegeregistrar@yahoo.com.ph with your copy of grades taken or TOR attached.</p>
          <p className="flex items-center text-gray-600 mt-3">
            Indicate Name:
          </p>
          <p className="flex items-center text-gray-600 mt-2">
            Contact number:
          </p>
          <p className="flex items-center text-gray-600 mt-2">
            Preferred course to take in SFAC:
          </p>
          <p className="flex items-center text-gray-600 mt-2">
            Previous course:
          </p>
          
        </div>
        </div>
      </div>
    </div>



    {/* SFAC ONLINE ENROLLMENT */}


    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
    <h1 className="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">SFAC ONLINE ENROLLMENT FOR COLLEGE</h1>
      <div className="flex mx-auto border-2 border-red-500 rounded overflow-hidden">
      </div>
    </div>
      <div className="flex flex-wrap w-full">
        
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="25" fill="currentColor">1</text>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
              <p className="leading-relaxed">Click or Tap 
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSchvifoct7C8RYD907crsblh6n6OcYXUvt2iALY7-SLx-prug/viewform" className="text-red-500"> SIGN-UP!</Link></p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="25" fill="currentColor">2</text>
              </svg>
            </div>
            
            <div className="flex-grow pl-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSchvifoct7C8RYD907crsblh6n6OcYXUvt2iALY7-SLx-prug/viewform">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
              <p className="leading-relaxed">PAY FOR DOWN PAYMENT OR RESERVATION FEE (2,000) </p>
              </Link>
            </div>
          </div>
          
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="25" fill="currentColor">3</text>
                
              </svg>
            </div>
            <div className="flex-grow pl-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSchvifoct7C8RYD907crsblh6n6OcYXUvt2iALY7-SLx-prug/viewform">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
              <p className="leading-relaxed">SEND YOUR PROOF OF PAYMENT</p>
              </Link>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="25" fill="currentColor">4</text>
                
              </svg>
            </div>
            <div className="flex-grow pl-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSchvifoct7C8RYD907crsblh6n6OcYXUvt2iALY7-SLx-prug/viewform">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
              <p className="leading-relaxed">RECEIVED YOUR SCHEDULE AND OFFICIAL RECEIPT VIA EMAIL. </p>
              </Link>
            </div>
          </div>
        </div>
        <Image className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={sfacbg} alt="step" width={500} height={500}/>
      </div>
    </div>



    {/* Payment Option */}

    <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
     
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">PAYMENT OPTION</h1>
      
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Option 1</h2>
        <p class="leading-relaxed text-base font-bold mb-4">EAST WEST BANK</p>
        <ul className="list-none font-bold">
            <li>Payment Details</li>
            <li>Account Name: Saint Francis de Assisi Educational Foundation Inc.</li>
            <li>Account Number:2000-0074-2383</li>
            <li>BranchAlabang Madrigal</li>
        </ul>
        
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">OPTION 2 - GCASH</h2>
        <p class="leading-relaxed text-base mb-4 font-bold">Download HD Payment guide here:</p>
        
<figure class="max-w-lg">
  <Image class="h-auto max-w-full rounded-lg" src={Gcashpayment} height={500} width={500} alt="image description"/>
  
</figure>

       
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 ">OPTION 3-Direct Payment</h2>


        <ul className="list-none font-bold">
            <li>At SFAC - Accounting Office Las Pinas</li>
            <li>Monday to Friday: 7:00am to 4:00pm/Saturday 8:00 to 12:00nn</li>
          
        </ul>
      </div>
      {/* <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">SCHOOL ADDRESS</h2>
        <p class="leading-relaxed text-base mb-4 font-bold text-4xl ">045 Admiral, Talon 3, Las Pinas, 1740 Metro Manila</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div> */}
    </div>
    
  </div>
  </section>
  )
}

export default BsNursing


