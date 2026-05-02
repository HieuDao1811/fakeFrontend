import { Link } from "react-router";
import { useSelector } from "react-redux";

function CartMini() {
  const cart = useSelector(state => state.cartReducer);

  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return(
    <>
      <Link to="/cart">Cart({total})</Link>
    </>
  )
}

export default CartMini;