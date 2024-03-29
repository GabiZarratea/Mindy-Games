import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { api, apiUrl, endpoints } from '../utils/api.js'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';

export default function Raffle() {
    
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', chooseGame: '', chooseDate: '', paymentOption: '', message: '', acceptTerms: false });
  const [tournaments, setTournaments] = useState([]);
  const [availableGames, setAvailableGames] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null)

  initMercadoPago('TEST-99eaf0b7-ed7a-46f3-bd86-4dfbb73509d2');

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/mercadopago/create_preference", {
        description: "Producto X",
        price: 1,
        quantity: 1,
      })

      const { id } = response.data;
      console.log(id)
      return id;
    }
    catch(error){
      console.log(error)
    }
  }

  const fetchTournaments = async () => {
    try {
      const response = await api.get(apiUrl + endpoints.tournaments);
      setTournaments(response.data);

      const uniqueGames = [...new Set(response.data.map((tournament) => tournament.name_game))];
      setAvailableGames(uniqueGames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTournaments()
  }, []);

  const handleClick = async () => {
    event.preventDefault()

    const id = await createPreference()
    if (id) {
      setPreferenceId(id)
    }

    // console.log(('Form data submitted:', formData))
    // Swal.fire({
    //   title: 'The data was sent correctly, we will contact you!.',
    //   width: 600,
    //   icon: 'success',
    //   iconColor: '#FF76E6',
    //   padding: '3em',
    //   color: '#4C4C4C',
    //   confirmButtonColor: '#FF76E6',
    //   background: '#F1C6FB',
    //   backdrop: `rgba(0,0,123,0.4) url(/cats.gif) left top no-repeat`,
    // })
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === 'chooseGame') {
      const selectedGame = tournaments.find((tournament) => tournament.name_game === value);
      const availableDates = selectedGame ? [new Date(selectedGame.date_init).toLocaleDateString()] : [];
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        chooseDate: '',
      }));
      setAvailableDates(availableDates);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  

  return (
    <div className='min-h-[84.9vh] flex flex-col'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Raffle</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>You can collaborate and register for one of our tournaments</p>
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
            <div id="wallet_container" onClick={handleClick}>
              <Wallet initialization={{ preferenceId, redirectMode: 'modal' }} />
            </div>
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
                <option value="">-- Choose an option --</option>
                {availableGames.map((game) => (
                  <option key={game} value={game}>
                    {game}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Date</label>
              <select value={formData.chooseDate} name='chooseDate' onChange={handleChange} className='text-slate-700'>
                <option value="">--Choose an option--</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
