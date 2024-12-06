import React, { useState } from 'react';


const HigherEduc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    arrow: {
      marginLeft: '5px',
      fontSize: '12px',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    dropdownMenuItem: {
      color: '#333',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
  };

  return (
    
    <div class="text-gray-600 body-font overflow-hidden">
  <div class="container px-1 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        <p class="text-red-600 text-3xl font-bold">OFFERED</p>
        <p class="text-black text-5xl font-bold font-large"> PROGRAMS</p>
      </h1>
    </div>
    <div class="flex flex-wrap mx-auto place-content-center -m-4">
    <div class="p-3 py-20 xl:w-1/4 md:w-1/2 w-full">
        <div class="p-4 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden group block rounded-lg bg-white ring-1 ring-slate-900 shadow-lg space-y-3 hover:bg-red-600 hover:ring-sky-500">
        <button class="flex items-center font-bold text-white bg-red-600 border-0 py-2 px-4 w-full focus:outline-none text-xl rounded group-hover:text-black">COLLEGIATE PROGRAMS
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Nursing
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Electrical Engineering
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Electronics Engineering
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Computer Engineering
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Computer Science
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Science in Business Administration
          </p>
          <div class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            <div 
                style={styles.dropdown}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                  <p class="text-lg text-gray-600 mb-2 group-hover:text-white">
                    <button style={styles.dropdownToggle}>
                      Bachelor of Science in Hospitality Management
                      <span style={styles.arrow}>▼</span>
                    </button>
                  </p>
                  {isOpen && (
                <ul style={styles.dropdownMenu}>
                  <div class="flex items-center text-sm">
                    <li><a href="#" style={styles.dropdownMenuItem}>Major in Psychology</a></li>
                  </div>
                </ul>
                )}
          </div>
          </div>
          <div class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7 mt-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            <div 
                style={styles.dropdown}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                  <p class="flex items-center text-lg text-gray-600 group-hover:text-white">
                    <button style={styles.dropdownToggle}>
                      Bachelor of Arts
                      <span style={styles.arrow}>▼</span>
                    </button>
                  </p>
                  {isOpen && (
                <ul style={styles.dropdownMenu}>
                  <div class="lex items-center text-sm">
                    <li><a href="#" style={styles.dropdownMenuItem}>Major in Psychology</a></li>
                  </div>
                </ul>
                )}
          </div>
          </div>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Elementary Education/ Teacher Certification Program
          </p>
          <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black mb-7">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Bachelor of Secondary Education/ Teacher Certification Program
          </p>
        </div>
      </div>
      <div class="p-3 py-20 xl:w-1/4 md:w-1/2 w-full">
      <div class="p-4 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden group block rounded-lg bg-white ring-1 ring-slate-900 shadow-lg space-y-3 hover:bg-red-600 hover:ring-sky-500">
        <button class="flex items-center font-bold text-white bg-red-600 border-0 py-2 px-4 w-full focus:outline-none text-xl rounded group-hover:text-black">GRADUATE PROGRAMS
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
          <p class="text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Master In Business Administration
          </p>
          <p class="text-lg text-gray-600 mb-20 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Master of Arts in Education
          </p>
          <p class="text-lg text-gray-600 mb-2 group-hover:text-white">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-600 text-white rounded-full flex-shrink-0 group-hover:text-black">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Major in Education Management
          </p>
          
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HigherEduc