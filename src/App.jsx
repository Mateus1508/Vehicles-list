import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddVehicle from './pages/AddVehicle';
import List from './pages/List';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<AddVehicle />} />
      <Route path="/list" element={<List />} />
    </Routes>
  )
}

export default App;
