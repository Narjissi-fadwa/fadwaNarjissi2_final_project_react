import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import Footer from './layouts/footer';
import ShopPage from './pages/shop/shop';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import Cart from './pages/home/shoppingCart/shoppingCart';
import { CartProvider } from './context';
import UserPage from './pages/user/user';


const App = () => {
  return (
    <>
      <CartProvider>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Shop" element={<ShopPage />} />
    <Route path="/About" element={<AboutPage />} />
    <Route path="/Contact" element={<ContactPage />} />
    <Route path="/ShoppingCart" element={<Cart />} />
    <Route path="/User" element={<UserPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  <Footer />
</CartProvider>

    </>
  );
};

export default App;
