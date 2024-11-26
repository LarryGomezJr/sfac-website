import React from 'react'

const Directory = () => {
  return (
<div>
<div class="relative overflow-x-auto container mx-auto mt-20">
<button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">LAS PINAS CAMPUS</button>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Office / Department	
                </th>
                <th scope="col" class="px-6 py-3">
                Focal Person	
                </th>
                <th scope="col" class="px-6 py-3">
                Contact Number	
                </th>
                <th scope="col" class="px-6 py-3">
                Email Address
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Office of the Campus Director	
                </th>
                <td class="px-6 py-4">
                ARIES C. ROLDAN, PhD
                </td>
                <td class="px-6 py-4">
                (02) 8280 9498
                </td>
                <td class="px-6 py-4">
                laspinas@stfrancis.edu.ph
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                K-10 Office	
                </th>
                <td class="px-6 py-4">
                ROGELIO BRITANICO, LPT
                Principal
                </td>
                <td class="px-6 py-4">
                (02) 8696 7783	
                </td>
                <td class="px-6 py-4">
                laspinas.k10@stfrancis.edu.ph
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                SHS Office	
                </th>
                <td class="px-6 py-4">
                MICHAEL I. HALAMAN, LPT, MAEd
                Principal
                </td>
                <td class="px-6 py-4">
                (02) 8280 9498	
                </td>
                <td class="px-6 py-4">
                laspinas.shs@stfrancis.edu.ph
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
</div>
  )
}

export default Directory