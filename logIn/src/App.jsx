import { BrowseRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Products from "./views/Products/Products";

function App() {
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowseRouter>
  );
}

export default App;
