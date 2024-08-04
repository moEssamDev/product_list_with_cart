import React from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/data";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  return (
    <div className="food-display">
      <h1>Desserts</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              category={item.category}
              image={item.image.desktop}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
