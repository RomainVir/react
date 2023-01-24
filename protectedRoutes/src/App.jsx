import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/Layout/LAyout";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Products from "./views/Products/Products";
import Login from "./views/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
