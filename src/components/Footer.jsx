import React from 'react'
import isLoggedIn from './isLoggedIn'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {

  const userLoggedIn = isLoggedIn()

  return (
    <div>
      <div className='min-h-[5vh] w-full bg-fuchsia-300 items-center flex justify-around p-2'>
        {!userLoggedIn ? (
          <p className='font-semibold text-slate-800 m-4'>Created By: Gabriela Zarratea</p>
        ) : (
          <div className='w-[50%] flex justify-between items-center'>
            <div className='flex flex-col'>
              <p className='font-semibold text-slate-800'>You can ask us what day from 2:00 pm until 7:00 pm.</p>
              <div className='flex justify-between'>
                <Anchor className='font-semibold text-blue-700'>E-Mail: mindygames@mh.com</Anchor>
                <Anchor className='font-semibold text-blue-700'>Phone: 001112711</Anchor>
              </div>
            </div>
            <img src="/contact.png" alt="" />
          </div>
        )}
      </div>
    </div>
  )
}
