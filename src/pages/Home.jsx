import React from 'react'
import isLoggedIn from '../components/isLoggedIn'
import { Link as Anchor } from 'react-router-dom'

export default function Home() {

  const userLoggedIn = isLoggedIn()

  return (
    <div className='min-h-[84.9vh] flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Mindy Games</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>Home</p>
      </div>
      { !userLoggedIn ? (
        <div className='flex flex-col w-[50%] justify-center'>
          <img src="/girl.jpg" alt="Girl Cover" className='bject-contain' />
          <div className='flex justify-between my-2 text-center items-center'>
            <p className='w-[60%] font-semibold text-sm text-slate-700'>As we know nowadays videogames are part of our life on the internet, on this website we will learn more about them.</p>
            <img src="/vr.jpg" alt="Virtual" className='w-[30%] object-contain' />
          </div>
        </div>
      ) : (
        <div className='flex flex-wrap w-[50%] justify-center'>
          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">PREVIOUS TOURNAMENTS</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- Winners</Anchor>
              <Anchor>- Statistics</Anchor>
              <Anchor>- Awards</Anchor>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">FUTURE TOURNAMENTS</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- Dates</Anchor>
              <Anchor>- Registrations</Anchor>
              <Anchor>- Most wanted</Anchor>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">MY TOURNAMENTS</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- Dates</Anchor>
              <Anchor>- Statistics</Anchor>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">BENEFITS AND TIPS</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- About my tournaments</Anchor>
              <Anchor>- About my games</Anchor>
              <Anchor>- General</Anchor>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">RAFFLES</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- Past Draws</Anchor>
              <Anchor>- Current Draws</Anchor>
              <Anchor>- Future Draws</Anchor>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md m-4 min-w-[350px] text-center">
            <h2 className="text-fuchsia-400 text-xl font-semibold mb-2">MY TROPHIES</h2>
            <div className='flex flex-col items-start ms-4 text-slate-700 font-semibold'>
              <Anchor>- See trophies and badges</Anchor>
              <Anchor>- Download history of trophies and badges</Anchor>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
