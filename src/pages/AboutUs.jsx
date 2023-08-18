import React from 'react'

export default function AboutUs() {
  return (
    <div className='min-h-[84.9vh]'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>About Us</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>Know Us</p>        
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex my-4'>
          <img src="/guys.jpg" alt="Guys" className='w-[300px]' />
          <p className='w-[260px] flex items-center text-center ms-2 font-semibold text-slate-700'>We want to have a page where you can learn more about this world of video games.</p>
        </div>
        <div className='flex my-4'>
          <img src="/team.jpg" alt="team" className='w-[300px]' />
          <p className='w-[260px] flex items-center text-center ms-2 font-semibold text-slate-700'>We are 4 people of different ages who love video games.</p>
        </div>
        <div className='flex my-4'>
          <img src="/twoGuys.jpg" alt="twoGuys" className='w-[300px]' />            <p className='w-[260px] flex items-center text-center ms-2 font-semibold text-slate-700'>We plan to do friendly contests later.</p>
        </div>
      </div>  
    </div>
  )
}
