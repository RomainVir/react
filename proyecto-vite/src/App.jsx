import "../src/App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import LogIn from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          {/*} <Route path="cart" element={<Cart />} />
  <Route path="about" element={<About />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
