import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import Pedidos from "./pages/Pedidos";
import Contacto from "./pages/Contacto";
import Comida from "./pages/Comida";
import {comidas} from './Data'

function App() {

  const [pedido, setPedido] = useState([]);

  const handleClick = (name) => {
    const itemToAdd = comidas.find((item) => item.name === name);
    if (itemToAdd) {
      setPedido((prevPedido) => {
        const existingItem = prevPedido.find((item) => item.food.name === name);
        if (existingItem) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          return prevPedido.map((item) =>
            item.food.name === name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Si el producto no está en el carrito, lo agrega
          return [...prevPedido, { food: itemToAdd, quantity: 1 }];
        }
      });
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta" element={<Carta comidas={comidas}/>} />
        <Route path="/pedidos" element={<Pedidos pedido={pedido} setPedido={setPedido}/>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carta/:comida" element={<Comida comidas={comidas} handleClick={handleClick} />} />
      </Routes>
    </div>
  );
}

export default App;
