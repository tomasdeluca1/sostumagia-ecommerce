import { useState, useEffect, useContext } from "react";
// import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { NotificationContext } from "../../context/NotificationContext/Notification";
import "../ItemListContainer/itemListContainer.css";

const ItemDetailContainer = ({ setCart /*counter, onDiminish, onAdd*/ }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((doc) => {
        const data = doc.data();
        const productAdapted = { id: doc.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        setNotification(
          "error",
          "No se pudo traer la información del producto."
        );
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
      {/* <h1 className="viewsTitle">Detalle del producto</h1> */}
      {/* <div className="stock"> */}
      {/* <h3>Cantidad de cursos disponibles:</h3> */}

      <ItemDetail {...product} />
      {/* </div> */}
    </div>
  );
};

export default ItemDetailContainer;
