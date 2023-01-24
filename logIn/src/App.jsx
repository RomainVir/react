import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Products from "./views/Products/Products";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import PublicRoute from "./router/PublicRoutes/PublicRoute";
import PrivateRoute from "./router/PrivateRoutes/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes publiques*/}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* Routes privés*/}
          <Route path="/u" element={<PrivateRoute />}>
            <Route index element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  ); 
}

export default App;
