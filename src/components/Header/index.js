import React, {useState} from 'react';
import "./header.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {faTimes, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {removeProductFromCart} from "../../redux/actions/cartActions";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state?.cart?.PRODUCTS);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const removeProduct = (product) => {
    dispatch(removeProductFromCart(product))
  }

  const gotoCart = () => {
    setCartOpen(false);
    navigate("/cart")
  }

  return (
      <div>
        <div className="header">
          <span onClick={() => navigate("/")} className="header-logo"/>
          <div className="header-right">
            <span className={`${pathname === "/" ? "active" : ''}`} onClick={() => navigate("/")}>Ana Sayfa</span>
            <span className={`${pathname?.includes("about") ? "active" : ''}`} onClick={() => navigate("/about")}>Hakkımızda</span>
            <span className={`${pathname?.includes("contact") ? "active" : ''}`} onClick={() => navigate("/contact")}>İletişim</span>
            <div className="header-cart-icon" onClick={() => setCartOpen(!cartOpen)}>
              <FontAwesomeIcon icon={faShoppingCart}/>
              {cart?.length > 0 && (
                  <div className="cartLength">{cart?.length}</div>
              )}
            </div>
          </div>
        </div>
        <div className={cartOpen ? "cartContainer open" : "cartContainer close"}>
          {cartOpen && (
              <div>
                <span className="cartTitle">Sepetim</span>
                <div className="cartProductsList titles">
                  <span/>
                  <span>Ürün</span>
                  <span>Beden</span>
                  <span>Fiyat</span>
                </div>
                <div className="cartInner">
                  {cart?.length > 0 && cart?.map(product => (
                      <div className="cartProductsList">
                        <img className="cartImage" src={product?.img} alt={"cartImage"}/>
                        <span className="cartProductDetails">{product?.productName}</span>
                        <span className="cartProductDetails">{product?.size}</span>
                        <span className="cartProductDetails">{product?.price} ₺</span>
                        <FontAwesomeIcon icon={faTimes} className="removeFromCart"
                                         onClick={() => removeProduct(product)}/>
                      </div>
                  ))}
                  {cart?.length === 0 && (
                      <div className="noProductsInCart">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="noProductsInCartIcon" />
                        Sepetinizde ürün bulunmuyor.
                      </div>
                  )}
                  <button className="gotoCartBtn" onClick={gotoCart}>
                    SEPETE GİT
                  </button>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default Header;
