import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Button from "./components/Button/Button";
import ItemCount from "./components/ItemCount/ItemCount";
import CartContextProvider from "./context/cartContext/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  // const [contador, setContador] = useState(0);
  // const stock = 12;

  // const onDiminish = () => {
  //   if (contador > 0) {
  //     setContador(contador - 1);
  //   }
  // };

  // const onAdd = () => {
  //   if (contador < stock - 1) {
  //     setContador(contador + 1);
  //   } else if (contador == stock - 1) {
  //     setContador(contador + 1);
  //   }
  // };

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"¡Bienvenido a sos tu magia!"} />
              }
            />
            <Route
              path="/category/:categoryType"
              element={
                <ItemListContainer greeting={"Bienvenido a la categoría:"} />
              }
            />
            <Route
              path="/item/:itemId"
              element={
                <ItemDetailContainer
                // counter={contador}
                // onAdd={onAdd}
                // onDiminish={onDiminish}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
