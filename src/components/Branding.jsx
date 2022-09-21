import React from 'react'
import { IoCartOutline,IoStorefrontOutline } from "react-icons/io5";
import QuickLinks from './QuickLinks'
const Branding = () => {
  return (
    <div className='flex container justify-between mx-auto'>
        <div className='w-25 text-white flex justify-between my-7 '>
            <IoStorefrontOutline size='32' className='mx-2'/>
            Shopay.
        </div>
        <div className='p-2 w-5/6 rounded-md'>
            <div className='bg-white m-1 flex rounded-md '>
                <input className='p-2 flex-1' type="text" />
                <input className='p-2 m-1 bg-[#f53d2d] text-white hover:bg-[#f53d2d]/90 rounded-md' type='button' value='Search'/>
            </div>
            <QuickLinks/>
        </div>
        <div className='text-center flex  justify-center pr-6 my-4'>
            <IoCartOutline size='42' color='white' />
        </div>
    </div>
  )
}

export default Branding