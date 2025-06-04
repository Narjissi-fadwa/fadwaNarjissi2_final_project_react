import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import Footer from './layouts/footer';
import ShopPage from './pages/shop/shop';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>

      <Footer />

    </>
  );
};

export default App;
