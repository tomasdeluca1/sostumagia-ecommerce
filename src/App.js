import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Button from "./components/Button/Button";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [contador, setContador] = useState(0);
  // const stock = 12;
  // // let counter = contador;

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
    // <Route
    //   path="/"
    //   element={
    //     <>
    //       {" "}
    //       <ItemListContainer greeting={"bienvenido"} />
    //       <ItemDetailContainer greeting={"Mercado Libre"} />
    //       {" "}
    //     </>
    //   }
    // />
    <BrowserRouter>
      <div className="App">
        <NavBar /*counter={contador}*/ />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting={"¡Bienvenido a sos tu magia!"} />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting={"Bienvenido a la categoría:"} />
            }
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
