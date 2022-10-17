import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../asyncMock";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext/CartContext";

const ItemDetail = ({
  id,
  name,
  img,
  type,
  stock,
  description,
  price /*, counter, onAdd, onDiminish*/,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useContext(CartContext);

  // useEffect () = () =>{}

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

  const handleOnAdd = () => {
    // setQuantityToAdd(quantity);

    const productToAdd = { id, name, price, img, quantity };
    addItem(productToAdd);
    console.log(productToAdd);
    // setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
  };

  return (
    <div className="itemDetailCard">
      <div className="courseDetailName">{name}</div>
      <div /* style={{ backgroundImage: `${item.img}` }}*/>
        <img className="courseDetailImg" src={img} alt={id} />
      </div>
      <div className="courseDetailTxt">
        <h4
          className="courseDetailType"
          style={{ width: "50%", margin: "0 20% 15px 20%" }}
        >
          {type}
        </h4>
        <p className="courseDetailDesc">{description}</p>
      </div>
      <div className="bottomDetailCard">
        <div className="courseDetailPriceStock" style={{ textAlign: "left" }}>
          <h5 className="courseDetailStock">Disponibles: {stock}</h5>
          <h4 className="courseDetailPrice">{price}</h4>
        </div>
        <div>
          {quantityToAdd === 0 ? (
            <ItemCount
              onAdd={handleOnAdd}
              increment={increment}
              decrement={decrement}
              quantity={quantity}
              setQuantity={setQuantity}
              stock={stock}
            />
          ) : (
            <Link to="/cart">Finalizar compra</Link>
          )}
        </div>
      </div>
      {/* <Link
        to="/cart"
        className="addToCart"
        style={{
          background: "rgb(254, 213, 213)",
          color: "indianred",
          border: "0px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </Link> */}
      <div
        onClick={handleOnAdd}
        // to="/cart"
        className="addToCart"
        style={{
          background: "rgb(254, 213, 213)",
          color: "indianred",
          border: "0px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </div>
    </div>
  );
};

export default ItemDetail;
