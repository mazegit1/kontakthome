import React from 'react'
import phone from '../assets/img/iphone.webp'
function Card() {
  return (
    <>
    <div className="transition-all ease-in-out duration-300 hover:translate-x-[-5px] hover:translate-y-[-5px] cursor-pointer card flex items-center flex-col border border-none shadow-[20px_18px_35px_-18px_rgba(0,0,0,0.75)] w-fit p-6 rounded-2xl bg-white">
        <div className="card-top">
            <img src={phone} alt="" />
        </div>
        <p className='font-medium text-black text-xl'>Iphone 15 Pro 128 GB Natural</p>

        <div className="card-bottom flex items-center gap-28">

            <p className='text-red-600 font-semibold text-[18px]'>2549,99$</p>
             <p className='font-semibold text-[18px]'>0% 12м</p>
        </div>
    </div>
    </>
  )
}

export default Card
