import React from 'react'
import { RiSecurePaymentLine } from "react-icons/ri";


const Ad = () => {
  return (
   <>
   <div className="ad bg-[#ffffff] w-max p-6 rounded-xl flex items-center gap-14">
    <div className="ad-left">
    <RiSecurePaymentLine id='ad-icon'  className='scale-[250%]' />

    </div>
    <div className="ad-right">
        <h1 className='font-semibold text-black text-xl'>Оформление у двери</h1>
        <p>С возможностью оплаты наличными,<br /> в рассрочку или с помощью карты</p>
    </div>
   </div>
   </>
  )
}

export default Ad
