import React from 'react'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-32 mt-12">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Welcome to VakilConnect!</h1>
                <p className = "text">Your Trusted Legal Partner</p>
                <p>At VakilConnect, we understand the complexities of legal matters and the importance of effective communication between clients and their lawyers. Our platform is designed to simplify the process, ensuring that you receive the best legal assistance promptly and efficiently.
                </p>
                <label className="input input-bordered w-80 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered w-80 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
                <button
                  class="inline-block cursor-pointer rounded-md bg-slate-200 px-4 py-3 text-center text-sm font-semibold uppercase text-black transition duration-200 ease-in-out  hover:bg-slate-300">
                  Register Case
                </button>
            </div>
        </div>
        <div className="w-full order 1 md:order-2 md:w-1/2">Put image here</div>
    </div>
    </>
    
  )
}

export default Banner
