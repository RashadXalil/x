import './App.css'

import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import Products from "./component/products/Products";
import Categories from "./component/categories/Categories";
import Brand from "./component/brands/Brand";
// import "../src/App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/product">
            Products
            </Link>
          </li>
          <li>
            <Link className="link" to="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="link" to="/brands">
              Brands
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product" element={<Products />} />
        <Route path="/brands/" element={<Brand />} />
      </Routes>
    </>
  );
}

export default App;

