'use client';
import React, { useState } from 'react';
// Social buttons removed; unused imports dropped
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-transparent z-10 w-full p-8 shadow-md fixed top-0 flex  justify-between items-center">
      <div className="text-2xl sm:text-3xl  text-slate-300 hover:text-blue-600">
    <Link href="/">
      <h1 className='font-bold'>ClipGrab</h1>
    </Link>
      </div>
      <div className="flex gap-4 items-center">
        {/* Info button with click-based tooltip */}
        <div className="relative">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white hover:border transition-colors duration-200 font-medium text-sm"
          >
            Info
          </button>
          {/* Tooltip that appears on click */}
          {showInfo && (
            <div className="absolute top-full mt-2 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg border border-slate-700 z-50">
              Built by Abdul Rehman
            </div>
          )}
        </div>
        {/* GitHub button */}
        <Link href="https://github.com/AbdulRehman-18" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-black px-4 py-2 rounded-3xl hover:bg-black hover:text-white hover:border transition-colors duration-200 font-medium text-sm flex items-center gap-2">
            <FaGithub className="h-4 w-4" />
            <span className="hidden sm:inline-block">Follow me</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
