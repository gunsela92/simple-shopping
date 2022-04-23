import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {removeProductFromCart} from "../../redux/actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {sendMessage} from "../Notifications";

const CartModal = ({cartOpen, close}) => {
  const ref = useRef();
  const cart = useSelector((state) => state?.cart?.PRODUCTS);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeProduct = (product) => {
    dispatch(removeProductFromCart(product))
    sendMessage({
      title: "Ürün sepetinizden çıkarıldı !",
      type: "success"
    });
  }

  const gotoCart = () => {
    close()
    navigate("/cart")
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      close()
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={cartOpen ? "cartContainer open" : "cartContainer close"} ref={ref}>
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
              <div key={product?.id} className="cartProductsList">
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
  );
};

export default CartModal;
