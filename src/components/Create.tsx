import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Variant from "./Variant.tsx";
import { Formik, Form } from "formik";
import FormikControl from "./formik/FormikControl.tsx";
import * as Yup from "yup";
import { createProduct, fetchAllCategories } from "../services/products";
import { useMutation } from "react-query";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  description: [
    {
      is_ltr: true,
      text: "",
      lang: "en",
    },
  ],
  items: [],
  category: "",
  name: [
    {
      is_ltr: true,
      text: "",
      lang: "en",
    },
  ],
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { mutate } = useMutation(createProduct);

  const validationSchema = Yup.object({});
  const submitHandler = (data: any) => {
    console.log(data);
    mutate(data);
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen} variant="contained">
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >
            {(formikProps) => {
              return (
                <Form>
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"Product Title"}
                    control="input"
                    name="name[0].text"
                    type="text"
                  />
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"Product Description"}
                    control="input"
                    name="description[0].text"
                    type="text"
                  />
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"Categories"}
                    control="async-select"
                    queryFunc={fetchAllCategories}
                    queryKey="categories"
                    name="category"
                    type="text"
                  />
                  <Variant />
                  <Button sx={{ mt: "10px" }} variant="contained" type="submit">
                    Add Product
                  </Button>
                  <Box>
                    {formikProps.values.items.map((variant: any, index) => (
                      <Box>Variant ({index})</Box>
                    ))}
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
}
