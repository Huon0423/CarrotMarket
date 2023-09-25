import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import UsedTrans from './components/UsedTrans/UsedTrans';
import LocalShop from './components/LocalShop/LocalShop'
import Jobs from './components/Jobs/Jobs'
import RealEstate from './components/RealEstate/RealEstate'
import Car from './components/Car/Car'


function App() {
  return (
    <Routes>
      <Route path='/' element={<UsedTrans />} />
      <Route path='/LocalShop' element={<LocalShop />} />
      <Route path='/Jobs' element={<Jobs />} />
      <Route path='/RealEstate' element={<RealEstate />} />
      <Route path='/Car' element={<Car />} />
    </Routes>
  );
}

export default App;