import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getCategories, getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../Hooks/useAsync";
import { useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [categoria, setCategoria] = useState("");
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

  // const [categoryNumber, categoryTitle, type, catId] = category;

  if (loading) {
    return (
      <h1
        className="loading"
        style={{ position: "relative", minHeight: "50vh" }}
      >
        Loading...
      </h1>
    );
  }

  if (error) {
    return <h1>Hay un error, comunicarse con el administrador.</h1>;
  }

  const [category] = categories.filter(
    (cat) => cat.categoryId === categoryType
  );

  const categoryData = { ...category };
  const CatTitle = categoryData.categoryTitle;
  // category.find(
  //   (element) =>
  //     element == "Cursos presenciales" || "Cursos online" || "Cursos gratuitos"
  // );

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
          {/* <h4 className="categoryTitle"></h4> */}
          <h4 className="categoryTitle">{CatTitle}</h4>
          <ItemList items={products} />
        </div>
      </div>
    );
  }
};
export default ItemListContainer;
