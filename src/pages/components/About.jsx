import React from 'react'

const About = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 border border-red-500 p-8 flex-col">
          <div class="flex items-center place-content-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-red-600 text-xl title-font font-medium">VISION</h2>
          </div>
            <div class="inline-block h-1 w-10 mx-auto rounded bg-red-400 mt-2 mb-5">
              <span class="inline-block h-1 w-20 rounded bg-red-400 mt-2 mb-2"></span>
            </div>
            <p class="leading-relaxed text-base text-justify text-gray-900 text-justify text-lg title-font font-sm">Saint Francis of Assisi College (SFAC) is a hub for progressive and holistic education, guided by the virtues of Saint Francis of Assisi that empowers learners with a solid academic foundation enriched by physical, spiritual, and cultural advancement.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 border border-red-500 p-8 flex-col">
          <div class="flex place-content-center items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-red-600 text-xl title-font text-base font-medium">MISSION</h2>
          </div>
          <div class="inline-block h-1 w-10 mx-auto rounded bg-red-400 mt-2 mb-5"><span class="inline-block h-1 w-20 rounded bg-red-400 mt-2 mb-2"></span></div>
          <div class="flex-grow">
            
            <div class="flex-grow text-gray-900 text-lg title-font font-sm mb-5">In line with this vision, SFAC is fully committed to:</div>
            <div class="flex-grow text-justify text-gray-900 text-justify text-lg title-font font-sm">1. Deliver relevant, well-designed quality education from the Basic Education to the Graduate level, through its corps of highly-trained faculty.</div>
            <div class="flex-grow text-justify text-gray-900 text-justify text-lg title-font font-sm">2. Nurture an ideal environment that hones students for academic success, molds them in cultural awareness, and prepares them for sustained participation and leadership in sports and athletics.</div>
            <div class="flex-grow text-justify text-gray-900 text-justify text-lg title-font font-sm">3. Incorporate a values system in the curriculum that promotes love of God, family, and country.</div>
            <div class="flex-grow text-justify text-gray-900 text-justify text-lg title-font font-sm">4. Integrate time-honored Filipino values in the pursuit of personal advancement.</div>
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 border border-red-500 p-8 flex-col">
          <div class="flex place-content-center items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-red-600 text-xl title-font font-medium">CORE VALUES</h2>
          </div>
          <div class="inline-block h-1 w-10 mx-auto rounded bg-red-400 mt-2 mb-5"><span class="inline-block h-1 w-20 rounded bg-red-400 mt-2 mb-2"></span></div>
          <div class="flex-grow ">

            <div class="flex-grow  text-gray-900 text-lg title-font font-sm mb-5">SFAC is guided by these core values:</div>
            <div class="flex-grow text-justify text-gray-900 leading-relaxed text-base">
              <span className="bg-gradient-to-r text-red-600 text-lg font-bold bg-clip-text">Commitment </span>
               there is a commitment by each and every member of the Franciscan community to the vision set forth by the Institution.</div>
            <div class="flex-grow text-justify text-gray-900 leading-relaxed text-base">
              <span className="bg-gradient-to-r text-red-600 text-lg font-bold bg-clip-text">Opportunity </span>
               there is a constant desire to seize the opportunity to become better members and leaders of the community, as well as contributors to nation- building.</div>
            <div class="flex-grow text-justify text-gray-900 leading-relaxed text-base">
            <span className="bg-gradient-to-r text-red-600 text-lg font-bold bg-clip-text">Respect </span>
               there is an utmost respect for one's self, peers, and co-stakeholders in the Franciscan community.</div>
            <div class="flex-grow text-justify text-gray-900 leading-relaxed text-base">
            <span className="bg-gradient-to-r text-red-600 text-lg font-bold bg-clip-text">Excellence </span>
               there is a drive to always make effective use of talents and skills in order to produce outputs of the highest quality.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default About