import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AddCategories from "../categories/AddCategories";
function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const baseURL = "http://localhost:8080/categories/";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, [categories]);

  function deleteProduct(id) {
    axios.delete(`http://localhost:8080/categories/${id}`);
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

      <h1>Categories list</h1>
      <AddCategories />
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td onClick={() => deleteProduct(item.id)}>Delete</td>
                  <td></td>
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
