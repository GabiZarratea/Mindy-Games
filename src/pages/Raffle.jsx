import React from 'react'

export default function Raffle() {
  return (
    <div className='min-h-[84.9vh]'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Raffle</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>You can collaborate and register for one of our tournaments</p>
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <p className='text-md font-semibold text-slate-700 text-center mb-2'>Our location where the tournaments are held is at</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450940.6550535176!2d-82.7839533166323!3d27.994695904415046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1684418824838!5m2!1ses-419!2sar" className='w-[500px] h-[500px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <form action="sumbit">
            <p className='text-slate-800 font-semibold ms-1'>Dates</p>
            <div className='flex flex-col my-1 font-semibold'>
              <label htmlFor="f_name" className='ms-1 text-slate-600 text-sm'>First Name</label>
              <input type="text" id='f_name' name='First Name' className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border' />
            </div>
            <div className='flex flex-col my-1 font-semibold'>
              <label htmlFor="l_name" className='ms-1 text-slate-600 text-sm'>Last Name</label>
              <input type="text" id='l_name' name='Last Name' className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border' />
            </div>
            <div className='flex flex-col my-1 font-semibold'>
              <label htmlFor="mail" className='ms-1 text-slate-600 text-sm'>E-Mail</label>
              <input type="email" id='mail' name='E-Mail' className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border'/>
            </div>
            <div>
              <label for="c_game" className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Game</label>
              <select name="choose_game" id="c_game" className='text-slate-700'>
                <option value="">--Elija una opción--</option>
                <option value="LOL">League of Legends</option>
                <option value="Valorant">Valorant</option>
                <option value="CS">Counter Strike</option>
              </select>
            </div>
            <div>
              <label for="c_date" className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Date</label>
              <select name="choose_date" id="c_date" className='text-slate-700'>
                <option value="">--Elija una opción--</option>
                <option value="20/08">20/08</option>
                <option value="12/10">12/10</option>
                <option value="27/11">27/11</option>
              </select>
            </div>
            <div>
              <label className='flex flex-col my-1 font-semibold text-slate-800'>Payment Options</label>
              <div>
                <input type="radio" id="p_option1" name="Cash" value="cash" />
                <label for="p_option1" className='ms-2 text-sm font-semibold text-slate-700'>Cash</label>
              </div>
              <div>
                <input type="radio" id="p_option2" name="Credit Card" value="credit" />
                <label for="p_option2" className='ms-2 text-sm font-semibold text-slate-700'>Credit Card</label>
              </div>
              <div>
                <input type="radio" id="p_option3" name="Debit Card" value="debit" />
                <label for="p_option3" className='ms-2 text-sm font-semibold text-slate-700'>Debit Card</label>
              </div>
            </div>
            <div>
              <label for="msg" className='flex flex-col my-1 font-semibold text-slate-800'>Message (Optional)</label>
              <textarea name="Message" id="msg" cols="40" rows="5" className='rounded-md border-fuchsia-300 border'></textarea>
            </div>
            <div>
              <div>
                <input type="checkbox" id="accept" name="Term and Conditions" />
                <label for="accept" className='text-sm ms-2 font-semibold text-slate-600'>I accept terms and conditions...</label>
              </div>
              <button className='rounded-md bg- bg-fuchsia-200 p-2 px-6 my-4'> Submit </button>
            </div>
          </form>
        </div>
      </div>  
    </div>
  )
}
