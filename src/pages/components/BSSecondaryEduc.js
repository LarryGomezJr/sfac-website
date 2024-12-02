import React from 'react'
import { GiClick } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaReceipt } from "react-icons/fa";
import Payment from './Payment';

const BSSecondaryEduc = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600"></h2>
      <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">SFAC ONLINE ENROLLMENT FOR COLLEGE</p>
      <p class="mt-6 text-lg/8 text-gray-600"></p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <GiClick size={'1.5em'} />

              </svg>
            </div>
            STEP 1
          </dt>
          <dd class=" text-base/7 text-black-900">Click or Tap SIGN UP.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <MdOutlinePayments size={'1.5em'}/>
              </svg>
            </div>
            STEP 2
          </dt>
          <dd class=" text-base/7 text-gray-600">Pay for DOWNPAYMENT or RESERVATION FEE (2,000)</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <IoIosSend  size={'1.5em'}/>
              </svg>
            </div>
            STEP 3
          </dt>
          <dd class=" text-base/7 text-gray-600">Send your PROOF OF PAYMENT.</dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base/7 font-semibold text-gray-900">
            <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
              <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <FaReceipt size={'1.5em'}/>
              </svg>
            </div>
            STEP 4
          </dt>
          <dd class=" text-base/7 text-gray-600">Receive your schedule or Official Receipt via email.</dd>
        </div>
      </dl>
    </div>
    <Payment />
  </div>
</div>

  )
}

export default BSSecondaryEduc