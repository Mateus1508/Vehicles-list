import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewVehicle from './pages/NewVehicle';
import List from './pages/List';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addnew" element={<NewVehicle />} />
      <Route path="/list" element={<List />} />
    </Routes>
  )
}

export default App;
