import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import ProductItem from "./ProductItem";
import "./Product.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setData(result);
    }

    fetchApi();
  }, []);

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <div className="product">
        {data.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
}

export default Home;
