import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
const schema = yup.object().shape({
  productName: yup.string().required("productName not empty"),
  price: yup
    .number()
    .required("โปรดใส่ข้อมูล")
    .positive("ใส่จำนวนเต็มเท่านั้น")
    .integer(),
});
const ProductCreate = () => {
  const [inputList, setInputList] = React.useState([
    { name: "", volume: "", unit: "" },
  ]);
  const [category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);
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
      const pathURL = `https://center-coreapi.herokuapp.com/product/insertProduct`;
      const resp = await axios.post(pathURL, {
        productName: data.productName,
        price: data.price,
        category: data.category,
        items: inputList,
      });
      addToast(resp.data.data, { appearance: "success" });
      history.replace("/cms/product");
    } catch (err) {
      addToast(err.response.data.error.message, { appearance: "error" });
    }
  };
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", volume: "", unit: "" }]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const getData = async () => {
    try {
      setLoading(true);
      const urlPath = `https://center-coreapi.herokuapp.com/category`;
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setCategory(resp.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();
    return () => {
      cancelToken.current.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5">
        <p>Try Again</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <>
      <Container className="mt-3">
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <h1 className="display-5 text-center">Create Product</h1>

          <Form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="productName"
              type="text"
              id="productName"
              aria-describedby="nameFeedback"
              className={`form-control mb-1 ${
                errors.productName ? "is-invalid" : ""
              }`}
              placeholder="name"
              {...register("productName")}
            />
            {errors.productName && (
              <>
                <div id="nameFeedback" className="invalid-feedback">
                  {errors.productName.message}
                </div>
              </>
            )}
            <label htmlFor="price" className="form-label">
              price
            </label>
            <input
              name="price"
              type="number"
              id="price"
              aria-describedby="nameFeedback"
              className={`form-control mb-1 ${
                errors.price ? "is-invalid" : ""
              }`}
              placeholder="name"
              {...register("price")}
            />
            {errors.price && (
              <>
                <div id="nameFeedback" className="invalid-feedback">
                  {errors.price.message}
                </div>
              </>
            )}
            <label htmlFor="catalog" className="form-label">
              catalog
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("catalog")}
            >
              {category.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  </>
                );

              })}
            </select>
            <hr />
            {inputList.map((item, index) => {
              return (
                <Row key={index}>
                  <Col md={3}>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter Name"
                      className={`form-control mb-1`}
                      value={item.name}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Col>
                  <Col md={3}>
                    <input
                      name="volume"
                      type="number"
                      placeholder="Enter volume"
                      className={`form-control mb-1`}
                      value={item.volume}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Col>
                  <Col md={3}>
                    <input
                      name="unit"
                      type="text"
                      placeholder="Enter Unit"
                      className={`form-control mb-1`}
                      value={item.unit}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Col>
                  <Col md={3}>
                    <div className="btn-box">
                      {inputList.length !== 1 && (
                        <button
                          className="mr-2 btn btn-danger"
                          onClick={() => handleRemoveClick(index)}
                        >
                          Remove
                        </button>
                      )}
                      {inputList.length - 1 === index && (
                        <button
                          className="btn btn-success"
                          onClick={handleAddClick}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </Col>
                </Row>
              );
            })}

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

export default ProductCreate;
