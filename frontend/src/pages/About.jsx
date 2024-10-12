import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        {/* Navbar */}
        <Navbar />

        {/* About Us Section */}
        <div className='mt-28 mb-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl text-slate-200 font-semibold'>About Us</h1>
          <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
            The Client-Lawyer Communication System is designed to streamline communication between clients and legal professionals. Our platform facilitates consultations, case management, and scheduling, providing a seamless experience for both parties.
          </p>

          {/* Developer Info */}
          <div className='mt-12 text-left max-w-lg mx-auto'>
            <h2 className='text-xl font-semibold text-white'>Developer Information</h2>
            <p className='mt-4 text-gray-500'>
              <strong>Name:</strong> Ruchita Kamble <br />
              <strong>Degree:</strong> B.Tech in Computer Engineering <br />
              <strong>Institute:</strong> Vishwakarma Institute of Technology <br />
            </p>
            <p className='mt-6 text-gray-600'>ehfuweqh fiuehfiuweh ihewiufh we</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
