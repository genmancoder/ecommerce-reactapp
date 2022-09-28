import React from 'react'

const Categories = () => {
  return (
    <section className='container mx-auto p-0 bg-slate-50 rounded-sm'>
        <div className='p-5'>CATEGORIES</div>
        <div className=' border-t-1 border-t-gray-600'>                       
            <ul className='w-[140%] flex relative h-[100%] p-0 m-0'>
                
                <li className='list-none float-left touch-pan-y'>
                    <div className="h-[100%] w-[100%] block box-border">
                        
                        <a className="text-center border-r border-r-gray-400 block relative bg-white before:content-[''] before:block before:pt-[126%]" href="/Babies-Kids-cat.11021766">
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center align-middle text-center">
                                <div className="flex-shrink w-[70%] h-[70%] mt-[10%]">
                                    <div className="h-[100%] relative">
                                        <div className="bg-[url('https://cf.shopee.ph/file/2e9bfe13ce9cecfbfad8010b843651f6_tn')] bg-contain bg-no-repeat h-[100%] opacity-100 block" >

                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90%] h-[3.125rem] text-center block">
                                    <div className="text-[.875rem] text-gray-700 no-underline leading-5 h-[2.5rem] mb-[0.625rem] overflow-hidden text-ellipsis">Babies &amp; Kids</div>
                                </div>
                            </div>
                        </a>
                       
                    </div>
                </li>
                        
            </ul>
        </div>
    </section>
  )
}

export default Categories