import React from 'react'
import isLoggedIn from './isLoggedIn'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {

  const userLoggedIn = isLoggedIn()
  const currentHour = new Date().getHours();

  const startHour = 14;
  const endHour = 19;

  const isClickable = currentHour >= startHour && currentHour <= endHour;


  return (
    <div>
        {!userLoggedIn ? (
          <div className='min-h-[5vh] w-full bg-fuchsia-300 items-center flex justify-around'>
            <p className='font-semibold text-slate-800 m-4'>Created By: Gabriela Zarratea</p>
          </div>
        ) : (
          <div className='min-h-[5vh] w-full bg-fuchsia-300 items-center flex justify-around p-2'>
            <div className='w-[50%] flex justify-between items-center'>
              <div className='flex flex-col'>
                <p className='font-semibold text-slate-800'>You can ask us what day from 2:00 pm until 7:00 pm.</p>
                <div className='flex justify-between'>
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
              <img src="/contact.png" alt="" />
            </div>
          </div>
        )}
    </div>
  )
}
