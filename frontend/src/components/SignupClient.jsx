import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignupClient() {
  const [isVerified, setIsVerified] = useState(false); // State to track if Aadhaar and contact number are verified
  const navigate = useNavigate(); // Initialize navigate inside your component

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Function to handle verification
  const handleVerify = (data) => {
    const { aadhar, contact } = data;

    // Simulating verification
    if (aadhar && contact) {
      setIsVerified(true); // Set verification status to true
      alert('Aadhaar and Contact Number verified!'); // Simulate success
    } else {
      alert('Please enter valid Aadhaar and Contact Number');
    }
  };

  // Passwords validation
  const password = watch("password", "");

  // Handle form submission
  const onSubmit = (data) => {
    if (isVerified) {
      console.log('Form data:', data); // Replace with actual sign-up logic
      alert("Signup Successful!"); // Simulate success
      // Redirect or perform any further actions
      navigate('/'); // Example of navigating to home after signup
    }
  };

  return (
    <div>
      <div id="my_modal_2" className="flex h-screen items-center justify-center">
        <div className="modal-box">
          <h3 className="font-semibold text-2xl">Sign Up as Client</h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Aadhaar */}
            <div className='mt-4 space-y-2'>
              <span>Aadhaar Number</span>
              <br />
              <input
                type="text"
                placeholder='Enter your Aadhaar number'
                className={`mt-4 px-3 py-2 border rounded-md ${errors.aadhar ? 'border-red-500' : ''}`}
                {...register("aadhar", { 
                  required: "Aadhaar is required", 
                  pattern: { value: /^[0-9]{12}$/, message: "Enter a valid 12-digit Aadhaar" } 
                })}
              />
              {errors.aadhar && <span className="text-red-500 text-sm">{errors.aadhar.message}</span>}
            </div>

            {/* Contact Number */}
            <div className='mt-4 space-y-2'>
              <span>Contact Number</span>
              <br />
              <input
                type="text"
                placeholder='Enter your contact number'
                className={`mt-4 px-3 py-2 border rounded-md ${errors.contact ? 'border-red-500' : ''}`}
                {...register("contact", { 
                  required: "Contact number is required", 
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit contact number" } 
                })}
              />
              {errors.contact && <span className="text-red-500 text-sm">{errors.contact.message}</span>}
            </div>

            {/* Verify Button */}
            <div className='mt-6'>
              <button
                type="button"
                className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 duration-200'
                onClick={handleSubmit(handleVerify)} // Use handleSubmit to trigger form validation
              >
                Verify Aadhaar & Contact
              </button>
            </div>

            {/* Password (disabled until verified) */}
            <div className='mt-8 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Create a password'
                className={`px-2 py-2 mt-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
                disabled={!isVerified} // Disabled until verified
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" }
                })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            {/* Confirm Password (disabled until verified) */}
            <div className='mt-4 space-y-2'>
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                placeholder='Confirm your password'
                className={`px-2 py-2 mt-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : ''}`}
                disabled={!isVerified} // Disabled until verified
                {...register("confirmPassword", {
                  validate: (value) => value === password || "Passwords do not match",
                  required: "Confirm password is required"
                })}
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </div>

            <div className="modal-action mt-10 flex justify-around">
              <button
                type="submit"
                className={`${
                  isVerified ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'
                } text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200`}
                disabled={!isVerified} // Disable sign-up button until verification
              >
                Sign Up
              </button>

              <button
                type="button"
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

export default SignupClient;
