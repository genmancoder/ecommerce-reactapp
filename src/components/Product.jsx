import React from 'react'
import { Rating } from 'react-simple-star-rating'
const Product = (props) => {

    const id = props.product.id
    const title = props.product.title
    const brand = props.product.brand
    const price = props.product.price
    const thumbnail = props.product.thumbnail
    const rating = props.product.rating
    const stock = props.product.stock
    // const [id] = props.product
    // console.log(id)

  return (
    <div className='w-[12rem] h-[19rem] mb-2 hover:shadow-lg hover:-mt-[1px] transition ease-linear cursor-pointer'>
        <div className='bg-white m-1 rounded-sm h-[100%]'>
            <div className='h-[8rem]'>
                
                <div className='h-[100%]'>
                    <img src={thumbnail} className='w-[100%] h-[100%] object-cover'/>
                </div>
            </div>
            <div className='p-3'>
                <div className='w-[200px]'>
                    <span className='leading-7'>{title.substring(0,20)}{title.length >= 20 && '...'}</span>
                </div>
                <div className='font-medium w-[200px]'>
                    <span className='flex-wrap'>{brand.substring(0,20)}{brand.length >= 20 && '...'}</span>
                </div>
                <div className='border border-red-500 p-1 text-red-500 text-[12px] min-w-min my-2'>
                    <span className=''>{stock} in stocks</span>
                </div>                   
                <div className='text-red-600'>
                    <span>Php.{price}</span>
                </div>
                <div className=''>                   
                        <div className='space-x-1'>
                        <Rating initialValue={rating} size={18} readonly={true}/>
                        </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Product