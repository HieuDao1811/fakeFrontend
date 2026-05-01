import { get } from "../utils/request"

export const getProductList = async () => {
  const productList = await get("products");
  return productList;
}