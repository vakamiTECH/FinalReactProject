import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import Header from './components/layout/Header';
import Feedback from './firebase/ui/feedback/Feedback';

function App() {
  return (
    <div className="h-screen w-screen bg-secondary">
      <Header />
      <Feedback />
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
