import "../src/App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import LogIn from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Allproducts from "./views/AllProducts/Allproducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="allproducts" element={<Allproducts />} />
          <Route path="login" element={<LogIn />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
