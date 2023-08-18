import React from 'react'

export default function BenefitsAndTips() {
  return (
    <div className='min-h-[84.9vh]'>
      <div className='flex flex-col justify-center items-center my-2'>
        <p className='font-bold text-2xl text-slate-800 my-2'>Benefits and Tips</p>
        <p className='font-semibold text-xl text-slate-800 my-2'>Some benefits and tips about videogames</p>        
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex my-10 items-center'>
          <img src="/boyscreen.jpg" alt="Boyscreen" className='w-[300px]' />
          <ol className='list-decimal ms-10 w-[260px]'>
            <li className='font-bold text-slate-800'>Benefits of play videogames
              <ul className='list-disc font-semibold'>
                <li>Promote teamwork</li>
                <li>Teach languages</li>
                <li>Promote critical thinking</li>
              </ul>
            </li> 
          </ol> 
        </div>
        <div className='flex my-4 items-center'>
          <img src="/old.jpg" alt="old" className='w-[300px]' />
          <ol className='list-decimal ms-10 w-[260px]' start={2}>
            <li className='font-bold text-slate-800'>Tips for enjoying video games
              <ul className='list-disc font-semibold'>
                <li>Measure your times, from time to time go do another activity</li>
                <li>Teach languages</li>
                <li>Take your time, explre and have fun</li>
              </ul>
            </li>  
          </ol>
        </div>
      </div>  
    </div>
  )
}
