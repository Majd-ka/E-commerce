import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/Related_products/RelatedProducts";
const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id == productId);
  return (
    <div>
      {<Breadcrums product={product} />}
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
