import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AddBrand from "./AddBrand";
function Categories() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState([]);
  const baseURL = "http://localhost:8080/brands/";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBrand(response.data);
    });
  }, [brand]);

  function deleteProduct(id) {
    axios.delete(`http://localhost:8080/brands/${id}`);
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

      <h1>Brands list</h1>
      <AddBrand />
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {brand &&
            brand.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td onClick={() => deleteProduct(item.id)}>Delete</td>
                  <td>Edit</td>
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
export default Categories;
