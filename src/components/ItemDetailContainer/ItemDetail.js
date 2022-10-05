import React, { useState, useEffect } from "react";
import "../../asyncMock";
import "../ItemListContainer/item.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemCard">
      <div className="courseName">{item.name}</div>
      <div /* style={{ backgroundImage: `${item.img}` }}*/>
        <img className="courseImg" src={item.img} alt={item.key} />
      </div>
      <div className="courseTxt">
        <h4
          className="courseType"
          style={{ width: "50%", margin: "0 20% 15px 20%" }}
        >
          {item.type}
        </h4>
        <p className="courseDesc">{item.description}</p>
      </div>

      <div className="bottomCard">
        <div className="coursePriceStock">
          <h5 className="courseStock">Disponibles: {item.stock}</h5>
          <h4 className="coursePrice">{item.price}</h4>
        </div>
        <div className="courseBuyButton">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
