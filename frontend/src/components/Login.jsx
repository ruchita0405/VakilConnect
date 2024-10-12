import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); // This will log the form data when the form is submitted

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          
          {/* Wrap the fields inside a form */}
          <form onSubmit={handleSubmit(onSubmit)}>  
            {/* Select user type */}
            <div className='mt-4 space-y-2'>
              <span>Are you a Lawyer or Client?</span>
              <br/>
              <select className="px-3 py-2 border rounded-md" {...register("userType", { required: true })}>
                <option value="client">Client</option>
                <option value="lawyer">Lawyer</option>
              </select>
              {errors.userType && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            {/* Aadhar / Bar Council ID */}
            <div className='mt-4 space-y-2'>
              <span>Enter Aadhar (Client) / Bar Council ID (Lawyer)</span>
              <br/>
              <input
                type="text"
                placeholder='Enter your ID'
                className='mt-4 px-3 py-2 border rounded-md'
                {...register("id", { required: true })}
              />
              {errors.id && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br/>
              <input
                type="password"
                placeholder='Enter your password'
                className="px-2 py-2 mt-2 border rounded-md"
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Sign-up redirect */}
            <div className='mt-6 text-sm space-x-2'>
              <Link to='/signup-client' className='underline text-blue-500 cursor-pointer'>
                Sign Up as Client
              </Link>
              <span>or</span>
              <Link to='/signup-lawyer' className='underline text-blue-500 cursor-pointer'>
                Sign Up as Lawyer
              </Link>
            </div>

            {/* Buttons */}
            <div className="modal-action mt-10 flex justify-around">
              <button type="submit" className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                Login
              </button>
              <form method="dialog">
                <button className="btn px-3 py-2">Close</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
