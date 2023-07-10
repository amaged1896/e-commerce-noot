import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Formik, Form, FieldArray, useFormikContext } from "formik";
import FormikControl from "./formik/FormikControl.tsx";
import * as Yup from "yup";
import { fetchAttributes } from "../services/products";
import { Grid, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
  sku_set: [
    {
      attribute: "",
      attribute_value: "",
    },
  ],

  discount: "",
  price: "",
  quantity: "",
};

const validationSchema = Yup.object({});

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const parentForm: any = useFormikContext();

  const submitHandler = (data: any) => {
    console.log(data);
    setOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, no-unsafe-optional-chaining
    parentForm.setFieldValue("items", [...parentForm?.values?.items, data]);
  };
  return (
    <div>
      <Button variant="contained" sx={{ mt: "10px" }} onClick={handleOpen}>
        Add Variant
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
            {(_formikProps) => {
              return (
                <Form>
                  <FieldArray
                    name="sku_set"
                    render={({ form, remove, push }) => {
                      return (
                        <Box>
                          {form?.values?.sku_set?.map((_el, index) => (
                            <Grid container>
                              <Grid item xs={12} md={4}>
                                <FormikControl
                                  control="input"
                                  label="Attribute Value"
                                  name={`sku_set[${index}].attribute_value`}
                                />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <FormikControl
                                  control="async-select"
                                  label="Attribute"
                                  queryFunc={fetchAttributes}
                                  queryKey="attributes"
                                  name={`sku_set[${index}].attribute`}
                                />
                              </Grid>
                              <Grid item xs={12} md={4}>
                                {form?.values?.sku_set.length - 1 === index ? (
                                  <IconButton
                                    onClick={() =>
                                      push({
                                        attribute: "",
                                        attribute_value: "",
                                      })
                                    }
                                  >
                                    <AddCircleIcon color="primary" />
                                  </IconButton>
                                ) : (
                                  <IconButton onClick={() => remove(index)}>
                                    <CancelIcon color="error" />
                                  </IconButton>
                                )}
                              </Grid>
                            </Grid>
                          ))}
                        </Box>
                      );
                    }}
                  />
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"Price"}
                    control="input"
                    name="price"
                    type="number"
                  />
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"Discount"}
                    control="input"
                    name="discount"
                    type="number"
                  />
                  <FormikControl
                    sx={{ mt: "10px" }}
                    label={"quantity"}
                    control="input"
                    name="quantity"
                    type="number"
                  />
                  {/* <FormikControl
                      sx={{ mt: "10px" }}
                      label={"Quantity"}
                      control="async-select"
                      queryFunc={fetchAllCategories}
                      queryKey="categories"
                      name="category"
                      type="text"
                    /> */}
                  <Button sx={{ mt: "10px" }} variant="contained" type="submit">
                    Add Variant
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
