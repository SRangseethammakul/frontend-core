import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../redux/actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { Container, Image, Table, Button, Spinner } from "react-bootstrap";
import {
  FaChevronUp,
  FaChevronDown,
  FaChild,
  FaTimes,
  FaCartPlus,
} from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
const ProductDetail = () => {
  const { addToast } = useToasts();
  //redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const cancelToken = React.useRef(null);
  const [products, setProduct] = React.useState({});
  const [items, setItem] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  let [person, setPerson] = React.useState(1);
  const { name } = useParams();
  const getData = async () => {
    try {
      setLoading(true);
      const urlPath =
        `https://center-coreapi.herokuapp.com/product/product/${name}`;
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setProduct(resp.data.data);
      setItem(resp.data.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const removeItem = (product) => {
    const newProducts = [...items];
    let objIndex = newProducts.findIndex((obj) => obj._id === product._id);
    newProducts.splice(objIndex, 1);
    setItem(newProducts);
    addToast("ลบสินค้าสำเร็จ", { appearance: "error" });
  };
  const updateInput = (e, product) => {
    const newProducts = [...items];
    let objIndex = newProducts.findIndex((obj) => obj._id === product._id);
    newProducts[objIndex].volume = e.target.value;
    setItem(newProducts);
  };
  const addPerson = (p) => {
    person = p + 1;
    setPerson(person);
    addToast("เพิ่มจำนวนคนสำเร็จ", { appearance: "success" });
  };
  const removePerson = (p) => {
    if (person < 2) {
      setPerson(person);
      addToast("ไม่สามารถลดจำนวนได้", { appearance: "warning" });
    } else {
      person = p - 1;
      setPerson(person);
      addToast("ลดจำนวนได้", { appearance: "error" });
    }
  };
  const addCart = () => {
    const product = {
      id: products.id,
      name: products.productName,
      price: products.price * person,
      qty: person,
      item: items,
    };
    dispatch(addToCart(product, cart));
    addToast("เพิ่มสินค้าสำเร็จ", { appearance: "success" });
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
      <Image src={products.photo} style={{ width: "100%", height: "50vh" }} />
      <Container>
        <div className="text-center">
          <h2 className="fs-1">
            {products.productName}
          </h2>
          <p>
            เมนูแกงยอดฮิตประจำชาติไทยอย่าง “แกงเขียวหวานไก่”
            เมนูแกงกะทิสุดพิถีพิถันตั้งแต่ขั้นตอนตำพริกแกงเขียวหวานเอง
            จนถึงการเคี่ยวให้ได้แกงรสเข้มข้น กินกับอะไรก็เข้าขากันได้ดี
            จะแบบไทยอย่างข้าวสวย, ขนมจีน หรือจะตะวันตกอย่างสปาเกตตี, ขนมปัง
            หรือจะแบบตะวันออกอย่างโรตีก็เด็ดโดนใจได้ไม่แพ้กัน
            ถึงจะเป็นเมนูที่ดูจะแสนธรรมดา
            แต่ถ้าได้ลองสูตรพริกแกงเขียวหวานสูตรเด็ดนี้ รับรองเพื่อน ๆ
            จะต้องติดใจแน่นอน
            ถ้าพร้อมกันแล้วไปดูสูตรและวิธีทําแกงเขียวหวานไก่กันเลยค่า!
          </p>
        </div>
        <h3>วัตถุดิบ</h3>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            {[...Array(person)].map((x, i) => (
              <FaChild size={40} key={i} />
            ))}
          </div>
          <div className="p-2 bd-highlight">
            <h3>{person}</h3>
          </div>
          <div className="p-2 bd-highlight">
            {" "}
            <button
              className="btn btn-outline-success ml-2"
              onClick={() => addPerson(person)}
            >
              <FaChevronUp />
            </button>
            <button
              className="btn btn-outline-danger ml-2"
              onClick={() => removePerson(person)}
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
        <div>
          <Table responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>ปริมาณ</th>
                <th>หน่วย</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>
                      <input
                        type="number"
                        value={product.volume * person}
                        min="1"
                        className="form-control"
                        onChange={(e) => updateInput(e, product)}
                      />{" "}
                      / {person} คน
                    </td>
                    <td>{product.unit}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger ml-2"
                        onClick={() => removeItem(product)}
                      >
                        ลบสินค้า
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="text-end mb-2">
          <Button variant="primary" size="lg" onClick={() => addCart()}>
            <FaCartPlus className="mr-5" />
            สั่งสินค้า
          </Button>{" "}
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
