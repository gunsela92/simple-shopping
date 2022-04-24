import React, {useState} from "react";
import {products} from "./products";
import "./productGrid.css";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../redux/actions/cartActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import Modal from "../Modal";
import {useNavigate} from "react-router-dom";
import {sendMessage} from "../Notifications";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const navigate = useNavigate();


  const showProductDetails = (product) => {
    try {
      setShowProductModal(true);
      setSelectedProduct(product);
    } catch (e) {
      return e;
    }
  }

  const addProduct = () => {
    if (selectedSize === "") {
      return
    }
    try {
      const productInfo = {
        ...selectedProduct,
        size: selectedSize
      }
      dispatch(addProductToCart(productInfo));
      setShowProductModal(false);
      sendMessage({
        title: "Ürün sepete eklendi !",
        type: "success"
      });
    } catch (e) {
      return e;
    }
  }

  const selectSize = (e) => {
    if (e?.target?.value !== -1) {
      setSelectedSize(e?.target?.value);
    }
  }

  return (
    <>
      <div className="product-grid-container">
        {products?.map(e => (
          <div key={e?.id} className="product">
            <div className={`product-image-wrapper ${hoveredItemIndex === e?.id ? "hovered" : ""}`} onMouseEnter={() => setHoveredItemIndex(e?.id)} onMouseLeave={() => setHoveredItemIndex(null)}>
              <button onClick={() => navigate("/product/" + e?.id)} className={`addToCardBtnView ${hoveredItemIndex === e?.id ? "visibleButton" : ""}`}>
                <FontAwesomeIcon icon={faEye} className="eyeIcon"/>
                      İNCELE
              </button>
              <img src={e?.img} className="product-grid-image" alt="productImg"/>
            </div>
            <span className="productgridName">{e?.productName}</span>
            <div>
              {e?.oldPrice && (
                <span className="old-price">{e?.oldPrice} ₺</span>
              )}
              {e?.price} ₺
            </div>
            <button className="addToCardBtn" onClick={() => showProductDetails(e)}>SEPETE EKLE</button>
          </div>
        ))}
      </div>
      {showProductModal && (
        <Modal close={() => setShowProductModal(false)} open={showProductModal} title={"Ürün seçenekleri"}
          size="small" saveFunc={addProduct}>
              Lütfen beden seçiniz :
          <select className="sizePicker" onChange={(e) => selectSize(e)}>
            <option value={-1}>Seçiniz</option>
            {selectedProduct?.sizes?.map((e, index) => (
              <option key={index} value={e}>{e}</option>
            ))}
          </select>
        </Modal>
      )}
    </>
  );
};

export default ProductGrid;
