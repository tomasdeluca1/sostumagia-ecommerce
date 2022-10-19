import { useState, useEffect, useContext } from "react";
import "./itemListContainer.css";
// import { getProducts, getProductsByCategory } from "./../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import { NotificationContext } from "../../context/NotificationContext/Notification";

const ItemListContainer = ({ greeting, stock }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { setNotification } = useContext(NotificationContext);

  const { categoryType } = useParams();

  useEffect(() => {
    const collectionRef = categoryType
      ? query(collection(db, "products"), where("type", "==", categoryType))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((res) => {
        const productAdapted = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productAdapted);
      })
      .catch((error) =>
        setNotification("fail", "No se pueden obtener los productos")
      )
      .finally(() => {
        setLoading(false);
      });

    /*
    // const asyncFunction = categoryType ? getProductsByCategory : getProducts
    // asyncFunction(categoryType)
    //   .then((res) => {
    //     setProducts(res);
    //   })
    //   .catch((error) => {
    //     setError(true);
    //   })
    //   
    //    
    //   ; */
  }, [categoryType]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>Hay un error, master</h1>;
  }

  const type = products.map((product) => product.type);

  return (
    <div className="itemListView">
      <h1 className="viewsTitle">
        {greeting}
        {categoryType ? (
          <strong style={{ marginTop: "10x" }}> {type[0]}</strong>
        ) : (
          ""
        )}
      </h1>

      {/* <h1>{stock}</h1> */}
      <ItemList items={products} />

      {/* </div> */}
    </div>
  );
};

export default ItemListContainer;
