import React, { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'
import Register from './Register.jsx'
import Login from './Login.jsx';

export default function NavBar() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
            <Anchor to={'/MyTournaments'} className='mx-4 font-semibold text-slate-800'> My Tournaments </Anchor>
          </div>
          <div className='w-[20%] flex justify-end'>
            <button className='mx-4 font-semibold text-slate-800' onClick={() => setIsLoginModalOpen(true)}>Login</button>
            <p className='mx-4 font-semibold text-slate-800'>|</p>
            <button className='mx-4 font-semibold text-slate-800' onClick={() => setIsRegisterModalOpen(true)}>Register</button>
            <img src="/logo.png" alt="LogoMindy" className='h-[4vh]'/>
          </div>
        </div>
      </div>
      <div className={isRegisterModalOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' : ''}>
       { isRegisterModalOpen && <Register />}
      </div>
      <div className={isLoginModalOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' : ''}>
       { isLoginModalOpen && <Login />}
      </div>
    </div>
  )
}