import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/fontawesome-free-solid";
import { useCart } from "../../context/cartContext/CartContext";

const CartWidget = ({ className }) => {
  const { getTotalQuantity } = useCart();

  const totalQuantity = getTotalQuantity();

  return (
    <div className={className}>
      <FontAwesomeIcon icon={faCartArrowDown} /> {totalQuantity}
    </div>
  );
};

export default CartWidget;
