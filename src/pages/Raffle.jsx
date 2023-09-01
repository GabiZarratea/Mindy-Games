import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { api, apiUrl, endpoints } from '../utils/api.js'

export default function Raffle() {
    
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', chooseGame: '', chooseDate: '', paymentOption: '', message: '', acceptTerms: false });
  const [tournaments, setTournaments] = useState([]);

  const fetchTournaments = async () => {
    try {
      const response = await api.get(apiUrl + endpoints.tournaments)
      setTournaments(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTournaments()
  }, []);

  const handleClick = (event) => {
    event.preventDefault()

    console.log(('Form data submitted:', formData))
    Swal.fire({
      title: 'The data was sent correctly, we will contact you!.',
      width: 600,
      icon: 'success',
      iconColor: '#FF76E6',
      padding: '3em',
      color: '#4C4C4C',
      confirmButtonColor: '#FF76E6',
      background: '#F1C6FB',
      backdrop: `rgba(0,0,123,0.4) url(/cats.gif) left top no-repeat`,
    })
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className='min-h-[84.9vh] flex flex-col'>
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
          <form>
            <p className='text-slate-800 font-semibold ms-1'>Personal data</p>
            <div className='flex flex-col my-1 font-semibold'>
              <label className='ms-1 text-slate-600 text-sm'>First Name</label>
              <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border' />
            </div>
            <div className='flex flex-col my-1 font-semibold'>
              <label className='ms-1 text-slate-600 text-sm'>Last Name</label>
              <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border' />
            </div>
            <div className='flex flex-col my-1 font-semibold'>
              <label className='ms-1 text-slate-600 text-sm'>E-Mail</label>
              <input type="email" name='email' value={formData.email} onChange={handleChange} className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border'/>
            </div>
            <div>
              <label className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Game</label>
              <select value={formData.chooseGame} name='chooseGame' onChange={handleChange} className='text-slate-700'>
                <option value="">--Choose an option--</option>
                {tournaments.map(tournament => (
                    <option key={tournament._id} value={tournament.name_game}>{tournament.name_game}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Date</label>
              <select value={formData.chooseDate} name='chooseDate' onChange={handleChange} className='text-slate-700'>
                <option value="">--Choose an option--</option>
                {tournaments.map(tournament => (
                  <option key={tournament._id} value={new Date(tournament.date_init).toLocaleDateString()}>{new Date(tournament.date_init).toLocaleDateString()}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='flex flex-col my-1 font-semibold text-slate-800'>Payment Options</label>
              <div>
                <input type="radio" value="cash" name='paymentOption' onChange={handleChange} />
                <label className='ms-2 text-sm font-semibold text-slate-700'>Cash</label>
              </div>
              <div>
                <input type="radio" value="credit" name='paymentOption' onChange={handleChange} />
                <label  className='ms-2 text-sm font-semibold text-slate-700'>Credit Card</label>
              </div>
              <div>
                <input type="radio" value="debit" name='paymentOption' onChange={handleChange} />
                <label className='ms-2 text-sm font-semibold text-slate-700'>Debit Card</label>
              </div>
            </div>
            <div>
              <label className='flex flex-col my-1 font-semibold text-slate-800'>Message (Optional)</label>
              <textarea cols="40" rows="5" className='rounded-md border-fuchsia-300 border' value={formData.message} name='message' onChange={handleChange}></textarea>
            </div>
            <div>
              <div>
                <input type="checkbox" value={formData.acceptTerms} name='acceptTerms' onChange={handleChange}/>
                <label htmlFor="accept" className='text-sm ms-2 font-semibold text-slate-600'>I accept terms and conditions...</label>
              </div>
              <button className='rounded-md bg- bg-fuchsia-200 p-2 px-6 my-4' type='submit' onClick={handleClick}> Submit </button>
            </div>
          </form>
        </div>
      </div>  
    </div>
  )
}
