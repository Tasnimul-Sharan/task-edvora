import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Shared/Header";
import Home from "./Component/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./Component/Home/Products";
import Orders from "./Component/Orders/Orders";
import Footer from "./Component/Shared/Footer";
import Users from "./Component/Users/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
