import React from 'react'
import CallToAction from "./CallToAction";
import Categories from './Categories';
const Main = () => {
  return (
    <main className='min-h-[100vh] bg-[#ccc]/30'>
        <article>
            <CallToAction/>
            <Categories/>
        </article>
    </main>
  )
}

export default Main