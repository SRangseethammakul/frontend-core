import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/authAction";
import { useToasts } from "react-toast-notifications";
const schema = yup.object().shape({
  email: yup.string().required("email not empty").email("invalid format"),
  password: yup.string().required("password not empty"),
});

const LoginPage = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  //use redux
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const pathURL = "https://center-coreapi.herokuapp.com/users/login";
      const resp = await axios.post(pathURL, {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("token", JSON.stringify(resp.data));
      //get profile
      const urlProfile = "https://center-coreapi.herokuapp.com/users/profile";
      const respProfile = await axios.get(urlProfile, {
        headers: {
          Authorization: "Bearer " + resp.data.access_token,
        },
      });
      localStorage.setItem(
        "profile",
        JSON.stringify(respProfile.data.user)
      );
      const profileValue = JSON.parse(localStorage.getItem("profile"));
      //call action
      addToast('login success', { appearance: "success" });
      dispatch(updateProfile(profileValue));
      history.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <> 
      <Container className="mt-3">
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <h1 className="display-5 text-center">ลงชื่อเข้าใช้</h1>
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
                Login
              </Button>
            </div>
          </Form>
          <hr />
          <div className="text-center">
            <a href="https://center-coreapi.herokuapp.com/auth/google">
              <img
                src="./images/google_sign.png"
                className="img-fluid"
                alt="googlesignin"
              />
            </a>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default LoginPage;
