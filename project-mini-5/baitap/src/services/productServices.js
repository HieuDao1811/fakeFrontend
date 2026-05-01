import { get } from "../utils/requests.js";

export const getProductList = async (path) => {
    const result = await get(path);
    return result;
}