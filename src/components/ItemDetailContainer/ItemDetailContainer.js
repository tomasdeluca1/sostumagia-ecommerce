import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemListContainer/itemListContainer.css";

const ItemDetailContainer = ({ setCart /*counter, onDiminish, onAdd*/ }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  return (
    <div className="itemListView">
      <h1 className="viewsTitle">Detalle del producto</h1>
      {/* <div className="stock"> */}
      {/* <h3>Cantidad de cursos disponibles:</h3> */}

      <ItemDetail {...product} />
      {/* </div> */}
    </div>
  );
};

export default ItemDetailContainer;
