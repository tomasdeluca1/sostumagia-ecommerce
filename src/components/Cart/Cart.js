import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import CartCard from "./CartCard";
import Button from "../Button/Button";
import { NotificationContext } from "../../context/NotificationContext/Notification";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeList } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    setNotification("fail", "Carrito de compras vaciado");
  }, [removeList]);

  const arrayCart = cart;

  if (arrayCart.length === 0) return <h2>El carrito se encuentra vacío</h2>;

  return (
    <div>
      {arrayCart.map((item) => (
        <CartCard
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          quantity={item.quantity}
        />
      ))}
      <Button
        accion={removeList}
        label="Eliminar carrito"
        background="indianred"
        fontColor=" rgb(254, 213, 213)"
        topRight="0.5rem"
        bottomRight="0.5rem"
        topLeft="0.5rem"
        bottomLeft="0.5rem"
        width="200px"
      />
    </div>
  );
};

export default Cart;
