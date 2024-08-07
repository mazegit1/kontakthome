import React from 'react';
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent';

function Shops() {
  return (
    <>
    <div className="wrapper bg-gray-200 h-[100%] flex-col justify-between flex items-center ">
    <div className="Shops w-[100%]">
      <h1 className="text-center text-2xl font-bold my-4">Наши Магазины:</h1>
      <MapComponent />
    </div>
    <div className="map mb-8">
      <div className="map-top">

      </div>
      <div className="map-cards grid grid-cols-3 gap-8">
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
        <div className="map-card bg-white p-4 rounded-lg">
          <h1 className='text-xl font-semibold mb-2'>Kontakt "Vurğun Residence"</h1>
          <p className='mb-8 text-lg text-gray-600'>Насиминский р-н, ул. С. Вургуна, 110 (рядом с Бакинским <br /> Государственным Цирком)</p>
          <p className='text-lg text-gray-600'><span className='text-lg text-green-600'>Часы работы:</span> с 10:00 по 21:00</p>
        </div>
      </div>
    </div>
    <Footer />
</div>
   </>
  );
}

export default Shops;
