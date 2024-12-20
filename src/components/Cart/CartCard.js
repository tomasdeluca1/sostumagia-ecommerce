import "./cart.css";
import Button from "../Button/Button";
import { useCart } from "../../context/cartContext/CartContext";
import React from "react";

const CartCard = ({ id, name, price, img, quantity }) => {
  const { deleteItem } = useCart();

  const handleOnDelete = () => {
    deleteItem(id);
  };

  return (
    <div className="cartCard">
      <div className="cartCardSeparator">
        <img src={img} className="cartProductImg" alt="Product" />
      </div>
      <div className="cartCardSeparator">
        <div>Producto</div>
        <h3 className="cartName">{name}</h3>
      </div>
      <div className="cardInfoFlex">
        <div className="cartInfo">
          <div>Precio</div>
          <h3 className="cartName">{price} ARS</h3>
        </div>
        <div className="cartInfo">
          <div>Cantidad</div>
          <h3 className="cartName">{quantity}</h3>
        </div>
      </div>
      <div className="cartCardSeparator">
        <Button
          accion={handleOnDelete}
          label="Quitar"
          background="#F84F31"
          fontColor="white"
          topRight="0.5rem"
          bottomRight="0.5rem"
          topLeft="0.5rem"
          bottomLeft="0.5rem"
          width="100px"
        />
      </div>
    </div>
  );
};

export default CartCard;
