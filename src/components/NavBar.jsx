import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div className='min-h-[5vh] w-full bg-fuchsia-300 items-center flex justify-around'>
        <div className='w-[80%] flex justify-between items-center my-4'>
          <div className='flex'>
            <Anchor to={'/'} className='mx-4 font-semibold text-slate-800'> Home </Anchor>
            <Anchor to={'/AboutUs'} className='mx-4 font-semibold text-slate-800'> About Us </Anchor>
            <Anchor to={'/Contact'} className='mx-4 font-semibold text-slate-800'> Contact </Anchor>
            <Anchor to={'/BenefitsAndTips'} className='mx-4 font-semibold text-slate-800'> Benefits And Tips </Anchor>
            <Anchor to={'/MoreInformation'} className='mx-4 font-semibold text-slate-800'> More Information </Anchor>
            <Anchor to={'/Raffle'} className='mx-4 font-semibold text-slate-800'> Raffle </Anchor>
          </div>
          <div className='w-[20%] flex justify-end'>
            <img src="/logo.png" alt="LogoMindy" className='h-[4vh]'/>
          </div>
        </div>
      </div>
    </div>
  )
}