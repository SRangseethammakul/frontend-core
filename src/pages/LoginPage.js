import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Col, Form, Button } from "react-bootstrap";
const schema = yup.object().shape({
  name: yup.string().required("name not empty"),
  email: yup.string().required("email not empty").email("invalid format"),
  password: yup
    .string()
    .required("password not empty")
    .min(8, "password more 8 char"),
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
    try {
      const pathURL = `https://center-coreapi.herokuapp.com/users/register`;
      const resp = await axios.post(pathURL, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      alert(resp.data.message);
    } catch (error) {
      console.log(error.message);
    }
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

            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              aria-describedby="validationServerUsernameFeedback"
              className={`form-control mb-1 ${
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              aria-describedby="passwordFeedback"
              className={`form-control mb-1 ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="password"
              {...register("password")}
            />
            {errors.password && (
              <>
                <div id="passwordFeedback" className="invalid-feedback">
                  {errors.password.message}
                </div>
              </>
            )}
            <div className="d-grid gap-2">
              <Button variant="primary" className="mt-2 col-auto" type="submit">
                Register
              </Button>
            </div>
          </Form>
          <hr />
          <div className="d-grid gap-2">
            <a
              href="http://localhost:4000/auth/google"
              className="btn btn-primary"
            >
              Button
            </a>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default RegisterPage;
