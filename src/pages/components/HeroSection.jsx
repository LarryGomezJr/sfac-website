import React from 'react'

const HeroSection = () => {
  return ( 
    <> 
    <section class="text-red-800 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"></div>
      
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
   
    <div class="lg:max-w-xl lg:w-full md:w-full w-full mb-10 md:mb-0">
  <img class="object-cover object-center rounded-lg shadow-lg" alt="hero" 
       src="https://stfrancis.edu.ph/wp-content/uploads/2019/08/DSC08337-1024x768.jpg"/>
</div>

    
  
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center space-y-6">
      <h1 class="title-font text-4xl font-semibold text-gray-900">
        BE ONE OF US
        <br class="hidden lg:inline-block"/>
        University with Holistic Indulgence and Spiritual Culture
      </h1>
      <p class="text-lg leading-relaxed text-gray-600">
        Join us at a University where academic excellence blends with holistic practices. 
        Experience a nurturing environment that encourages personal growth, mental well-being, and spiritual balance.
      </p>
      
  
      <div class="flex justify-center space-x-4">
        <button class="inline-flex text-white bg-red-600 border-2 border-transparent py-2 px-6 focus:outline-none hover:bg-red-700 rounded-lg text-lg">
          Get Started
        </button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-2 border-transparent py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>
  </section>

<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://th.bing.com/th/id/OIP.ZSxKjpTzwi_SumkqqS1NlwHaFf?w=253&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Exemplary Attitudes towards success</h1>
      <p class="mb-8 leading-relaxed">Merging minds into a treasure.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg">Sign in </button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Exit</button>
      </div>
    </div>
  </div>
</section> </>
  )
}

export default HeroSection