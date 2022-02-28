import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { products } from "../components/ProductGrid/products";
import ProductInformation from "../components/ProductDetails";

const ProductDetails = () => {
  const params = useParams();
  const productId = params?.id;
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p?.id === parseInt(productId));
      setSelectedProduct(foundProduct);
    }
  }, [productId]);


  return (
      <ProductInformation product={selectedProduct}/>
  );
};

export default ProductDetails;
