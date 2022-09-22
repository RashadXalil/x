import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  name: yup.string("Please, enter text.").required("Name is required"),
  brandId: yup.number("Please, enter number.").required("BrandId is required"),
  catergoryId: yup
    .number("Please, enter number.")
    .required("CategoryId is required"),
  desc: yup.string("Please, enter text.").required("Description is required"),
  discountpercent: yup
    .number("Please, enter number.")
    .required("Discount percent is required"),
  salePrice: yup
    .number("Please, enter number.")
    .required("Sales price is required"),
});

const AddProduct = () => {
  const baseURL = `http://localhost:8080/products`;

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      brandId: "",
      catergoryId: "",
      desc: "",
      discountpercent: "",
      salePrice: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(values);

      alert(JSON.stringify(values, null, 2));
      axios.post(baseURL, values);
      console.log("popst");
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
          type="text"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          className="input"
          fullWidth
          id="brandId"
          name="brandId"
          label="BrandId"
          type="number"
          value={formik.values.brandId}
          onChange={formik.handleChange}
          error={formik.touched.brandId && Boolean(formik.errors.brandId)}
          helperText={formik.touched.brandId && formik.errors.brandId}
        />
        <TextField
          className="input"
          fullWidth
          id="categoryId"
          name="catergoryId"
          label="CategoryId"
          type="number"
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          error={
            formik.touched.catergoryId && Boolean(formik.errors.catergoryId)
          }
          helperText={formik.touched.catergoryId && formik.errors.catergoryId}
        />
        <TextField
          className="input"
          fullWidth
          id="desc"
          name="desc"
          label="Description"
          type="text"
          value={formik.values.desc}
          onChange={formik.handleChange}
          error={formik.touched.desc && Boolean(formik.errors.desc)}
          helperText={formik.touched.desc && formik.errors.desc}
        />

        <TextField
          className="input"
          fullWidth
          id="discountpercent"
          name="discountpercent"
          label="DiscountPercent"
          type="number"
          value={formik.values.discountpercent}
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
          id="salePrice"
          name="salePrice"
          label="SalePrice"
          type="number"
          value={formik.values.saleprice}
          onChange={formik.handleChange}
          error={formik.touched.salePrice && Boolean(formik.errors.salePrice)}
          helperText={formik.touched.salePrice && formik.errors.salePrice}
        />
        <Button
          style={{ marginTop: "20px" ,backgroundColor:"black"}}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
};
export default AddProduct;
