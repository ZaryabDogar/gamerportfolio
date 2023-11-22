

import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router-dom';


const Navbar = () => {
    //history
    // const history = useHistory();

    	// dropdown 
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	  };

	//   navbar color
	const [isScrolled, setIsScrolled] = useState(false);

	 // Function to handle scroll events
	 const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point (you can adjust this value)
		const scrollY = window.scrollY;
		if (scrollY > 100) {
		  setIsScrolled(true);
		} else {
		  setIsScrolled(false);
		}
	  };
	
	  // Effect to add scroll event listener
	  useEffect(() => {
		// Add event listener when component mounts
		window.addEventListener('scroll', handleScroll);
	
		// Clean up the event listener when component unmounts
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <nav>
        <div>
			<nav  className={`fixed  z-20 top-0 start-0 w-full   lg:px-14 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-sm py-5' : 'bg-black py-8'
      }`}>
				<div className=" flex flex-wrap items-center justify-between mx-auto  ">
					{/* leftsidew */}
					<div className="flex justify-start items-center  ">
						<Link to="/" className={`flex rtl:space-x-reverse font-Quicksand font-bold transition-all ease-in-out duration-500 ${isScrolled?'text-black lg:text-[24px] text-[30px]':'text-white lg:text-[30px] md:text-lg text-sm'}`} style={{
  fontFamily: 'Quicksand, sans-serif'
}}
>
						MATTHEW VENTURES
						</Link>
					
				
					
					</div>
                    {/* right side  */}
					<div className="flex  items-center">

                    <ul className={`sm:flex hidden  font-[400] md:text-sm text-[25px] ${isScrolled ? 'text-black' : 'text-white'}`} style={{
  fontFamily: 'Quicksand, sans-serif'
}}>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1 text-[20px] `} >
        <Link to='/'>HOME</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1 text-[20px] `}>
        <Link to='/resume'>RESUME</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1  text-[20px]`}>
        <Link to={'/Side'}>SIDE QUESTS</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1 text-[20px]`}>
        <Link to='/other'>OTHER</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1  text-[20px]`}>
        <Link to='/get-into-game-dev'>GET INTO GAME DEV</Link>
      </li>
    </ul>


						<button
							type="button"
							className={`  font-medium text-2xl  px-2 py-2 text-center  sm:hidden block ${isScrolled?'text-black' :'text-white'}`}
							onClick={toggleDropdown}
						>
						<RxHamburgerMenu />

						</button>
					</div>
				
				</div>
			{/* responsive  */}
				{isOpen && (
        <div className="w-[100vw] p-5 bg-white shadow-xl absolute  top-20 border-1 transition-opacity opacity-100 duration-500">
          <ul className="font-bold text-gray-600 flex flex-col w-full justify-center text-center items-center space-y-4">
          <li className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1 `}>
        <Link to='/'>HOME</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1  `}>
        <Link to='/resume'>RESUME</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1  `}>
        <Link to='/pages/Side'>SIDE QUESTS</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1  `}>
        <Link to='/other'>OTHER</Link>
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1 `}>
        <Link to='/get-into-game-dev'>GET INTO GAME DEV</Link>
      </li>
          </ul>
        </div>
      )}
			</nav>
		</div>
    </nav>
  )
}

export default Navbar