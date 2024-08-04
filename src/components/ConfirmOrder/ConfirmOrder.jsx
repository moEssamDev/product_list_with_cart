import React, { useContext } from "react";
import "./ConfirmOrder.css";
import confirmedIcon from "../../assets/icon-order-confirmed.svg";
import { food_list } from "../../assets/data";
import { StoreContext } from "../../contexts/StoreContext";

const ConfirmOrder = ({ setShowOrders }) => {
  const { cartItems, setCartItems } = useContext(StoreContext);

  let order_price = 0;

  const resetCart = () => {
    setCartItems({});
    setShowOrders(false);
  };

  return (
    <div className="back-layer">
      <div className="confirm-order">
        <img className="confirmed" src={confirmedIcon} alt="order confirmed" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="confirm-items">
          {food_list.map((item, index) => {
            if (cartItems[item.id] > 0) {
              const quantity = cartItems[item.id];
              const itemTotal = quantity * item.price;
              order_price += itemTotal;

              return (
                <div>
                  <div className="confirm-item" key={item.id}>
                    <div className="item-info">
                      <img src={item.image.thumbnail} alt="item" />
                      <div className="item-info-text">
                        <h3 className="item-name">{item.name}</h3>
                        <div>
                          <p className="quantity">{quantity}x</p>
                          <p className="price">@ ${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    <p className="item-total-price">${itemTotal.toFixed(2)}</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
          <div className="total-order-price">
            <p>Order Total</p>
            <h3>${order_price.toFixed(2)}</h3>
          </div>
        </div>
        <button onClick={resetCart}>Start new Order</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
