import React from 'react'
import Navbar from './Navbar'
import Branding from './Branding'


const Header = () => {
  return (
    <header className='bg-[#f53d2d] w-[100%] sticky top-0'>
        <Navbar/>
        <Branding/>
        
    </header>
  )
}

export default Header