import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";
import "../ItemListContainer/itemListContainer.css";

const ItemDetailContainer = () => {
  const mensajeError = "No se pudo traer la información del producto.";
  const { itemId } = useParams();

  const {
    data: product,
    error,
    loading,
  } = useAsync(() => getProductById(itemId), [itemId], mensajeError);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  if (error) {
    return <h1>Hay un error, comunicarse con el administrador.</h1>;
  }

  if (Object.keys(product).length === 1)
    return (
      <p style={{ margin: "50px 30px", fontSize: "1.3rem" }}>
        El producto con ID: <strong>{product.id}</strong> no existe.
      </p>
    );

  return (
    <div className="itemListView">
      <ItemDetail {...product} itemId={itemId} />
    </div>
  );
};

export default ItemDetailContainer;
