import React from "react";
import Typical from "react-typical";
import { Carousel, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HomePage = () => {
  const Divider = styled.hr`
    margin: 5rem 0;
  `;
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1628191011993-69070758764f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="text-start text-white">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>
                <NavLink
                  to="/product"
                  className="btn btn-lg btn-primary"
                  activeClassName="active"
                >
                  Learn more
                </NavLink>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1627492376333-9572d2bc99d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="text-start text-white">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>
                <NavLink
                  to="/product"
                  className="btn btn-lg btn-primary"
                  activeClassName="active"
                >
                  Learn more
                </NavLink>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1625631976982-c6df1654a6ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="text-start text-white">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>
                <NavLink
                  to="/product"
                  className="btn btn-lg btn-primary"
                  activeClassName="active"
                >
                  Learn more
                </NavLink>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="text-center mt-3">
          <div className="row">
            <div className="col-lg-4">
              <NavLink to="/product?type=thai">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.18169-9/21370921_1589405647789442_4629004823198956328_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=8bfeb9&_nc_eui2=AeGZJN-Y6xeSiOUY0hypDDLbSCH2_fPCObBIIfb988I5sJLpOW79n8MY1tMp2zNhRuV-yVpqQ2HrwvYaQ3W9dbxM&_nc_ohc=6m_79730C9sAX8SV9fG&_nc_ht=scontent.fbkk2-4.fna&oh=75f911902c14e6ce4b34d5a9ea88ad4a&oe=6139D168"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />{" "}
              </NavLink>
              <p>
                <NavLink
                  to="/product?type=thai"
                  className="btn btn-outline-info mt-2"
                  activeClassName="active"
                >
                  อาหารไทย
                </NavLink>
              </p>
            </div>
            <div className="col-lg-4">
              <NavLink to="/product?type=clearn">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://get.pxhere.com/photo/dish-food-cuisine-salad-ingredient-caesar-salad-lettuce-produce-garden-salad-spinach-salad-vegetable-leaf-vegetable-meat-romaine-lettuce-vegetarian-food-recipe-Iceburg-lettuce-greek-food-1529253.jpg"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />{" "}
              </NavLink>
              <p>
                <NavLink
                  to="/product?type=clearn"
                  className="btn btn-outline-info mt-2"
                  activeClassName="active"
                >
                  อาหารคลีน
                </NavLink>
              </p>
            </div>
            <div className="col-lg-4">
              <NavLink to="/product?type=japanese">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.6435-9/36436381_1893542290709108_519883637739487232_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=8bfeb9&_nc_eui2=AeEAmY7_K3A6xZ2SRy5mCSU0yIbVxeDLdbjIhtXF4Mt1uIeLPneqSHL28v_3_8tTWIp8ivEwK-Thy8oxai38sPeN&_nc_ohc=kxiw-kUZDqsAX83Lmwt&_nc_oc=AQmrToXA_ZD7yCYV220CX9mf-sWwEmKOIuQfHw1xzrY4qnecU4oezRIVr8ZhGG5cy3E&tn=nVFCu04bkmDgdUJd&_nc_ht=scontent.fbkk2-3.fna&oh=fbc2db3d03fe05f02a6b3f9349d08f34&oe=613CC1B3"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />{" "}
              </NavLink>
              <p>
                <NavLink
                  to="/product?type=japanese"
                  className="btn btn-outline-info mt-2"
                  activeClassName="active"
                >
                  Learn more
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="row featurette">
          <style jsx>{`
            .featurette-heading {
              font-weight: 300;
              line-height: 1;
              /* rtl:remove */
              letter-spacing: -0.05rem;
            }
            @media (min-width: 40em) {
              /* Bump up size of carousel content */
              .carousel-caption p {
                margin-bottom: 1.25rem;
                font-size: 1.25rem;
                line-height: 1.4;
              }

              .featurette-heading {
                font-size: 50px;
              }
            }

            @media (min-width: 62em) {
              .featurette-heading {
                margin-top: 7rem;
              }
            }
          `}</style>
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              ผัดไทย <span className="text-muted">Padthai</span>
            </h2>
            <p className="lead">ช่วยให้คุณสามารถทำผัดไทยได้ง่ายยิ่งขึ้น</p>
            <NavLink
              to="/project?search=padthai"
              className="btn btn-lg btn-primary"
              activeClassName="active"
            >
              Learn more
            </NavLink>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              height={500}
              width={500}
              src="https://cdn.pixabay.com/photo/2016/09/26/19/06/eat-1696744_960_720.jpg"
              alt="pad-thai"
              focusable="false"
            />
          </div>
        </div>
        <Divider />
        <div className="row featurette">
          <style jsx>{`
            .featurette-heading {
              font-weight: 300;
              line-height: 1;
              /* rtl:remove */
              letter-spacing: -0.05rem;
            }
            @media (min-width: 40em) {
              /* Bump up size of carousel content */
              .carousel-caption p {
                margin-bottom: 1.25rem;
                font-size: 1.25rem;
                line-height: 1.4;
              }

              .featurette-heading {
                font-size: 50px;
              }
            }

            @media (min-width: 62em) {
              .featurette-heading {
                margin-top: 7rem;
              }
            }
          `}</style>
          <div className="col-md-7">
            <h2 className="featurette-heading">
              แกงเขียวหวานไก่ <span className="text-muted">green curry</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
            <NavLink
              to="/detail/61162cd61a3b1419f0ba618d"
              className="btn btn-outline-info mt-2"
              activeClassName="active"
            >
              Learn more
            </NavLink>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              height={500}
              width={500}
              src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t31.18172-8/18278454_1463618233701518_1791232337601347255_o.jpg?_nc_cat=108&ccb=1-4&_nc_sid=84a396&_nc_eui2=AeFt03fWNqdBpjd0RVhsEwaNa0z8GDlShsprTPwYOVKGyo8JQ9xULoGDxHE0U77pQSe-CHudnRrW8Ckxzd-Sw4Sy&_nc_ohc=5aB2wICvIUUAX8TzrkF&_nc_ht=scontent.fbkk2-7.fna&oh=1820049f3d03eed9bdfde08bf6c408f7&oe=613C65E5"
              alt="green curry"
              focusable="false"
            />
          </div>
        </div>
      </Container>
      <div className="text-center">
        <h1 className="display-4">
          {" "}
          <Typical
            steps={["Hello", 1000, "Hello world!", 500]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
      </div>
    </>
  );
};

export default HomePage;
