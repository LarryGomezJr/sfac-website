import React from 'react'
import logo from "../../../public/sfaclogo.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font drop-shadow-2xl">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={logo} alt="sfac logo" width={40} height={40} />
            <span class="ml-3 text-xl text-red-600">SFAC Las Piñas</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
          045 Admiral, Las Piñas, 1740 Metro Manila, Philippines
          </p>
          <p class="mt-2 text-sm text-gray-500">
          All Rights Reserved
          </p>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            
          </h2>
          <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600">
                YOUR EMAIL
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
              Send
            </button>
          </div>
          <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
            For more feedback & suggestions
            <br class="lg:block hidden" waistcoat green />
          </p>
        </div>
        <div class="flex-grow flex flex-row-reverse md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            Basic Education Department
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us:</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">info@stfrancis.edu.ph</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">(2)8800-3131</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">09339468066</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Higher Education Department
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us:</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">info@stfrancis.edu.ph</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">(2)8800-3131</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">09339468066</a>
              </li>
            </nav>
          </div>
          
        </div>
      </div>
      <div class="bg-red-600">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-white text-sm text-center sm:text-left">
            © 2024 SFAC —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-white ml-1"
              target="_blank"
            >
              ComSoc & Engineering Students{" "}
              <span className="font-bold">( Batch 2023-2024 )</span>
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

  {/* Facebook */}
  <a href="https://www.facebook.com/mysfaclp" target="_blank" class="text-white">
    <svg
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  </a>

  {/* Instagram  */}
  <a href="https://www.instagram.com/mysfacs?igsh=NjZoYWwxOGtjdnh6" target="_blank" class="ml-3 text-white">
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  </a>

  {/* LinkedIn  */}
  <a href="https://www.linkedin.com/company/saint-francis-of-assisi-college/" target="_blank" class="ml-3 text-white">
    <svg
      fill="currentColor"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0"
      class="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path
        stroke="none"
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      ></path>
      <circle cx="4" cy="4" r="2" stroke="none"></circle>
    </svg>
  </a>
</span>
  </div>
    </div>
    </footer>
  );
}

export default Footer