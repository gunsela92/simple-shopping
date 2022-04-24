import React, {useState} from "react";
import PropTypes from "prop-types";
import "./productDetails.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import FacebookIcon from "../../assets/icons/icons8-facebook.svg";
import TwitterIcon from "../../assets/icons/icons8-twitter.svg";
import InstagramIcon from "../../assets/icons/icons8-instagram.svg";
import WhatsappIcon from "../../assets/icons/icons8-whatsapp.svg";
import {addProductToCart} from "../../redux/actions/cartActions";
import {useDispatch} from "react-redux";

const ProductInformation = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch()

  const selectSize = (size) => {
    setSelectedSize(size)
  }

  const addProduct = () => {
    if (selectedSize === "") {
      return
    }
    try {
      const productInfo = {
        ...product,
        size: selectedSize
      }
      dispatch(addProductToCart(productInfo));
    } catch (e) {
      return e;
    }
  }

  return (
    <div className="productInfoWrapper">
      <img className="productInfoImage" src={product?.img} alt="productImg"/>
      <div className="productDetailsWrapper">
        <span className="productName"><strong>{product?.productName}</strong></span>
        <span className="productPrice">{product?.price} ₺</span>
        <div>
            Beden :
          <select className="sizePicker" onChange={(e) => selectSize(e?.target?.value)}>
            <option value={-1}>Seçiniz</option>
            {product?.sizes?.map(e => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="shareIcons">
          <img src={FacebookIcon} alt="socialImg" />
          <img src={TwitterIcon} alt="socialImg" />
          <img src={InstagramIcon} alt="socialImg" />
          <img src={WhatsappIcon} alt="socialImg" />
        </div>
        <button className="addToCardBtn" onClick={addProduct}>
          <FontAwesomeIcon icon={faShoppingBag} className="addToCartIcon" />
            SEPETE EKLE
        </button>
      </div>
    </div>
  );
};

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductInformation;
