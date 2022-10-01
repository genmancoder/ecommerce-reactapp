import React, { useContext, useEffect, useState } from 'react'
import CallToAction from "./CallToAction";
import Categories from './Categories';

import CartContext from '../CartContext'
import Product from './Product';

const Main = () => {

  const {cart} = useContext(CartContext)
  const [data, setData] = useState([])

  
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => {
        if(res.ok){
          return res.json()
        }
    })
    .then(data => {
      console.log(data.products)
      setData(data.products)
    });
  },[])




  return (
    <main className='min-h-[100vh] bg-[#ccc]/30'>
        <article className='p-4'>
            <Categories/>
            <div className='mx-auto container'>
              <div className='p-8 flex flex-wrap justify-start'>
                  {
                    data && data.map((item) => (                      
                        <Product key={item.id} product={item}/>
                    ))

                  }
              </div>
            </div>
            
            <CallToAction/>
            
        </article>
    </main>
  )
}

export default Main