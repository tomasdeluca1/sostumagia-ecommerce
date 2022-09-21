import React from "react";
import "./ItemCount.css";
import Button from "../Button/Button";

const ItemCount = ({ onAdd, onDiminish }) => {
  return (
    <div className="flexButtons">
      <Button
        accion={onDiminish}
        label="Restar"
        background="red"
        fontColor="white"
      />
      <Button
        accion={onAdd}
        label="Sumar"
        background="green"
        fontColor="white"
      />
    </div>
  );
};

export default ItemCount;
