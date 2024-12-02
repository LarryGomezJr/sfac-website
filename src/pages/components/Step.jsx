import React from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const step = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-aut">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 border-gray-900 sm:flex-row flex-col">
     
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-500 text-md title-font font-medium text-justify">Note: Transferee students should be under evaluation first. Should you wish to know the subjects that can be credited or taken, please email titsermardz@gmail.com and sfaccollegeregistrar@yahoo.com.ph with your copy of grades taken or TOR attached.
        </h2>
      </div>
    </div>

        <div class="bg-gray py-2">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div class="mx-auto mt-16 max-w-2xl sm:mt-10 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 place-content-center  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16 md:ml-20">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                  <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <MdDriveFileRenameOutline size={'1.5em'}/>
                  </svg>
                </div>
                Indicate Name:
              </dt>
            </div>
            <div class="relative pl-16 md:ml-20">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                  <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <IoIosContact size={'1.6em'}/>
                  </svg>
                </div>
                Contact number:
              </dt>
            </div>
            <div class="relative pl-16 md:ml-20">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                  <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <MdOutlineContactSupport size={'1.5em'}/>
                  </svg>
                </div>
                Preferred course to take in SFAC:
              </dt>

            </div>
            <div class="relative pl-16 md:ml-20">
              <dt class="text-base/7 font-semibold text-gray-900">
                <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                  <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <IoMdContacts size={'1.6em'}/>
                  </svg>
                </div>
                Previous course:

              </dt>
             
            </div>
          </dl>
        </div>
      </div>
    </div>

  </div>
</section>
  )
}

export default step