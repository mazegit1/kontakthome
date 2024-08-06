import React from 'react';
import Footer from '../components/Footer';

import MapComponent from '../components/MapComponent';

function Shops() {
  return (
    <>
    <div className="wrapper flex-col justify-between flex items-center ">
    <div className="Shops w-[100%]">
      <h1 className="text-center text-2xl font-bold my-4">Наши Магазины:</h1>
      <MapComponent />
    </div>
    <Footer />
</div>
   </>
  );
}

export default Shops;
