import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
const schema = yup.object().shape({
  name: yup.string().required("email not empty"),
});
const CreatePage = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const pathURL = `https://center-coreapi.herokuapp.com/category`;
      const resp = await axios.post(pathURL, {
        name: data.name,
      });
      addToast(resp.data.message, { appearance: "success" });
      history.replace("/login");
    } catch (error) {
      addToast(error.response.data.error.message, { appearance: "error" });
    }
  };
  return (
    <>
      <Container className="mt-3">
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <h1 className="display-5 text-center">Create Category</h1>

          <Form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              aria-describedby="nameFeedback"
              className={`form-control mb-1 ${errors.name ? "is-invalid" : ""}`}
              placeholder="name"
              {...register("name")}
            />
            {errors.name && (
              <>
                <div id="nameFeedback" className="invalid-feedback">
                  {errors.name.message}
                </div>
              </>
            )}
            <div className="d-grid gap-2">
              <Button variant="primary" className="mt-2 col-auto" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </>
  );
};

export default CreatePage;
