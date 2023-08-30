import React from 'react'

export default function MoreInformation() {
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
              <th className='text-slate-800 border border-slate-400'>DATE</th>
              <th className='text-slate-800 border border-slate-400'>SCHEDULE</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border border-slate-400'>
              <td className='text-slate-800 font-semibold border border-slate-400'>League of Legends</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>20/08</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>1:00 P.M</td>
            </tr>
            <tr className='border border-slate-400'>
              <td className='text-slate-800 font-semibold border border-slate-400'>Valorant</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>12/10</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>3:00 P.M</td>
            </tr>
            <tr className='border border-slate-400'>
              <td className='text-slate-800 font-semibold border border-slate-400'>Counter Strike</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>27/11</td>
              <td className='text-slate-800 font-semibold border border-slate-400'>9:00 A.M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
