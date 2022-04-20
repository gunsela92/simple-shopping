import {useState} from 'react';
import {products} from "./products";
import "./productGrid.css";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../redux/actions/cartActions";
import Modal from "../Modal";
import {useNavigate} from "react-router-dom";
import Slider from "../Slider";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
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
        <Slider />
        <div className="product-grid-container">
          {products?.map(e => (
              <div key={e?.id} className="product">
                <div className="product-image-wrapper">
                  <img src={e?.img} className="product-grid-image" alt="productImg"
                       onClick={() => navigate("/product/" + e?.id)}/>
                </div>
                <span className="productName">{e?.productName}</span>
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
                {selectedProduct?.sizes?.map(e => (
                    <option value={e}>{e}</option>
                ))}
              </select>
            </Modal>
        )}
      </>
  );
};

export default ProductGrid;
