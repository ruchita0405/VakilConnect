import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        {/* Navbar */}
        <Navbar />

        {/* Contact Us Section */}
        <div className='mt-28 mb-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Contact Us</h1>
          <p className='mt-4 text-gray-600'>
            Have any questions or need assistance? Please reach out to us, and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className='mt-12 max-w-lg mx-auto'>
            <div className='mb-6'>
              <label className='block text-left mb-2 text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your name'
              />
            </div>

            <div className='mb-6'>
              <label className='block text-left mb-2 text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
              />
            </div>

            <div className='mb-6'>
              <label className='block text-left mb-2 text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                rows='4'
                placeholder='Write your message here'
              />
            </div>

            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-900 duration-300'
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
