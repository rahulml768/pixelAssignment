import React from 'react';
 const Signuppage = () => {
  return (
    <div className="h-screen  w-screen bg-black mt-2.5">
    <div className="p-20 bg-black flex h-screen w-screen">
      
      
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(/Images/pixel.png)` }}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-[#1f1f1f]">
        <div className="bg-[#181818] p-10 rounded-lg w-full max-w-md text-white">
          <h1 className="text-3xl font-bold mb-2">SPEEDO <span className="text-red-500">prime</span></h1>
          <h2 className="text-xl font-semibold mb-1">Create an account</h2>
          <p className="text-sm text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-[#2c2c2c] text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 rounded bg-[#2c2c2c] text-white focus:outline-none"
          />

                <label className="flex items-start mb-4 text-xs text-gray-400">
                      <input type="checkbox" className="mr-2 mt-1" />
                        <p className="leading-snug">
                            You have agreed to Speedo Prime’s&nbsp;
                         <a href="#" className="text-red-600 underline">
                         Privacy Policy, Terms, and Conditions
                             </a>
                      &nbsp;that you will abide by all the internal updates and policies of the platform.
                        </p>
                      </label> 

          <button className="bg-red-600 hover:bg-red-700 w-full py-3 rounded font-semibold">
            Verify Account
          </button>

          <p className="mt-4 text-sm text-gray-400 text-center">
            Already have an account? <a href="#" className="text-red-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signuppage

