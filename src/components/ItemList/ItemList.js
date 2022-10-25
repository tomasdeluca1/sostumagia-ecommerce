import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ items }) => {
  const type = items.map((item) => item.type);

  return (
    <div className="itemFlex">
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
