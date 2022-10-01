import React, { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  function handleMenuClick(e) {    
        e.preventDefault();
        // console.log('first')
        setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div className='lg:flex justify-between text-white text-[14px] mx-auto '>
        <nav className="bg-[#f53d2d] w-[100%] container mx-auto">
			<div className="mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>						
                        
							<a href="#" className="flex items-center py-4 px-2">
								<img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-semibold text-white text-lg">Shopee</span>
							</a>
						</div>
						
						<div className="hidden md:flex items-center space-x-1">
							<a href="" className="py-4 px-2 text-white border-b-4 border-white font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Services</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">About</a>
							{/* <a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact Us</a> */}
						</div>
					</div>
					<div className='hidden md:flex container justify-center mx-auto'>        
        <div className='lg:block p-2 w-[70%] rounded-md '>
            <div className='bg-white m-1 flex rounded-md '>
                <input className='p-2 flex-1 text-gray-800 rounded-md focus:border-none' type="text" />
                <input className='p-2 m-1 bg-[#f53d2d] text-white hover:bg-[#f53d2d]/90 rounded-md' type='button' value='Search'/>
            </div>
            {/* <QuickLinks/> */}
        </div>       
    </div>
					<div className="hidden md:flex items-center space-x-3 ">
						{/* <a href="" className="py-2 px-2 font-medium text-white rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a> */}
						{/* <a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a> */}
                        <IoCartOutline className='cursor-pointer' size='42' color='white' />
					</div>
					
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={handleMenuClick}>
						<svg className=" w-6 h-6 text-white hover:text-gray-200 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* Mobile menu */}
            {
                navbarOpen ? (<div className="mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>) : (
                <div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			    </div>
            )
            }
			
			
		</nav>
        

        


    </div>
    
  )
}

export default Navbar