import React from 'react'
import { SiVisa } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className="footer p-8 mx-8 w-[100%] flex items-center justify-between  bg-gray-600 text-white">
<div className="footers">
  <h1 className='mb-4'>Контакты</h1>
  <p className='text-green-500'>*6060</p>
  <p className='mt-2'>Мы на карте</p>
  <SiVisa className='mt-2 scale-[200%] ml-2' />

</div>
<div className="footers flex-col items-start flex gap-4 text-start">
  <h1>Компании</h1>
  <p>О Компании</p>
  <p>Карьера</p>
 <p>Программа "Карабах"
 </p>

</div>
<div className="footers gap-4 flex items-start flex-col">
  <h1>Информация
  </h1>
  <p>Политика конфиденциальности
  </p>
  <p>Условия оплаты в рассрочку</p>
<p>Политика возврата</p>
<p>Гарантии
</p>
<p>Гарантия лучшей цены!</p>
<p>Kontakt TV</p>
</div>
<div className="footers gap-4 flex items-start flex-col">
  <h1>Для Клиентов
  </h1>
  <p>Доставка и оплата

  </p>
  <p>Политика управления <br /> жалобами
  </p>
<p>Условия использования сайта</p>
<p>Способы осуществления <br /> ежемесячных платежей
</p>
<p>Корпоративные продажи</p>
</div>
<div className="footers flex items-center gap-4">
<FaInstagram className='scale-[150%]' />
<RiFacebookCircleLine className='scale-[150%]' />
<FiTwitter className='scale-[150%]' />
<FaGithub  className='scale-[150%]'/>


</div>
</div>
    </>
  )
}

export default Footer
