import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../contexts/StoreContext";
import add_to_cart from "../../assets/icon-add-to-cart.svg";
import increment_quantity from "../../assets/icon-increment-quantity.svg";
import decrement_quantity from "../../assets/icon-decrement-quantity.svg";

const FoodItem = ({ id, name, price, category, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="Food item" />
        {itemCount === 0 ? (
          <div className="add" onClick={handleAddToCart}>
            <img src={add_to_cart} alt="Add to cart" />
            <p>Add to Cart</p>
          </div>
        ) : (
          <div className="food-item-counter">
            <img
              src={decrement_quantity}
              alt="Decrement quantity"
              onClick={handleRemoveFromCart}
            />
            <p>{itemCount}</p>
            <img
              src={increment_quantity}
              alt="Increment quantity"
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p className="food-item-category">{category}</p>
        <p className="food-item-name">{name}</p>
        <p className="food-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
