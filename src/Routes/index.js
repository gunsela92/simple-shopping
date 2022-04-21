import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Header from "../components/Header";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";

const Routing = () => {

  return (
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
  )
}

export default Routing
