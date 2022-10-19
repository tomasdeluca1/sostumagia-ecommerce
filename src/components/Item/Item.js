import React, { useState, useEffect } from "react";
import "../../asyncMock";
import "./item.css";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const Item = ({ id, name, description, price, type, img, stock, category }) => {
  return (
    <div className="itemCard">
      <h4 className="courseType">{type}</h4>
      <div className="courseName">{name}</div>
      <div>
        <img className="courseImg" src={img} alt={name} />
      </div>
      <div className="courseTxt">
        <p className="courseDesc">{description}</p>
      </div>

      <div className="bottomCard">
        <div className="coursePriceStock">
          <h5 className="courseStock">Disponibles: {stock}</h5>
          <h4 className="coursePrice">{price}</h4>
        </div>
      </div>
      <Link to={`/item/${id}`} className="linkToItem">
        Más detalles
      </Link>
    </div>
  );
};

export default Item;
