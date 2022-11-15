import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import CartContextProvider from "./context/cartContext/CartContext";
import NotificationContextProvider from "./context/NotificationContext/Notification";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
// import { inject } from "@vercel/analytics";

// // Make sure to call this only once in your app
// inject();

function App() {
  return (
    <NotificationContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryType"
              element={
                <ItemListContainer greeting="Bienvenido a la categoría:" />
              }
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="*"
              element={
                <h1 style={{ position: "relative", minHeight: "100vh" }}>
                  404 NOT FOUND
                </h1>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
