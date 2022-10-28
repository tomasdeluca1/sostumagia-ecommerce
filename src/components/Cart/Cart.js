import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext/CartContext";
import CartCard from "./CartCard";
import Button from "../Button/Button";

const Cart = () => {
  const { removeList, getTotal, cart } = useCart();

  const totalPrice = getTotal();

  if (cart.length === 0)
    return (
      <h2 className="vistaImposibilitada">El carrito se encuentra vacío</h2>
    );

  return (
    <div className="cartFlex">
      <h1>CARRITO DE COMPRAS</h1>
      <h2 style={{ margin: "10px 0 " }}>TOTAL A PAGAR: {totalPrice} ARS</h2>
      <div className="cartButtonsFlex">
        <Link to="/checkout">
          <Button
            label="Checkout"
            background="green"
            fontColor=" white"
            topRight="0.5rem"
            bottomRight="0.5rem"
            topLeft="0.5rem"
            bottomLeft="0.5rem"
            width="200px"
          />
          {/* {" "}
          <div className="checkoutLink">Checkout</div> */}
        </Link>
        <Button
          accion={removeList}
          label="Eliminar carrito"
          background="red"
          fontColor=" white"
          topRight="0.5rem"
          bottomRight="0.5rem"
          topLeft="0.5rem"
          bottomLeft="0.5rem"
          width="200px"
        />
      </div>
      {cart.map((item) => (
        <CartCard
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;
