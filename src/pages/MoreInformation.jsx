import React, { useState, useEffect } from 'react';
import { api, apiUrl, endpoints } from '../utils/api.js'
import { Link as Anchor } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com'

export default function MoreInformation() {

  const [tournaments, setTournaments] = useState([]);
  const [participeOpen, setParticipeOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', chooseGame: '', chooseDate: '', acceptTerms: false });
  const [availableGames, setAvailableGames] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

const handleClickParticipe = async (event) => {
event.preventDefault();

try {
  const response = await api.post(apiUrl + endpoints.register_g, formData)
    Swal.fire({
        text: 'Perfect registration, we will send you an email with the tournament details ツ!',
        icon: 'success',
        iconColor: '#FF76E6',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#FF76E6'
    })    
    const emailParams = {
      to_email: formData.email,
    }
    await emailjs.send('service_9fqt4lk', 'template_tsgr4zl', emailParams, {public_key: '6d7CiFkc2rv80EwQE', private_key: 'G28XC7VJu3k3Z_cwjkKly'});
    setParticipeOpen(false)
} 
catch(error) {
    console.log(error)
    Swal.fire({
        text: error.response.data.message,
        icon: 'error',
        iconColor: '#FF76E6',
        confirmButtonText: 'Retry',
        confirmButtonColor: '#FF76E6'
    })
}
};

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
        <p className='font-bold text-2xl text-slate-800 my-2'>More Information</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>Here you'll find the information about the tournaments</p>
      </div>
      <div className='flex justify-center items-center my-10'>
        <table className='w-[80%] text-center border-2 border-slate-400'>
          <thead>
            <tr>
              <th className='text-slate-800 border border-slate-400'>GAME</th>
              <th className='text-slate-800 border border-slate-400'>DATE INIT</th>
              <th className='text-slate-800 border border-slate-400'>DATE FINISH</th>
              <th className='text-slate-800 border border-slate-400'>SCHEDULE</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map(tournament => (
              <tr key={tournament._id} className='border border-slate-400'>
                <td className='text-slate-800 font-semibold border border-slate-400'>{tournament.name_game}</td>
                <td className='text-slate-800 font-semibold border border-slate-400'>{new Date(tournament.date_init).toLocaleDateString()}</td>
                <td className='text-slate-800 font-semibold border border-slate-400'>{new Date(tournament.date_finish).toLocaleDateString()}</td>
                <td className='text-slate-800 font-semibold border border-slate-400'>{tournament.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center'>
        <button className='text-center p-2 border-2 bg-fuchsia-400 w-[300px] rounded-xl font-semibold text-xl text-white' onClick={() => setParticipeOpen(true)}>Participate now!</button>
      </div>
      <div className={participeOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70' : ''}>
       { participeOpen && 
           <div className='w-full flex justify-center items-center'>
           <form id="registrationForm" className='bg-white w-[35%] flex flex-col justify-center items-center rounded-3xl m-6 absolute top-[5%] p-6'>
               <div className='flex flex-col items-center'>
                   <div className='w-full flex justify-around'>
                       <h2 className='font-semibold text-slate-600 text-2xl'>Register to play your favorite game!</h2>
                       <div className='me-[-20%]'>
                           <button type='button' onClick={() => setParticipeOpen(false)} className='flex justify-end me-10'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x text-fuchsia-400" viewBox="0 0 16 16">
                                   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                               </svg>
                           </button>
                       </div>
                   </div>
                   <div className='flex flex-col w-[70%] pe-4 mt-10 mb-4'>
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
                   <div className='m-2 flex flex-col w-[70%] pe-4'>
                      <label className='rounded-md flex flex-col my-1 font-semibold text-slate-800'>Choose Date</label>
                      <select value={formData.chooseDate} name='chooseDate' onChange={handleChange} className='text-slate-700'>
                        <option value="">-- Choose an option --</option>
                        {availableDates.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                   </div>
                   <p className='text-slate-800 font-semibold ms-1 mt-10 mb-2'>PERSONAL DATA</p>
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
                   <div className='flex flex-col my-1 font-semibold'>
                    <label className='ms-1 text-slate-600 text-sm'>Phone</label>
                    <input type="tel" name='phone' value={formData.phone} onChange={handleChange} className='text-slate-700 font-normal rounded-md p-2 w-[300px] border-fuchsia-300 border'/>
                   </div>
                   <div>
                    <input type="checkbox" value={formData.acceptTerms} name='acceptTerms' onChange={handleChange}/>
                    <label htmlFor="accept" className='text-sm ms-2 font-semibold text-slate-600'>I accept terms and conditions...</label>
                  </div>
                   <div className='flex p-2 w-full justify-center'>
                       <button className='bg-fuchsia-400 p-2 font-semibold rounded-md m-2 text-white' type='submit' onClick={handleClickParticipe}>Let's do it!</button>
                       <button className='bg-slate-400 p-2 font-semibold rounded-md m-2 text-white' onClick={() => setParticipeOpen(false)}>Cancel</button>
                   </div>
               </div>
           </form>
       </div>
       }
       
      </div>
    </div>
  )
}
