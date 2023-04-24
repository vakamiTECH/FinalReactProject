import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import AddShopPage from './pages/AddShopPage';
import Header from './components/layout/Header';
import Feedback from './firebase/ui/feedback/Feedback';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="h-screen w-screen bg-secondary">
      <Header />
      <Feedback />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <RegisterPage />}
        />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/shops/add/" element={<AddShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
