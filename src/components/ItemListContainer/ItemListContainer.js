import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, stock }) => {
  return (
    <div className="itemListView">
      <h1 className="viewsTitle">{greeting}</h1>
      <div className="stock">
        <h3>Cantidad de cursos disponibles:</h3>
        <h1>{stock}</h1>
      </div>
    </div>
  );
};

export default ItemListContainer;
