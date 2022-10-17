import { useState } from "react";
import "./ItemCount.css";
import Button from "../Button/Button";

const ItemCount = ({ quantity, increment, decrement }) => {
  return (
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
  );
};

export default ItemCount;
