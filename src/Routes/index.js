import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import ProductDetails from "../pages/ProductDetails";
import Header from "../components/Header";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

const Routing = () => {

  return (
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ProductGrid />}/>
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
  )
}

export default Routing