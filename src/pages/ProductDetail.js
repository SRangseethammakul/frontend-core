import React from "react";
import { useParams } from "react-router-dom";
import Typical from "react-typical";
import { Container, Image, Table, Button } from "react-bootstrap";
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
  var ssss = [
    { id: 1, productName: "เนื้อไก่", volume: 300, unit: "กรัม" },
    { id: 2, productName: "พริกแกงเขียวหวาน", volume: 70, unit: "กรัม" },
    { id: 3, productName: "ใบมะกรูด", volume: 3, unit: "ใบ" },
    { id: 4, productName: "น้ำปลา", volume: 1, unit: "ช้อนโต๊ะ" },
  ];
  const { name } = useParams();
  const [products, setProduct] = React.useState(ssss);
  let [person, setPerson] = React.useState(1);

  const removeItem = (product) => {
    const newProducts = [...products];
    let objIndex = newProducts.findIndex((obj) => obj.id === product.id);
    newProducts.splice(objIndex, 1);
    setProduct(newProducts);
    addToast("ลบสินค้าสำเร็จ", { appearance: "error" });
  };
  const updateInput = (e, product) => {
    const newProducts = [...products];
    let objIndex = newProducts.findIndex((obj) => obj.id === product.id);
    newProducts[objIndex].volume = e.target.value;
    setProduct(newProducts);
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
  return (
    <>
      <Image
        src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t31.18172-8/18278454_1463618233701518_1791232337601347255_o.jpg?_nc_cat=108&ccb=1-4&_nc_sid=84a396&_nc_eui2=AeFt03fWNqdBpjd0RVhsEwaNa0z8GDlShsprTPwYOVKGyo8JQ9xULoGDxHE0U77pQSe-CHudnRrW8Ckxzd-Sw4Sy&_nc_ohc=5aB2wICvIUUAX8TzrkF&_nc_ht=scontent.fbkk2-7.fna&oh=1820049f3d03eed9bdfde08bf6c408f7&oe=613C65E5"
        style={{ width: "100%", height: "50vh" }}
      />
      <Container>
        <div className="text-center">
          <h2 className="fs-1">
            <Typical
              steps={["แกงเขียวหวานไก่", 2000, `${name}`, 1000]}
              loop={Infinity}
              wrapper="p"
            />
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
              <FaChild size={40} />
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
              {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>
                      <input
                        type="number"
                        value={product.volume * person}
                        min="1"
                        className="form-control"
                        onChange={(e) => updateInput(e, product)}
                      />{" "}
                      / คน
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
          <Button variant="primary" size="lg">
            <FaCartPlus className="mr-5" />
            สั่งสินค้า
          </Button>{" "}
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
