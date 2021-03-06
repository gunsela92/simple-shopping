import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Header from "../components/Header";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import Alerts from "../components/Notifications";

const Routing = () => {

  return (
    <BrowserRouter>
      <Alerts />
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
