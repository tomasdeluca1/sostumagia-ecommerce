import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/fontawesome-free-solid";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const totalQuantity = getTotalQuantity();
  // console.log(totalQuantity);

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faCartArrowDown} /> {totalQuantity}
    </div>
  );
};

export default CartWidget;
