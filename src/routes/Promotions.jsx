import React from 'react'
import promotionimg from '../assets/img/promotion.webp'
import Footer from '../components/Footer';

const Promotions = () => {
  return (
<>
<div className="wrapper flex-col justify-between flex items-center ">
<div className="promotion">
        <div className="promotion-top">
            <h1 className='px-20 ml-12 mt-20 rounded-2xl text-2xl font-semibold h-20 text-center flex items-center bg-[#e3e3e3] w-max'>Счастливые часы            </h1>
            <img src={promotionimg} className='scale-95' alt="" />
            <p className='mb-10 ml-12 text-gray-500 text-[24px] font-medium'>Счастливые часы в Kontakt-е
            </p>
            <p className=' ml-12 text-gray-500 text-[24px] font-medium '>Каждую среду с 19:00 до 21:00 только при покупке онлайн воспользуйся скидкой до 60% на выбранные товары. Также скидочную цену ты можешь разделить на 6 месяцев. 
<br />
7 августа мы будем радовать тебя скидкой на Инструменты. 
<br />
Не забудь быть онлайн каждую среду и воспользоваться нашими предложениями на kontakt.az 
<br />
Примечание: кампания не распространяется на покупки в кредит</p>
        </div>
    </div>
      <Footer />
</div>
    
    
    
    </>
  )
}

export default Promotions