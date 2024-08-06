import React from 'react'
import corporativeimg from '../assets/img/corporation.jpg'
import Footer from '../components/Footer';

const Corporative = () => {
  return (
 <>
 <div className="wrapper flex-col justify-between flex items-center ">
 <div className="corporations grid grid-cols-2 mt-20 mx-10">
<div className="corporations-left mt-[14%]">
    <h1 className='text-3xl text-red-600 font-semibold mb-16 '>Корпоративные продажи
      </h1>
    <p className='mb-8 text-lg'>Мы осуществляем продажу различных видов высококачественной цифровой и бытовой техники, а также мебели.<br/> Число наших корпоративных клиентов уже превысило отметку в 2000 и продолжает расти с каждым днем.</p>
 <p className='text-lg'>Мы предлагаем вам следующие возможности по сотрудничеству:
<br />
Специальные скидки для компаний, с которыми мы сотрудничаем;<br />
Кредитные продажи для корпоративных клиентов;<br />
Осуществление платежей переводом при сотрудничестве с нами;<br />
Обеспечение электротехникой, такой ​​как: телефон, ноутбук, кондиционер, микроволновая печь и т. д.;<br />
Возможность приобретения оргтехники, такой как: диспенсер, принтер и т.д.;<br />
Приобретение товаров по заказу, помимо тех которые представлены у нас на сайте. </p>
  </div>
 <div className="corporations-right">
  <img src={corporativeimg} className='scale-[70%] mt-[-0%] ml-10%' />
 </div>
</div>
      <Footer />
</div>

 </>
  )
}

export default Corporative
