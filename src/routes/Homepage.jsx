import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
   <>
     <div className="wrapper flex-col justify-between flex items-center ">
      <Footer />
</div>
  <div className="wrapper flex-col justify-between flex items-center ">
  <div className="hero">
  <div className="hit mt-[100px] mx-20">
    <div className="hit-title text-black font-semibold text-[28px]">Хит продаж</div>
    <div className="hit-options mt-14 flex gap-[1px] ">
      <h1 className="hit-option rounded-3xl bg-[black] p-2 text-white hover:bg-[#d2d2d2] hover:text-black transition-all ease-in-out duration-300 hover:scale-110 w-fit">Смартфоны</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Телевизоры</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Ноутбуки</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Смартчасы</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Аксессуары</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Крупная Бытовая Техника</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Мелкая Бытовая Техника</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Встраимая Техника</h1>
      
      <br />
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Красота И Здоровье</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Климатическая Техника</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Мебель</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Текстиль</h1>
      <h1 className="hit-option rounded-3xl bg-[#d2d2d2] p-2 text-black hover:bg-black hover:text-white transition-all ease-in-out duration-300 hover:scale-110 w-fit">Посуда</h1>
    </div>
    <div className="hit-products grid grid-cols-6 mt-10 gap-20">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </div>
  </div>
</div>
<Footer />

  </div>
     </>
  )
}

export default Homepage
