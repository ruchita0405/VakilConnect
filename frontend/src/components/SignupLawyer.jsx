import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SignupLawyer() {
  const [isVerified, setIsVerified] = useState(false); // State to track if Bar Council ID and contact number are verified
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize react-hook-form
  const navigate = useNavigate(); // Initialize navigate inside your component

  // Function to handle verification
  const handleVerify = (data) => {
    // In a real scenario, this would call an API to verify Bar Council ID and contact number
    if (data.barCouncilID && data.contact) {
      setIsVerified(true); // Set verification status to true
      alert('Bar Council ID and Contact Number verified!'); // Simulate success
    } else {
      alert('Please enter valid Bar Council ID and Contact Number');
    }
  };

  return (
    <div>
      <div id="my_modal_3" className="flex h-screen items-center justify-center border-[2px]">
        <div className="p-5">
          <h3 className="font-semibold text-2xl">Sign Up as Lawyer</h3>

          {/* Bar Council ID */}
          <form onSubmit={handleSubmit(handleVerify)}>
            <div className='mt-4 space-y-2'>
              <span>Bar Council ID</span>
              <br />
              <input
                type="text"
                placeholder='Enter your Bar Council ID'
                className='mt-4 px-3 py-2 border rounded-md'
                {...register('barCouncilID', { required: true })} // Register input with validation
              />
              {errors.barCouncilID && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Contact Number */}
            <div className='mt-4 space-y-2'>
              <span>Contact Number</span>
              <br />
              <input
                type="text"
                placeholder='Enter your contact number'
                className='mt-4 px-3 py-2 border rounded-md'
                {...register('contact', { required: true })} // Register input with validation
              />
              {errors.contact && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Verify Button */}
            <div className='mt-6'>
              <button
                type="submit" // Change button type to submit
                className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200'
              >
                Verify Bar Council ID & Contact
              </button>
            </div>

            {/* Password (disabled until verified) */}
            <div className='mt-8 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Create a password'
                className="px-2 py-2 mt-2 border rounded-md"
                disabled={!isVerified} // Disabled until verified
              />
            </div>

            {/* Confirm Password (disabled until verified) */}
            <div className='mt-4 space-y-2'>
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                placeholder='Confirm your password'
                className="px-2 py-2 mt-2 border rounded-md"
                disabled={!isVerified} // Disabled until verified
              />
            </div>

            <div className="modal-action mt-10 flex justify-around">
              <button
                className={`${
                  isVerified ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'
                } text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200`}
                disabled={!isVerified} // Disable sign-up button until verification
              >
                Sign Up
              </button>

              <button
                className="btn px-3 py-2"
                onClick={() => navigate('/')} // Redirect to the home page on click
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupLawyer;
