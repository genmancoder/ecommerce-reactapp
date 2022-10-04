import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import CartContext from '../../CartContext'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const ProductView = (props) => {


  const {cart,addToCart} = useContext(CartContext)

    const {type} = useParams()
    const fromNotifs = useLocation().state
    const [data, setData] = useState([])
    const [quantity, setQuantity] = useState(1)
    // const {the} = location.query

    const handleAddToCart = (e) => {
      if(quantity > 0){
        addToCart(data.id,data.title,data.price,data.description,data.image,10)
        
        alert(data.title + " added to the cart.")
        
        
      }
    }

    const fadeOutEffect = (target) => {
      var fadeTarget = document.getElementById(target);
      var fadeEffect = setInterval(function () {
          if (!fadeTarget.style.opacity) {
              fadeTarget.style.opacity = 1;
          }
          if (fadeTarget.style.opacity > 0) {
              fadeTarget.style.opacity -= 0.1;
          } else {
              clearInterval(fadeEffect);
          }
      }, 200);
    }

    const handleMouseEnter = (e) => {
        let src = e.target.src;
        // console.log(src)
        document.getElementById('mainThumb').src = src
    }

    const handleMouseOut = (e) => {
      document.getElementById('mainThumb').src = data.thumbnail
    }

    const handleChangeInput = (e) => {
      // add logic here.
    }

    const handleClickQuantity = (e) => {
        let txt = e.target.innerHTML
        if(txt === '+'){
          setQuantity(prev => prev+=1)
        }else{

          if(quantity > 1){
            setQuantity(prev => prev-=1)
          }         

        }
        
    }
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${type}`)
        .then(res => {
            if(res.ok){
              return res.json()
            }
        })
        .then(data => {
          console.log(data)
          setData(data)
        });
      },[])



  return (   

    <main className='min-h-[100vh] bg-[#ccc]/30'>
        <article className='p-4 container mx-auto'>
            

            <div className='bg-white round-md p-6'>
              {/* <h1>Product View d</h1> */}
                <div className='flex justify-center'>
                {/* image */}
                <div>
                  <div className='w-[450px] h-[300px]'>
                      <img id='mainThumb' src={data.thumbnail} className='w-[100%] h-[100%] object-cover'/>
                  </div>
                  <div className='flex my-2'>
                    {data.images && data.images.map((image, index) => (
                      <img onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter} key={'i' + index} src={image} width="100" className='border border-gray-400 hover:opacity-70 p-1'/>
                    ))}
                  </div>
                </div>
                {/* product info */}
                <div>
                  <div className='p-8 flex flex-col flex-wrap justify-start'>
                        <p className='font-bold'>{data.title}</p>
                        <p className='p-4'>{data.description}</p>
                        <div className='flex'>
                          <div className='flex'>
                            <span className='p-1 font-semibold'>{data.rating} </span>
                            <Rating initialValue={data.rating} size={18} readonly={true}/>
                          </div>
                          <div className='my-1'>
                             <span className='p-1'>49 Ratings</span> 
                          </div>
                          <div className='my-1'>
                             <span className='p-1'>{data.stock} in stocks</span> 
                          </div>
                        </div>
                        {/* quantity */}
                        <div className='flex m-2'>
                            <div className='mx-2'>Quantity</div>
                            <div className='flex h-[30px]'>
                            <button onClick={handleClickQuantity} className='bg-gray-200 p-1 m-0 rounded-sm border border-gray-400 w-[30px]'>-</button>  
                            <input className='w-[40px] text-center rounded-sm border border-gray-400' type='text'  onChange={handleChangeInput} value={quantity}  />
                            <button onClick={handleClickQuantity} className='m-0 bg-gray-200 p-1 rounded-sm border border-gray-400  w-[30px]'>+</button>  
                            </div>
                        </div>
                        <div>
                            <button className='m-3 bg-orange-500 text-white p-4 rounded-lg' onClick={handleAddToCart}>Add to Cart</button>
                            <div id='mainNotif'>
                              
                            </div>
                        </div>
                  </div>
                </div>

              </div>              
             
            </div>

            
            
        </article>
    </main>
  )
}

export default ProductView