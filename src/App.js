import React from "react";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import CartContextProvider from "./context/cartContext/CartContext";
import NotificationContextProvider from "./context/NotificationContext/Notification";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Supervisiones from "./components/pages/Supervisiones";
import TratamientoPsicopedagogico from "./components/pages/TratamientoPsicopedagogico";
import Contact from "./components/pages/Contact";

function App() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
                  {/* <Route path="/contacto" element={<Contact />} /> */}
                  <Route
                    path="*"
                    element={
                      <div className="flex flex-col items-center justify-center h-screen gap-6 px-4 text-center">
                        <h1 className="text-5xl font-bold text-[#cd5c5c]">
                          404 - Página no encontrada
                        </h1>
                        <p className="text-xl text-gray-600">
                          Lo sentimos, la página que buscas no existe.
                        </p>
                        <Link
                          to="/"
                          className="px-6 py-3 text-lg font-medium text-white rounded-lg bg-[#cd5c5c] hover:bg-[#cd5c5c]/90 transition-colors"
                        >
                          Volver al inicio
                        </Link>
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
