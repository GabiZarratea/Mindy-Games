import React, { useState, useEffect } from 'react';
import { api, apiUrl, endpoints } from '../utils/api.js'
import { Link as Anchor } from 'react-router-dom';

export default function MoreInformation() {

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
        <Anchor className='text-center p-2 border-2 bg-fuchsia-400 w-[300px] rounded-xl font-semibold text-xl text-white'>Participate now!</Anchor>
      </div>
    </div>
  )
}
