import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Contact() {
  const currentHour = new Date().getHours();

  const startHour = 14;
  const endHour = 19;

  const isClickable = currentHour >= startHour && currentHour <= endHour;

  return (
    <div className='min-h-[83.9vh] flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Contact</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>You can ask us what you need</p>
      </div>
      <div className='flex flex-col items-center w-[80%]'>
        <img src="/playing.jpg" alt="Playing" className='w-[55%] my-2' />
        <p className='font-semibold text-slate-800'>You can ask us what day from 2:00 pm until 7:00 pm.</p>
        <div className='flex justify-between w-[80%] my-4'>
          <Anchor to="mailto:mindygames@mh.com" className='font-semibold text-blue-700'>E-Mail: mindygames@mh.com</Anchor>
          {
            isClickable ? (
              <Anchor to="tel:001112711" className='font-semibold text-blue-700'>Phone: 001112711</Anchor>
            ) : (
              <p className='font-semibold text-blue-700'>Phone: Only available from 2pm to 7pm</p>
            )
          }
        </div>
      </div>  
    </div>
  )
}
