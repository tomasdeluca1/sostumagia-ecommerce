import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
import ItemImg from "../ItemImg/ItemImg";

const Item = ({ id, name, description, price, type, img, stock }) => {
  return (
    <div className="itemCard">
      <div className="courseName">{name}</div>
      <ItemImg productImg={img} imgClassName={"courseImg"} />
      <div className="courseTxt">
        <p className="courseDesc">{description}</p>
      </div>

      <div className="bottomCard">
        <div className="coursePriceStock">
          <h5 className="courseStock">Disponibles: {stock}</h5>
          <h4 className="coursePrice">{price} ARS</h4>
        </div>
        <div>
          <h4 className="courseType">{type}</h4>
        </div>
      </div>
      <Link to={`/item/${id}`} className="linkToItem">
        Más detalles
      </Link>
    </div>
  );
};

export default Item;
