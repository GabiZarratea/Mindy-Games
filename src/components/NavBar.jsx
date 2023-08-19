import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function NavBar() {

  const handleClickLogin = () => {
    Swal.fire({
      title: 'We are glad to see you again!',
      html: `<form>
              <div>
                <div class='m-2'>
                  <label class='text-fuchsia-400 p-2'>Usename: </label>
                  <input type='text' class='border-2 rounded-xl p-2' />
                </div>
                <div class='m-2'>
                  <label class='text-fuchsia-400 p-2'>Password: </label>
                  <input type='password' class='border-2 rounded-xl p-2' />
                </div>
              </div>
             </form>`,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Login',
      showLoaderOnConfirm: true,
      confirmButtonColor: '#FF76E6',
    })
  }

  const handleClickRegister = () => {
    Swal.fire({
      title: 'Welcome!',
      html: `<form>
              <div>
                <div class='m-2 flex flex-col items-start'>
                  <label class='text-fuchsia-400 p-2'>Usename: </label>
                  <input type='text' class='border-2 rounded-xl p-2 w-full' />
                </div>
                <div class='m-2 flex flex-col items-start'>
                  <label class='text-fuchsia-400 p-2'>Photo: </label>
                  <input type='text' class='border-2 rounded-xl p-2 w-full' />
                </div>
                <div class='m-2 flex flex-col items-start'>
                  <label class='text-fuchsia-400 p-2'>Password: </label>
                  <input type='password' class='border-2 rounded-xl p-2 w-full' />
                </div>
                <div class='m-2 flex flex-col items-start'>
                <label class='text-fuchsia-400 p-2'>Enter your password again: </label>
                <input type='password' class='border-2 rounded-xl p-2 w-full' />
              </div>
              </div>
             </form>`,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Register',
      showLoaderOnConfirm: true,
      confirmButtonColor: '#FF76E6',
    })
  }

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
            <button className='mx-4 font-semibold text-slate-800' onClick={handleClickLogin}>Login</button>
            <p className='mx-4 font-semibold text-slate-800'>|</p>
            <button className='mx-4 font-semibold text-slate-800' onClick={handleClickRegister}>Register</button>
            <img src="/logo.png" alt="LogoMindy" className='h-[4vh]'/>
          </div>
        </div>
      </div>
    </div>
  )
}