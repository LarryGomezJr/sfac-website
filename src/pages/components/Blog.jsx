import React from 'react';
import SFAC from '../../../public/SFAC.jpg';
import College from '../../../public/College.jpg';
import Copy2 from '../../../public/Copy2.jpg';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  alt="content" 
                  className="object-cover object-center w-full h-full" 
                  src="/SFAC.jpg" 
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    "Building Futures: How the Largest School Network in the South is Leading the Way in Transforming Education Through Innovation, Excellence, and Community Engagement"
                  </h1>
                  <p className="leading-relaxed text-justify mb-3 line-clamp-3">
                  Education is the cornerstone of progress, and in the South, one network stands out as a beacon of innovation, collaboration, and opportunity. As the largest school network in the region, this institution is redefining the concept of quality education in an ever-changing world. By combining cutting-edge technology with inclusive learning strategies and a strong commitment to the community, it is establishing new benchmarks for academic excellence and holistic student development. 
                  With a mission to empower every student, the network utilizes advanced digital tools, modernized curricula, and state-of-the-art facilities to create an environment where learning can thrive. From early childhood education to advanced collegiate preparation, it ensures that students are equipped not just with knowledge but also with critical thinking and problem-solving skills necessary to excel in the 21st century. 
                  Additionally, teachers benefit from ongoing professional development, access to innovative teaching methodologies, and a collaborative ecosystem that encourages continuous improvement.
                  </p>
                  <div>
                    <Link href="https://www.facebook.com/@SFACCollegeLasPinas/" target="_blank">
                    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full 
                    text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">See more</button>
                    </Link>
                  </div>
                  </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  alt="content" 
                  className="object-cover object-center w-full h-full" 
                  src="/College.jpg" 
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  "Driving Success Across Disciplines: How Computer Science, Engineering, Business, and More Are Shaping the Future of Education and Careers"
                  </h1>
                  <p className="leading-relaxed text-justify mb-3 line-clamp-3">
                  In today's rapidly changing world, fields such as Computer Science, Engineering, Business Administration, Nursing, Psychology, Hospitality Management, and Education are leading the way in innovation and opportunity. These disciplines are essential for driving advancements, solving real-world problems, and preparing students and professionals for rewarding careers. From cutting-edge technology in computer science to compassionate care in nursing, each field offers diverse paths to success in a global landscape, contributing uniquely to a brighter future. 
                  Explore how academic excellence and practical skills converge in these vital areas of study.
                  </p>
                  <Link href="https://www.facebook.com/@SFACCollegeLasPinas/" target="_blank">
                  <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full 
                  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">See more</button>
                  </Link>
                  </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img 
              alt="content" 
              className="object-cover object-center w-full h-full" 
              src="/Copy2.jpg" 
              style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
              />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  "Empowering Young Minds: How Innovations in Education Are Transforming Learning and Shaping the Future of Student Success"
                  </h1>
                  <p className="leading-relaxed text-justify mb-3 line-clamp-3">
                  Education is the foundation of progress, and in the South, one network stands out as a leader in innovation, collaboration, and opportunity. As the largest school network in the region, this institution is redefining quality education in an ever-changing world. By integrating cutting-edge technology, inclusive learning strategies, and a strong commitment to the community, it is setting new standards for academic excellence and holistic student development.
                  With a mission to empower every student, the network utilizes advanced digital tools, modernized curricula, and state-of-the-art facilities to create an environment where learning flourishes. From early childhood education to advanced collegiate preparation, it ensures that students are equipped not only with knowledge but also with critical thinking and problem-solving skills necessary for success in the 21st century. 
                  Teachers receive ongoing professional development, access to innovative teaching methodologies, and participate in a collaborative ecosystem that encourages continuo
                  </p>
                  <Link href="https://www.facebook.com/@SFACCollegeLasPinas/" target="_blank">
                  <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full 
                  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">See more</button>
                  </Link>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
