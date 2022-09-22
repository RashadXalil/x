import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Product.css";
import AddProduct from "./AddProduct";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const baseURL = "http://localhost:8080/products/";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, [products]);

  function deleteProduct(id) {
    axios.delete(`http://localhost:8080/products/${id}`);
  }

  return (
    <div>
      <button
        style={{ color: "white" }}
        className="go_back_button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>

      <h1>Product list</h1>
      <AddProduct />
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product name</th>
            <th>Product description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td onClick={() => deleteProduct(item.id)}>Delete</td>
                  {/* <td onClick={() => editProduct(item.id)}>Delete</td> */}
                  <td>
                    {/* <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={`/detail/${item.id}`}
                    >
                      Details
                    </Link> */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Products;
