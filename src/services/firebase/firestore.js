import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  addDoc,
  doc,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "./";

export const getProducts = (categoryType) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryType
      ? query(collection(db, "products"), where("category", "==", categoryType))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(productsAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    const collectionRef = collection(db, "categories");

    getDocs(collectionRef)
      .then((response) => {
        const categoriesData = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(categoriesData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const product = () => {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          return productAdapted;
        };
        resolve(product);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createOrder = async (
  clientData,
  cart,
  totalPrice,
  setNotification
) => {
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

    setTimeout(() => {
      setNotification("success", `El id de su orden es: ${orderAdded.id}`);
    }, 1500);
    // console.log(`El id de su orden es: ${orderAdded.id}`)
  } else {
    setTimeout(() => {
      setNotification("fail", "Hay productos fuera de stock");
    }, 3000);
  }
};
