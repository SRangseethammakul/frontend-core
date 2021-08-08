import React from "react";
import { Container, Col, Row, Spinner, Card, Button } from "react-bootstrap";
import axios from "axios";
//redux
import { addToCart } from "../redux/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
const ProducrPage = () => {
  const { addToast } = useToasts();
  const [products, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);
  //redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const getData = async () => {
    try {
      setLoading(true);
      const urlPath = "https://center-coreapi.herokuapp.com/product";
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setProduct(resp.data.data);
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
  const addCart = (item) => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1,
    };
    dispatch(addToCart(product, cart));
    addToast("เพิ่มสินค้าสำเร็จ", { appearance: "success" });
  };
  return (
    <>
      <h2>Product Page</h2>
      {total > 0 && <h4>Product Selected : {total}</h4>}
      <Container>
        <Row>
          {products.map((product, index) => {
            return (
              <Col md={3} key={product.id}>
                <Card className="h-100">
                  <Card.Img variant="top" src={product.imageURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary" onClick={() => addCart(product)}>
                      {product.price}
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProducrPage;
