import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext/CartContext";
import CartCard from "./CartCard";
import Button from "../Button/Button";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeList, getTotal } = useContext(CartContext);

  const totalPrice = getTotal();

  const arrayCart = cart;

  if (arrayCart.length === 0)
    return (
      <h2 className="vistaImposibilitada">El carrito se encuentra vacío</h2>
    );

  return (
    <div className="cartFlex">
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
      <h1 style={{ margin: "30px 0 " }}>TOTAL A PAGAR: {totalPrice} ARS</h1>
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
      <div className="checkoutLink">
        <Link to="/checkout"> Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
