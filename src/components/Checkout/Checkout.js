import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import { NotificationContext } from "../../context/NotificationContext/Notification";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDocs,
  where,
  query,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import "./checkout.css";
import CheckoutForm from "./Form/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, getTotal } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const totalPrice = getTotal();

  const createOrder = async (clientData) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: clientData,
        items: cart,
        date: new Date(),
        totalPrice,
      };

      console.log(objOrder);

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setNotification("success", `El id de su orden es: ${orderAdded.id}`);
        // console.log(`El id de su orden es: ${orderAdded.id}`)
      } else {
        setNotification("fail", "Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Su orden se está generando</h2>;

  if (cart.length === 0) {
    return (
      <div className="checkoutBox">
        <div>
          <h2>Para el checkout es necesario tener</h2>
        </div>
        <div>
          <h2 className="productsOnCartRequired">
            al menos 1 producto en el carrito de compras.
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="checkoutTitle">Datos del comprador:</h2>
        <CheckoutForm createOrder={createOrder} cart={cart} />
      </div>
    );
  }
};

export default Checkout;
