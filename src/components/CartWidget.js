import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/fontawesome-free-solid";

const CartWidget = () => {
  return (
    <div className="cart-box">
      {" "}
      <a href="" className="cart-icon">
        <FontAwesomeIcon icon={faCartArrowDown} />
      </a>
    </div>
  );
};

export default CartWidget;
