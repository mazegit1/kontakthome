import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Promotion from './routes/Promotions';
import Shops from './routes/Shops';
import Corporative from './routes/Corporative';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/corporative" element={<Corporative />} />
      </Routes>
    </BrowserRouter>
  
   

  );
};

export default App;
