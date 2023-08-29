import React from 'react'
import isLoggedIn from '../components/isLoggedIn.js'

export default function Home() {

  return (
    <div className='min-h-[84.9vh] flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Mindy Games</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>Home</p>
      </div>
      <div className='flex flex-col w-[50%] justify-center'>
      <img src="/girl.jpg" alt="Girl Cover" className='bject-contain' />
        <div className='flex justify-between my-2 text-center items-center'>
          <p className='w-[60%] font-semibold text-sm text-slate-700'>As we know nowadays videogames are part of our life on the internet, on this website we will learn more about them.</p>
          <img src="/vr.jpg" alt="Virtual" className='w-[30%] object-contain' />
        </div>
      </div>
    </div>
  )
}
