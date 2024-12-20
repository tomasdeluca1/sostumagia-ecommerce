import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          type={item.type}
          img={item.img}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
