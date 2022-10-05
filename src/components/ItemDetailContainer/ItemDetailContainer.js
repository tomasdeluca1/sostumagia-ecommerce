import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "../ItemListContainer/itemListContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getProduct(itemId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(product);
  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  // console.log(productId);
  return (
    <div className="itemListView">
      <h1 className="viewsTitle">Detalle del producto</h1>
      {/* <div className="stock"> */}
      {/* <h3>Cantidad de cursos disponibles:</h3> */}
      {/* <h1>{stock}</h1> */}
      <ItemDetail item={product} />
      {/* </div> */}
    </div>
  );
};

export default ItemDetailContainer;
