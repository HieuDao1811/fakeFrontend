import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer);

  const handleAddToCart = () => {
    if(cart.some(itemCart => itemCart.id === item.id)) dispatch(updateQuantity(item.id));
    else dispatch(addToCart(item.id, item));

  }
  return (
    <>
      <div className="product__item">
        <img className="product__image" src={item.thumbnail} alt={item.title}></img>
        <h3 className="product__title">{item.title}</h3>
        <div className="product__new-price">{(item.price * (100-item.discountPercentage)/100).toFixed(2)}$</div>
        <div className="product__old-price">{item.price}$</div>
        <div className="product__discountPercentage">{item.discountPercentage}</div>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </>
  )
}

export default ProductItem;