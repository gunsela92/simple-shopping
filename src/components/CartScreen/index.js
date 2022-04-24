import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./cardScreen.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faSadTear} from '@fortawesome/free-solid-svg-icons'
import {removeProductFromCart} from "../../redux/actions/cartActions";
import {useNavigate} from "react-router-dom";
import {sendMessage} from "../Notifications";
import QuantityIncreaser from "../QuantityIncreaser";

const CartScreen = () => {
  const cart = useSelector((state) => state?.cart?.PRODUCTS);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const calculateCartTotal = () => {
    const cartTotal = cart.reduce((total, product) => {
      return total + parseInt(product.price);
    }, 0);
    setCartTotal(cartTotal)
  }

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const deleteProduct = (product) => {
    dispatch(removeProductFromCart(product));
    sendMessage({
      title: "Ürün sepetinizden çıkarıldı !",
      type: "success"
    });
  }

  return (
      <>
        <div className="cartPage-container">
          <div className="cartProducts-wrapper">
            {cart?.length > 0 && cart?.map(product => (
                <div key={product?.id} className="cartPage-cartproduct">
                  <img src={product?.img} className="cartPage-productimage" alt={"cartProduct"}/>
                  <div>{product?.productName} <br/> <span
                      className="cardPage-productSize">Beden : {product?.size}</span></div>
                  <div>{product?.price} ₺</div>
                  <QuantityIncreaser product={product}/>
                  <FontAwesomeIcon icon={faTrashAlt} className="cartPage-deleteProduct"
                                   onClick={() => deleteProduct(product)}/>
                </div>
            ))}
          </div>
          {cart?.length > 0 && (
              <div className="cartPage-cartTotal">
                Toplam Sepet Tutarı :
                {cartTotal} ₺
                <button className="gotoPaymentBtn">ÖDEME YAP</button>
              </div>
          )}
        </div>
        {cart?.length === 0 && (
            <div className="cartPage-emptyCart">
              <FontAwesomeIcon icon={faSadTear} className="cartPage-emptyCartIcon"/>
              SEPETİNİZDE ÜRÜN BULUNMUYOR
              <button className="gotoShoppingBtn" onClick={() => navigate("/")}>ALIŞVERİŞE BAŞLA !</button>
            </div>
        )}
      </>
  );
};

export default CartScreen;
