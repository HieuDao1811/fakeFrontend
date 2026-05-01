import { useEffect, useState } from "react";

import { getProductList } from "../../services/productServices.js";
import AddToCart from "../AddToCart/index.js";

import "./ProductList.css";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList("products");
      setData(result);
    }

    fetchApi();
  }, [])

  return (
    <>
      <div className="product">
      {data.map((item) => (
          <div className="product__item" key={item.id}>
            <img className="product__img" src={item.thumbnail}></img>
            <h3 className="product__title">{item.title}</h3>
            <div className="product__new-price">{(item.price * (100 - item.discountPercentage) / 100).toFixed(2)}$</div>
            <div className="product__old-price">{item.price}$</div>
            <div className="product__percent">{item.discountPercentage}%</div>
            < AddToCart />
          </div>
      ))}
      </div>
    </>
  );
}

export default ProductList;
