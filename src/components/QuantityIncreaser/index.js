import React from 'react';
import "./increaser.css";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {addProductToCart, removeProductFromCart} from "../../redux/actions/cartActions";
import {sendMessage} from "../Notifications";

const QuantityIncreaser = ({product}) => {
  const dispatch = useDispatch();

  const handleProductChanges = (buttonType) => {
    if (buttonType === "increase") {
      sendMessage({
        title: "Ürün adeti arttırıldı !",
        type: "success"
      });
      dispatch(addProductToCart(product));
    } else {
      sendMessage({
        title: "Ürün sepetinizden çıkarıldı !",
        type: "success"
      });
      dispatch(removeProductFromCart(product));
    }
  }

  return (
      <div className="increaser">
        <button className="quantityButton" disabled={product.quantity === 1} onClick={() => handleProductChanges("decrease")}>-</button>
          <span className="productQuantity">{product.quantity} <br/><label>Adet</label></span>
        <button className="quantityButton" onClick={() => handleProductChanges("increase")}>+</button>
      </div>
  );
};

QuantityIncreaser.propTypes = {
  product: PropTypes.object.isRequired,
};

export default QuantityIncreaser;
