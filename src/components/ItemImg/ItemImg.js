import "../Item/item.css";

const ItemImg = ({ productImg, imgClassName }) => {
  return (
    <div
      className={imgClassName}
      style={{ backgroundImage: `url(${productImg})` }}
    ></div>
  );
};

export default ItemImg;
