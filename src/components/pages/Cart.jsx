import React from 'react'
import { useContext } from 'react'
import CartContext from '../../CartContext'

const Cart = () => {

  const {cart} = useContext(CartContext)

  console.log(cart)

  return (
    <main className='min-h-[100vh] bg-[#ccc]/30'>
        <article className='p-4'>
            
            <div className='mx-auto container'>
              
              <div className='cart bg-white p-2 round-lg'>
                <h1>Cart Content</h1>

                {
                  cart && cart.map((product, index) => (
                    <div key={'p'+index} className='flex border m-2'>
                        <div><img src={product.image} width="60" /></div>
                        <div>{product.title}</div>
                        <div>{product.description}</div>

                    </div>
                  ))
                }
              </div>

            </div>
            
            
            
        </article>
    </main>
  )
}

export default Cart