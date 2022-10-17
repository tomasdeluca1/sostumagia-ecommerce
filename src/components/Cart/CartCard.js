import "./cart.css";
import Button from "../Button/Button";
import { CartContext } from "../../context/cartContext/CartContext";
import React, { useContext, useEffect } from "react";

const CartCard = ({ id, name, price, img, quantity }) => {
  const { deleteItem } = useContext(CartContext);

  const handleOnDelete = () => {
    deleteItem(id);
  };

  return (
    <div className="cartCard">
      <div className="cartCardSeparator">
        <img
          src={img}
          alt={`Imágen de producto ${id}`}
          className="cartProductImg"
        />
      </div>
      <div className="cartCardSeparator">
        <div>Producto</div>
        <h3>{name}</h3>
      </div>
      <div className="cartCardSeparator">
        <div>Precio</div>
        <h3>{price}</h3>
      </div>
      <div className="cartCardSeparator">
        <div>Cantidad</div>
        <h3>{quantity}</h3>
      </div>
      <div className="cartCardSeparator">
        <Button
          accion={handleOnDelete}
          label="Quitar"
          background="red"
          fontColor="white"
          topRight="0.5rem"
          bottomRight="0.5rem"
          topLeft="0.5rem"
          bottomLeft="0.5rem"
          width="110px"
        />
      </div>
    </div>
  );
};

export default CartCard;
