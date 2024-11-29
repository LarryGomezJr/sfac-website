import React from 'react';
import Directory from './Directory';

const Contacts = () => {
  return (
    <>
    <Directory />
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto grid lg:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="relative w-full h-64 lg:h-auto bg-gray-300 rounded-lg overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2297.3745860792014!2d120.99994993762975!3d14.443977993151728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce1d1441cbcd%3A0x7bc346a4a6255599!2sSaint%20Francis%20of%20Assisi%20College%20-%20Las%20Pi%C3%B1as%20Campus!5e0!3m2!1sen!2sph!4v1732614456558!5m2!1sen!2sph"
            style={{
              border: 0,
             
            }}
          ></iframe>
        </div>

        {/* Info and Image Section */}
        <div className="flex flex-col items-center justify-start">
          {/* Enlarged Image */}
          <div className="rounded-lg h-96 overflow-hidden w-full mb-6 lg:h-[28rem]">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://stfrancislp.com/landing-lp/img/loc-map.jpg"
            />
          </div>
          {/* Contact Info */}
          <div className="bg-white p-6 rounded shadow-md w-full">
            <div className="mb-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">045 Admiral, Las Piñas, 1747 Metro Manila</p>
            </div>
            <div className="mb-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">info@stfrancis.edu.ph</a>
            </div>
            <div>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PHONE</h2>
              <p className="leading-relaxed">09339468066</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contacts;
