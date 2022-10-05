import "./../../asyncMock";
import ItemDetail from "./ItemDetail";
import "../ItemListContainer/itemList.css";

const ItemDetailList = ({ item }) => {
  // console.log(item.map((item) => item.id));
  // console.log(item.id);
  return (
    <div className="itemFlex">
      <ItemDetail
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        type={item.type}
        img={item.img}
        stock={item.stock}
      />
      {/* ))} */}
    </div>
  );
};

export default ItemDetailList;
