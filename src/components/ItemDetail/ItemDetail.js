import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/cartContext/CartContext";
import ItemImg from "../ItemImg/ItemImg";

const ItemDetail = ({
  id,
  name,
  img,
  type,
  stock,
  description,
  price,
  itemId,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = { id, name, price, img, quantity };

    addItem(productToAdd);
  };

  return (
    <div className="itemDetailCard">
      <div className="detailImg">
        <ItemImg productImg={img} imgClassName={"courseDetailImg"} />
      </div>
      <div className="detailInfo">
        <h3 className="courseDetailType">{type}</h3>
        <div className="courseDetailTxt">
          <div className="courseDetailName">{name}</div>
          <p className="courseDetailDesc">{description}</p>
        </div>
        <div className="bottomDetailCard">
          <div className="courseDetailPriceStock">
            <h5 className="courseDetailStock">Disponibles: {stock}</h5>
            <h4 className="courseDetailPrice">{price} ARS</h4>
          </div>
          <div className="detailCounter">
            {quantityToAdd === 0 ? (
              <ItemCount onAdd={handleOnAdd} stock={stock} />
            ) : (
              <Link to="/cart" className="addToCart">
                Finalizar compra
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
