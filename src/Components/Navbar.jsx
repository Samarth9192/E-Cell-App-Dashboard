import React, { useState } from 'react';

function Navbar() {
  const [src, setSrc] = useState("/src/assets/hamburger.png")

  return (
    <nav className='flex items-center px-2 h-16 justify-between w-full'>
      <div className="flex item-center ml-3 gap-4">
        <div className="hamburger content-center">
          <img className='w-5 sm:w-6 h-5 sm:h-6 invert md:hidden' src={src} alt=""
          />
        </div>

        <div className="logo hidden sm:block ">
          <img className='w-19 h-16 ' src="/src/assets/logo2.png" alt="" />
        </div>
      </div>
      <div className="home flex gap-4 " >
        <button className="homebtn opacity-85 bg-grey rounded-full w-8 h-8 sm:w-10 sm:h-10 content-center cursor-pointer hover:opacity-100" title='Home'
        >
          <img className='w-5 h-5 sm:w-7 sm:h-7 dark:invert m-auto' src="/src/assets/home.png" alt="home" />
          {/* <span className='text-white px-3 rounded-sm fixed top-14 bg-grey hidden'>Home</span> */}
        </button>

        <div className="search-bar flex gap-2 bg-grey w-8 h-8 sm:w-10 sm:h-10 md:w-76 md:py-2.5 md:px-2 rounded-3xl" title='Search Bar'>
          <div className="search content-center ml-2">
            <img className="w-5 h-5 sm:h-6 dark:invert mx-auto" src="/src/assets/search.svg" alt="" />
          </div>
          <input className='w-50 dark:text-white bg-none border-none hidden md:block' type="text" placeholder="What do you want to play?" />
          <div className="search">
            <img className="w-6 h-6 dark:invert hidden md:block" src="/src/assets/browse.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="unauthorized">
        <button className="text-[#c3bebe] mx-2 md:mx-4 hover:text-white hover:scale-110 font-bold  cursor-pointer"
        >Sign up</button>
        <button className="w-20 h-10 mx-2 md:mx-4 py-2 bg-white rounded-3xl font-semibold hover:scale-110 cursor-pointer"
        >Log in</button>
      </div>
    </nav>
  )
}

export default Navbar


