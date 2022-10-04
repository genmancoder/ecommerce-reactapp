import React, { useContext, useEffect, useState } from 'react'
import CallToAction from "./CallToAction";
import Categories from './Categories';

import CartContext from '../CartContext'
import Product from './Product';
import { Link } from 'react-router-dom';

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
                        <Link key={item.id}  to={{
                            pathname: `/productview/${item.id}`, 
                            state: {
                              id: item.id,
                              fromNotifications: true
                          }
                        }}><Product key={item.id + "p"} product={item}/></Link>
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