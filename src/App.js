import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
// import Button from "./components/Button/Button";
import ItemCount from "./components/ItemCount/ItemCount";
import CartContextProvider from "./context/cartContext/CartContext";
import NotificationContextProvider from "./context/NotificationContext/Notification";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <NotificationContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="¡Bienvenido a sos tu magia!" />
              }
            />
            <Route
              path="/category/:categoryType"
              element={
                <ItemListContainer greeting="Bienvenido a la categoría:" />
              }
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
