import React, { useState } from "react";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import CartItems from "./components/CartItems/CartItems";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";

const App = () => {
  const [showOrders, setShowOrders] = useState(false);

  return (
    <>
      {showOrders ? <ConfirmOrder setShowOrders={setShowOrders} /> : <></>}
      <div className="app">
        <FoodDisplay />
        <CartItems setShowOrders={setShowOrders} />
      </div>
    </>
  );
};

export default App;
