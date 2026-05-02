import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import ProductItem from "./ProductItem.js";
import "./Product.css";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setData(result);
    }

    fetchApi();
  }, []);

  return(
    <>
      <div className="product">
        {data.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Product;