import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { getProducts, getProductsByCategory } from "./../../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, stock }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((res) => {
          setProducts(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((res) => {
          setProducts(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);
  console.log(products);
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Hay un error, master</h1>;
  }

  return (
    <div className="itemListView">
      <h1 className="viewsTitle">{greeting}</h1>

      {/* <div className="stock"> */}
      {/* <h3>Cantidad de cursos disponibles:</h3> */}
      {/* <h1>{stock}</h1> */}
      <ItemList items={products} />
      {/* </div> */}
    </div>
  );
};

export default ItemListContainer;
