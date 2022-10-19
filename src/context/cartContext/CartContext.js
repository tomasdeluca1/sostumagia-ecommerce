import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      console.log("Ya está agregado");
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeList = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    const cartWithoutItem = cart.filter((item) => item.id != id);
    // console.log(cart.filter((item) => item.id === "1"));
    console.log(cartWithoutItem);
    setCart(cartWithoutItem);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => (totalQuantity += prod.quantity));
    return totalQuantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeList,
        deleteItem,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
