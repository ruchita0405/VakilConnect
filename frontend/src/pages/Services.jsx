import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <Navbar/>

        {/* Services Section */}
        <div className='mt-28 mb-28 text-center'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Our Services</h1>
          <p className='mt-4 text-gray-600'>
            We provide a range of services to facilitate communication and streamline legal processes for both lawyers and clients.
          </p>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            {/* Service 1: Client Consultation */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-comments text-blue-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Client Consultation</h3>
              <p className='text-gray-600 mt-4'>
                Clients can easily request consultations with lawyers, allowing them to discuss legal matters, ask questions, and seek professional advice.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>Easy booking of consultation appointments.</li>
                <li>Instant messaging or scheduled video calls.</li>
                <li>Case assessment and guidance.</li>
              </ul>
            </div>

            {/* Service 2: Case Registration */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-briefcase text-green-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Case Registration & Management</h3>
              <p className='text-gray-600 mt-4'>
                Lawyers can register new cases and track case progress. Clients stay updated with real-time case status.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>Register cases online with ease.</li>
                <li>Upload and manage case documents.</li>
                <li>Track case status and updates.</li>
              </ul>
            </div>

            {/* Service 3: Calendar & Scheduling */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-calendar-alt text-yellow-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Calendar & Scheduling</h3>
              <p className='text-gray-600 mt-4'>
                Schedule meetings, court hearings, and consultations seamlessly with integrated calendar features.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>View and manage all appointments.</li>
                <li>Automated reminders for important dates.</li>
                <li>Flexible rescheduling options.</li>
              </ul>
            </div>

            {/* Service 4: Secure Messaging */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-envelope text-purple-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Secure Messaging</h3>
              <p className='text-gray-600 mt-4'>
                Exchange confidential information through secure and encrypted messaging between clients and lawyers.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>Confidential, secure communication.</li>
                <li>Instant messaging for quick updates.</li>
                <li>Encrypted file sharing.</li>
              </ul>
            </div>

            {/* Service 5: Document Management */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-file-alt text-red-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Document Management</h3>
              <p className='text-gray-600 mt-4'>
                Manage, upload, and share legal documents securely with access anytime and anywhere.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>Securely upload and share files.</li>
                <li>Organize documents for each case.</li>
                <li>Accessible at all times.</li>
              </ul>
            </div>

            {/* Service 6: Billing & Invoices */}
            <div className='bg-slate-300 shadow-md rounded-lg p-6'>
              <i className="fas fa-file-invoice-dollar text-orange-500 text-4xl mb-4"></i>
              <h3 className='text-xl font-semibold text-gray-800'>Billing & Invoices</h3>
              <p className='text-gray-600 mt-4'>
                Generate and track invoices for legal services, providing transparency and secure payment options.
              </p>
              <ul className='list-disc text-left mt-4 ml-5 text-gray-600'>
                <li>Automated invoice generation.</li>
                <li>Track payment history.</li>
                <li>Secure online payment integration.</li>
              </ul>
            </div>
          </div>

          {/* Back Button */}
          <Link to ="/">
          <button className='mt-12 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-900 duration-300'>
              Back
            </button>
          </Link>
          
          
        </div>
        <Footer/>

      </div>
      
    </>
  )
}

export default Services
