import { Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout";
import ProductList from "./Pages/ProductList";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}