import { useSelector } from "react-redux";
import "./CartList.css";

function CartList() {
  const cart = useSelector(state => state.cartReducer);

  return (
    <>
      <div className="cart">
        {cart.map(item => {
          return (
            <div className="cart__item" key={item.id}>
              <div className="cart__image">
                <img src={item.info.thumbnail} alt={item.info.title} />
              </div>

              <div className="cart__content">
                <div className="cart__title">{item.info.title}</div>

                <div className="cart__new-price">
                  {(item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(0)}$
                </div>

                <div className="cart__old-price">{item.info.price}$</div>
              </div>

              <div className="cart__quantity">
                Số lượng: {item.quantity}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CartList;