import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductCheckout from "./Pages/Checkout/ProductCheckout";
import Products from "./Pages/ProductList/Products";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="checkout" element={<ProductCheckout />} />
      </Routes>
    </div>
  );
}