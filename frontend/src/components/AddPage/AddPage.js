import * as React from "react";
import { useState, UseEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import "./AddPage.css";

const validationSchema = yup.object({
  id: yup.number("Please, enter number.").required("Id is required"),
  brandId: yup.number("Please, enter number.").required("BrandId is required"),
  categoryId: yup
    .number("Please, enter number.")
    .required("CategoryId is required"),
  description: yup
    .number("Please, enter text.")
    .required("Description is required"),
  name: yup.string("Please, enter text.").required("Name is required"),
  salesprice: yup
    .number("Please, enter number.")
    .required("Sales price is required"),
  discountpercent: yup
    .number("Please, enter number.")
    .required("Discount percent is required"),
});

const AddPage = () => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    axiosInstance.get().then((response) => setBrand(response.data));
  }, [brand]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategory(response.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      name: "",
      brandId: "",
      categoryId: "",
      description: "",
      discountpercent: "",
      salesprice: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form style={{ padding: "40px" }} onSubmit={formik.handleSubmit}>
        <TextField
          className="input"
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className="input"
          fullWidth
          id="BrandId"
          name="BrandId"
          label="BrandId"
          value={formik.values.brandId}
          onChange={formik.handleChange}
          error={formik.touched.brandId && Boolean(formik.errors.brandId)}
          helperText={formik.touched.brandId && formik.errors.brandId}
        />
        <TextField
          className="input"
          fullWidth
          id="CategoryId"
          name="CategoryId"
          label="CategoryId"
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
          helperText={formik.touched.categoryId && formik.errors.categoryId}
        />
        <TextField
          className="input"
          fullWidth
          id="Description"
          name="Description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <TextField
          className="input"
          fullWidth
          id="DiscountPercent"
          name="DiscountPercent"
          label="DiscountPercent"
          value={formik.values.d}
          onChange={formik.handleChange}
          error={
            formik.touched.discountpercent &&
            Boolean(formik.errors.discountpercent)
          }
          helperText={
            formik.touched.discountpercent && formik.errors.discountpercent
          }
        />

        <TextField
          className="input"
          fullWidth
          id="SalesPrice"
          name="SalesPrice"
          label="SalesPrice"
          value={formik.values.salesprice}
          onChange={formik.handleChange}
          error={formik.touched.salesprice && Boolean(formik.errors.salesprice)}
          helperText={formik.touched.salesprice && formik.errors.salesprice}
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Select"
          // onChange={handleChange}
        >
          <MenuItem value={10}>category</MenuItem>
          <MenuItem value={20}>products</MenuItem>
        </Select>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};
export default AddPage;
