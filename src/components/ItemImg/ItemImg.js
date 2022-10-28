import "../Item/item.css";

const ItemImg = ({ productImg }) => {
  return (
    <div
      className="courseImg"
      style={{ backgroundImage: `url(${productImg})` }}
    ></div>
  );
};

export default ItemImg;
