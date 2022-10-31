import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";

const ItemListContainer = ({ greeting }) => {
  const mensajeError = "No se pueden obtener los productos";
  const { categoryType } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useAsync(() => getProducts(categoryType), [categoryType], mensajeError);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Hay un error, comunicarse con el administrador.</h1>;
  }

  const type = products.map((product) => product.type);

  return (
    <div>
      <div className="itemListView">
        <ItemList items={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
