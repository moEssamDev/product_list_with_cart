import React, { useContext } from "react";
import "./CartItems.css";
import empty_cart from "../../assets/illustration-empty-cart.svg";
import remove_item from "../../assets/icon-remove-item.svg";
import carbon_neutral from "../../assets/icon-carbon-neutral.svg";
import { StoreContext } from "../../contexts/StoreContext";
import { food_list } from "../../assets/data";

const CartItems = ({ setShowOrders }) => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  const cartTotal = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  let order_total = 0;

  return (
    <div className="cart-items">
      <h2>Your Cart ({cartTotal})</h2>
      {Object.values(cartItems).every((quantity) => quantity === 0) ? (
        <div className="empty-cart">
          <img src={empty_cart} alt="empty cart" />
          <p className="empty-cart-text">Your add items will appear here</p>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {food_list.map((item, index) => {
              if (cartItems[item.id] > 0) {
                order_total += cartItems[item.id] * item.price;

                return (
                  <div>
                    <div className="cart-items-item" key={item.id}>
                      <div className="cart-item-info">
                        <p className="item-name">{item.name}</p>

                        <div>
                          <p className="quantity">{cartItems[item.id]}x</p>
                          <p className="price">@ ${item.price.toFixed(2)}</p>
                          <p className="total">
                            ${(cartItems[item.id] * item.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <p
                        className="remove"
                        src={remove_item}
                        alt="remove item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}

            <div className="order-total">
              <p>Order Total</p>
              <h2>${order_total.toFixed(2)}</h2>
            </div>

            <div className="carbon-neutral">
              <img src={carbon_neutral} alt="carbon neutral" />
              <p>
                This is a <span>carbon-neutral</span> delivery
              </p>
            </div>

            <button
              className="confirm-button"
              onClick={() => setShowOrders(true)}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
