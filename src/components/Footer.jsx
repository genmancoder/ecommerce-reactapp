import React from 'react'

const Footer = () => {
  return (
    <footer className='container mx-auto text-[11px]'>
      <div className='flex justify-between container'>
          <div>
            <h1 className='font-bold'>Customer Service</h1>
            <nav className=' text-left'>
                <ul className='flex flex-col'>
                    <li className=''>
                        <a href='/help'>Seller Centre</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Sell on Shopee</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Download</a>
                    </li>
                    <li className=''></li><li>
                        <a href='/help'>Follow us on</a>
                    </li>
                </ul>      
            </nav>
          </div>
          <div>
            <h1 className='font-bold'>About Shopay</h1>
            <nav className=' text-left'>
                <ul className='flex flex-col'>
                <li className=''>
                        <a href='/help'>Seller Centre</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Sell on Shopee</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Download</a>
                    </li>
                    <li className=''></li><li>
                        <a href='/help'>Follow us on</a>
                    </li>
                </ul>      
            </nav>
          </div>
          <div>
            <h1 className='font-bold'>Payment</h1>
            <nav className=' text-left'>
                <ul className='flex flex-col'>
                    <li className=''>
                        <a href='/help'>Seller Centre</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Sell on Shopee</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Download</a>
                    </li>
                    <li className=''>

                    </li><li>
                        <a href='/help'>Follow us on</a>
                    </li>
                </ul>      
            </nav>
          </div>
          <div>
            <h1 className='font-bold'>Follow Us</h1>
            <nav className=' text-left'>
                <ul className='flex flex-col'>
                <li className=''>
                        <a href='/help'>Seller Centre</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Sell on Shopee</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Download</a>
                    </li>
                    <li className=''></li><li>
                        <a href='/help'>Follow us on</a>
                    </li>
                </ul>      
            </nav>
          </div>
          <div>
            <h1 className='font-bold'>Shopay App Download</h1>
            <nav className='text-left'>
                <ul className='flex flex-col'>
                <li className=''>
                        <a href='/help'>Seller Centre</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Sell on Shopee</a>
                    </li>
                    <li className=''>
                        <a href='/help'>Download</a>
                    </li>
                    <li className=''></li><li>
                        <a href='/help'>Follow us on</a>
                    </li>
                </ul>      
            </nav>
          </div>
      </div>

      <div className='flex justify-between py-4 border-t-2 border-t-gray-100 mt-10 text-gray-500'>
        <div>
          <p> © All Rights Reserved. Shopay 2020</p>
        </div>
        <div>
          <nav className=''>
              <ul className='flex'>
                  <li className='border-r-2 border-r-gray-300 px-3'>
                      <a className='hover:text-gray-400' href='/help'>Seller Centre</a>
                  </li>
                  <li className='border-r-2 border-r-gray-300 px-3'>
                      <a className='hover:text-gray-400' href='/help'>Sell on Shopee</a>
                  </li>
                  <li className='border-r-2 border-r-gray-300 px-3'>
                      <a className='hover:text-gray-400' href='/help'>Download</a>
                  </li>
                  <li className='px-3'>
                      <a className='hover:text-gray-400' href='/help'>Follow us on</a>
                  </li>

              </ul>
      
          </nav>
        </div>
      </div>

    </footer>
  )
}

export default Footer