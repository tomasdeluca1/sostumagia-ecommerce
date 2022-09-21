import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Button from "./components/Button/Button";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [contador, setContador] = useState(0);
  const stock = 12;
  // let counter = contador;

  const onDiminish = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    if (contador < stock - 1) {
      setContador(contador + 1);
    } else if (contador == stock - 1) {
      setContador(contador + 1);
    }
  };

  return (
    <div className="App">
      <NavBar counter={contador} />
      <ItemListContainer greeting={"Bienvenido a Sos tu magia"} stock={stock} />
      <ItemCount onAdd={onAdd} onDiminish={onDiminish} />
    </div>
  );
}

export default App;
