import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getCategories, getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";

const ItemListContainer = ({ greeting }) => {
  const mensajeError = "No se pueden obtener los productos";
  const { categoryType } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useAsync(() => getProducts(categoryType), [categoryType], mensajeError);

  const { data: categories } = useAsync(
    () => getCategories(categoryType),
    [categoryType],
    ""
  );

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Hay un error, comunicarse con el administrador.</h1>;
  }

  const [category] = categories.filter(
    (cat) => cat.categoryId === categoryType
  );
  {
    categoryType && console.log(category);
  }
  if (!categoryType) {
    return (
      <div>
        <div className="itemListView">
          <ItemList items={products} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="itemListView">
          <h4 className="categoryTitle">{category.categoryTitle}</h4>
          <ItemList items={products} />
        </div>
      </div>
    );
  }
};
export default ItemListContainer;
