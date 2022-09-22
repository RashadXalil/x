import * as React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  name: yup.string("Please, enter text.").required("Name is required"),
});

const AddCategories = () => {
  const baseURL = `http://localhost:8080/categories`;
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(baseURL, values);
      console.log("post");
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

        <Button
          style={{ marginTop: "20px", backgroundColor: "black" }}
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
export default AddCategories;
