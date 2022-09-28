import React, { useContext } from 'react'
import CallToAction from "./CallToAction";
import Categories from './Categories';

import CartContext from '../CartContext'

const Main = () => {

  const {cart} = useContext(CartContext)

  console.log(cart.length)

  return (
    <main className='min-h-[100vh] bg-[#ccc]/30'>
        <article>
            <div className='p-8'>
                {
                  cart && cart.map((item) => (
                      <p key={item.id}>Test</p>
                  ))

                }
            </div>
            <CallToAction/>
            <Categories/>
        </article>
    </main>
  )
}

export default Main