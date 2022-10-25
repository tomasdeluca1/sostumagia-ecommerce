import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext/CartContext";
import { NotificationContext } from "../../context/NotificationContext/Notification";

const ItemDetail = ({ id, name, img, type, stock, description, price }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = { id, name, price, img, quantity };

    addItem(productToAdd);
  };

  return (
    <div className="itemDetailCard">
      <div className="courseDetailName">{name}</div>
      <div /* style={{ backgroundImage: `${item.img}` }}*/>
        <img className="courseDetailImg" src={img} alt={id} />
      </div>
      <div className="courseDetailTxt">
        <h4 className="courseDetailType">{type}</h4>
        <p className="courseDetailDesc">{description}</p>
      </div>
      <div className="bottomDetailCard">
        <div className="courseDetailPriceStock" style={{ textAlign: "left" }}>
          <h5 className="courseDetailStock">Disponibles: {stock}</h5>
          <h4 className="courseDetailPrice">{price} ARS</h4>
        </div>
      </div>

      <div>
        {quantityToAdd === 0 ? (
          <ItemCount onAdd={handleOnAdd} stock={stock} />
        ) : (
          <Link to="/cart">Finalizar compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
