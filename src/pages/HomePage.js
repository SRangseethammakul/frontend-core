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
                  src="https://res.cloudinary.com/coreapi/image/upload/v1647451397/Food/IMG_5146_odo4vk.jpg"
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
                  src="https://res.cloudinary.com/coreapi/image/upload/v1647451397/Food/IMG_5291_weomys.jpg"
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
              <NavLink to="/product?type=inter">
                <img
                  className="bd-placeholder-img rounded-circle"
                  width={140}
                  height={140}
                  src="https://res.cloudinary.com/coreapi/image/upload/v1647451396/Food/IMG_5295_p5y58l.jpg"
                  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />{" "}
              </NavLink>
              <p>
                <NavLink
                  to="/product?type=inter"
                  className="btn btn-outline-info mt-2"
                  activeClassName="active"
                >
                  อาหารต่างชาติ
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
              src="https://res.cloudinary.com/coreapi/image/upload/v1647451782/Food/IMG_5142_h05gme.jpg"
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
