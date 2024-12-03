import React from 'react'
import Image from 'next/image'

const MEM = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <Image
      src="/sfac1.png"
      width={700}
      height={700}
      alt="Picture of the author"
    />
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 mt-20 font-large font-bold text-gray-900">REQUIREMENTS</h1>
      
      
    </div>
  </div>
</section>
  )
}

export default MEM
