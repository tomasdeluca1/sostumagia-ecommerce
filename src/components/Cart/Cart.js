import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext/CartContext";
import CartCard from "./CartCard";
import Button from "../Button/Button";
import "../ItemListContainer/ItemListContainer.css";

const Cart = () => {
  const { removeList, getTotal, cart } = useCart();

  const totalPrice = getTotal();

  if (cart.length === 0)
    return (
      <div style={{ position: "relative", minHeight: "50vh" }}>
        <h2 className="vistaImposibilitada">El carrito se encuentra vacío</h2>
      </div>
    );

  return (
    <div className="cartFlex">
      <h3 className="categoryTitle" style={{ display: "block" }}>
        Carrito de compras
      </h3>
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
      <div className="cartButtonsFinalPrice">
        <h4 style={{ margin: "10px 0", color: "#fed5d5e6" }}>
          TOTAL A PAGAR: {totalPrice} ARS
        </h4>
        <div className="cartButtonsFlex">
          <Link to="/checkout">
            <Button
              label="Checkout"
              background="#23C552"
              fontColor=" white"
              topRight="0.5rem"
              bottomRight="0.5rem"
              topLeft="0.5rem"
              bottomLeft="0.5rem"
              width="25vw"
            />
            {/* {" "}
          <div className="checkoutLink">Checkout</div> */}
          </Link>

          <Button
            accion={removeList}
            label="Vaciar"
            background="#F84F31"
            fontColor=" white"
            topRight="0.5rem"
            bottomRight="0.5rem"
            topLeft="0.5rem"
            bottomLeft="0.5rem"
            width="25vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
