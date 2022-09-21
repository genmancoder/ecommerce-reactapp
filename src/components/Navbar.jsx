import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between text-white text-[14px] container mx-auto'>
        <nav className=''>
            <ul className='flex'>
                <li className='mx-3'>
                    <a href='/help'>Seller Centre</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>Sell on Shopee</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>Download</a>
                </li>
                <li className='mx-3'></li><li>
                    <a href='/help'>Follow us on</a>
                </li>

            </ul>
    
        </nav>
        <nav className='flex'>
        <ul className='flex'>
                <li className='mx-3'>
                    <a href='/notifications'>Notifications</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>Help</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>English</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>Sign up</a>
                </li>
                <li className='mx-3'>
                    <a href='/help'>Login</a>
                </li>
            </ul>
    
        </nav>

        


    </div>
    
  )
}

export default Navbar