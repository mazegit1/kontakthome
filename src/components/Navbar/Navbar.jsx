import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import headerlogo from '../../assets/img/header-logo.svg';
function Navbar() {
  return (
<>
   <header className='flex items-center justify-between px-20 pt-5'>
    <div className="header-logo">
       <a href="/"> <img src={headerlogo } className='w-52 cursor-pointer' alt="" /></a>
    </div>
    <div className="header-info flex items-center gap-[150px]">
        <div className="header-right flex items-center gap-14 ">
            <a className='text-xl transition duration-300 ease-in-out transform hover:scale-110 font-medium text-[red] hover:border-b border-b-[#ff2b2b]' href="/promotions">Акция</a>
            <a className='text-xl transition duration-300 ease-in-out transform hover:scale-110 font-medium text-[black] hover:border-b border-b-black' href="/shops">Магазины</a>
            <a className='text-xl transition duration-300 ease-in-out transform hover:scale-110 font-medium text-[black] hover:border-b border-b-black' href="/corporative">Корпоративные продажи</a>
        </div>
        <div className="header-left flex items-center mr-30 gap-14">
            <h1 className='text-xl font-medium'><span className='text-xl font-medium text-red-500 pb-10'>*</span>6060</h1>
            <a href="" className='text-xl font-medium text-[#18a018] hover:scale-110 transition-all duration-300 border px-6 py-2 rounded-xl hover:bg-green-600 hover:text-white border-[#18a018]'>Ежемесячный платёж</a>
            <button className='text-xl font-medium text-black p-2 rounded-lg px-6 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-[#c3c3c3] bg-[#d1d1d1]'>Войти</button>
            <div className='flex items-center gap-2'>
                <h1 className='text-xl font-medium text-xl font-medium'>Ru</h1>
                <IoIosArrowDown />
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Navbar
