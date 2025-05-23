import React from 'react';
import { FaPhoneSquareAlt , FaUser, FaCog, FaTv, FaMobileAlt } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { PiMicrophone } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">

      <header className="px-20 py-4 border-b border-gray-800">
  <h1 className="text-2xl font-bold text-white">
    SPEEDO <span className="text-red-500">prime</span>
  </h1>
  <nav className="flex items-center gap-6 text-sm text-gray-300 mt-2">
    <a href="#">Home</a>
    <a href="#">Movies</a>
    <a href="#">TV Shows</a>
    <a href="#">New/Upcoming</a>
    <a href="#">My List</a>
    <a href="#" className="text-red-500">Browse by language</a>
    <a href="#">Speedo Tube</a>
    <div className="flex-grow" />

    <CiSearch className="text-white text-l cursor-pointer" />
    <RxDashboard className='text-white text-l cursor-pointer'/>
    <PiMicrophone className='text-white text-l cursor-pointer' />
    <IoMdNotificationsOutline className='text-white text-l cursor-pointer' />
    

  </nav>
</header>



      <div className="flex px-20 py-10 gap-10 flex-grow">
        <aside className="w-1/4 space-y-4">
            <div className='text-xl'>Account</div>
          <div className="bg-[#181818] rounded p-6 space-y-6 text-sm">
            <div className="flex items-center gap-3">
              <FaTv />
              <span>Membership</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <span>Devices</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCog />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-white">
              <FaUser />
              <span>Profile</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-8">
  
          <div className="bg-[#181818] rounded p-4 flex items-center gap-4 text-xl">
            <FaPhoneSquareAlt  />
            <div>
              <p className="text-sm text-gray-400">Logged with</p>
              <p className="text-lg font-medium">8699780274</p>
            </div>
          </div>

          <div className="bg-[#181818] rounded p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Manage Profiles</h2>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold">+ Add New Profile</button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#2c2c2c] p-4 rounded">
                <div className="flex items-center gap-4">
                  <img src="/Images/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
                  <span>Profile Name</span>
                </div>
                <button className="text-sm bg-gray-700 px-3 py-1 rounded">Your profile</button>
              </div>

              <div className="flex justify-between items-center bg-[#2c2c2c] p-4 rounded">
                <div className="flex items-center gap-4">
                  <img src="/Images/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />
                  <span>Profile Name</span>
                </div>
                <FaUser className="text-xl text-gray-400" />
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="text-gray-500 text-xs py-4 border-t border-gray-800 px-20">
        <div className="flex justify-between items-center">
          <span>© 2025 Speedo Prime. All Rights Reserved.</span>
          <span className="space-x-2">
            <a href="#" className="hover:underline">Terms Of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">FAQ</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
