import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import Header from './components/layout/Header';
import { app } from './firebase/firebase';

function App() {
  return (
    <div>
      <Header />
      <h2>Env reiksme: {import.meta.env.VITE_NAME}</h2>
      <h2>Env reiksme: {import.meta.env.DB}</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/shops/add/" element={<AddShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
