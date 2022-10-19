import { useState } from "react";
import "./ItemCount.css";
import Button from "../Button/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="itemCount">
      <div className="flexButtons">
        <Button
          accion={decrement}
          label="-"
          background="rgb(254, 213, 213,0.9)"
          fontColor="indianred"
          topLeft="1rem"
          bottomLeft="1rem"
        />
        <div className="itemCounter">{quantity}</div>
        <Button
          accion={increment}
          label="+"
          background="rgb(254, 213, 213,0.9)"
          fontColor="indianred"
          topRight="1rem"
          bottomRight="1rem"
        />
      </div>

      <button
        onClick={() => {
          onAdd(quantity);
        }}
        // to="/cart"
        className="addToCart"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
