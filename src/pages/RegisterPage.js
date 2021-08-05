import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { BsPersonPlus } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Container, Col, Form, Button } from "react-bootstrap";
const schema = yup.object().shape({
  name: yup.string().required("name not empty"),
  email: yup.string().required("email not empty").email("invalid format"),
});
const RegisterPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    history.replace("/login");
  };
  return (
    <>
      <Container className="mt-3">
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <h1 className="display-5 text-center">สมัครสมาชิก</h1>
          <p className="lead text-center">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>

          <Form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              aria-describedby="validationServerUsernameFeedback"
              className={`form-control mb-3 ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && (
              <>
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  {errors.email.message}
                </div>
              </>
            )}

            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              aria-describedby="nameFeedback"
              className={`form-control mb-3 ${errors.name ? "is-invalid" : ""}`}
              placeholder="name"
              {...register("name")}
            />
            {errors.email && (
              <>
                <div id="nameFeedback" className="invalid-feedback">
                  {errors.name.message}
                </div>
              </>
            )}
            <p className="text-end">
              {" "}
              <div className="d-grid gap-2">
              <Button variant="primary" className="mt-2 col-auto" type="submit">
                <BsPersonPlus className="mr-2" />
                Register
              </Button>
              </div>
            </p>
          </Form>
          <hr />
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default RegisterPage;
