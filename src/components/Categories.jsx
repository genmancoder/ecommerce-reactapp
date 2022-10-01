import React, { useState, useEffect } from 'react'

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => {
        if(res.ok){
          return res.json()
        }
    })
    .then(data => {
      console.log(data)
      setCategories(data)
    });
  },[])

  return (
    <section className='container mx-auto p-0 bg-slate-50 rounded-sm'>
        <div className='p-5'>CATEGORIES</div>
        <div className=' border-t-1 border-t-gray-600 p-3'>                       
            <ul className='flex flex-wrap'>
                
                {
                    categories && categories.map((item) => (                      
                        <li className='w-[8rem] p-4 text-center border-b' key={item}>{item}</li>
                    ))

                }
                        
            </ul>
        </div>
    </section>
  )
}

export default Categories