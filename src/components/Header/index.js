import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart, faBars, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import "./header.css";
import Hoc from "../HOC";
import CartModal from "./cart";

const Header = ({isMobile}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state?.cart?.PRODUCTS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const closeCartModal = () => {
    setCartOpen(false);
  };

  const navigateToRoute = (route) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        {isMobile && (
          <FontAwesomeIcon icon={mobileMenuOpen ? faArrowRight : faBars} className="mobileMenuIcon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
        )}
        <span onClick={() => navigateToRoute("/")} className="header-logo"/>
        {!isMobile && (
          <div className="header-right">
            <span className={`${pathname === "/" ? "active" : ""}`} onClick={() => navigateToRoute("/")}>Ana Sayfa</span>
            <span className={`${pathname?.includes("about") ? "active" : ""}`} onClick={() => navigateToRoute("/about")}>Hakkımızda</span>
            <span className={`${pathname?.includes("contact") ? "active" : ""}`} onClick={() => navigateToRoute("/contact")}>İletişim</span>
            <div className="header-cart-icon" onClick={() => setCartOpen(!cartOpen)}>
              <FontAwesomeIcon icon={faShoppingCart}/>
              {cart?.length > 0 && (
                <div className="cartLength">{cart?.length}</div>
              )}
            </div>
          </div>
        )}
        {isMobile && (
          <div className="header-cart-icon" onClick={() => setCartOpen(!cartOpen)}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {cart?.length > 0 && (
              <div className="cartLength">{cart?.length}</div>
            )}
          </div>
        )}
        <div className={`mobileMenuWrapper ${mobileMenuOpen ? "mobileMenuActive" : ""}`}>
          <span className={`${pathname === "/" ? "active" : ""}`} onClick={() => navigateToRoute("/")}>Ana Sayfa</span>
          <span className={`${pathname?.includes("about") ? "active" : ""}`} onClick={() => navigateToRoute("/about")}>Hakkımızda</span>
          <span className={`${pathname?.includes("contact") ? "active" : ""}`} onClick={() => navigateToRoute("/contact")}>İletişim</span>
        </div>
      </div>
      <CartModal cartOpen={cartOpen} close={closeCartModal} />
    </>
  );
};

export default Hoc(Header);
