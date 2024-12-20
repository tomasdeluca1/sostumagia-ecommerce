import React from "react";
import { HelmetProvider } from "react-helmet-async";
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
import Supervisiones from "./components/pages/Supervisiones";
import TratamientoPsicopedagogico from "./components/pages/TratamientoPsicopedagogico";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col w-full bg-[#fed5d5]">
        <NotificationContextProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/cursos"
                    element={
                      <ItemListContainer greeting="Bienvenido a la categoría:" />
                    }
                  />
                  <Route path="/supervisiones" element={<Supervisiones />} />
                  <Route
                    path="/tratamiento-psicopedagogico"
                    element={<TratamientoPsicopedagogico />}
                  />
                  <Route
                    path="/item/:itemId"
                    element={<ItemDetailContainer />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="*"
                    element={
                      <div className="flex items-center justify-center h-screen">
                        <h1 className="text-4xl font-bold text-gray-800">
                          404 NOT FOUND
                        </h1>
                      </div>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </BrowserRouter>
          </CartContextProvider>
        </NotificationContextProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
