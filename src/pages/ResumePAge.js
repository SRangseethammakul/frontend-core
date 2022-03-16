import React from "react";
import Typical from "react-typical";
import { Button, Container, Col, Row } from "react-bootstrap";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ResumePage = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const FadeOut = batch(Fade(), MoveOut(), Sticky());
  const FadeInCss = batch(Fade(), MoveIn(), Sticky());
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "4em" }}>
              <Typical
                steps={[
                  "Hello world!",
                  2000,
                  "i am suttipong",
                  2000,
                  "i am Programmer",
                  2000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "5em" }}>Education</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "4em" }}>University</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeOut}>
            <span style={{ fontSize: "4em" }}>Kasetsart University</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "4em" }}>Hihgt School</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={FadeInCss}>
            <span style={{ fontSize: "4em" }}>
              Benchamatheputhit Phetchaburi School
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={FadeInCss}>
            <span style={{ fontSize: "4em" }}>WORK EXPERIENCE</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={FadeOut}>
            <span style={{ fontSize: "4em" }}>
              CRC THAI WATSADU COMPANY LIMITED
            </span>
            <br />
            <span style={{ fontSize: "2em" }}>Backend Developer</span>
            <br />
            <span style={{ fontSize: "1em" }}>2020 - Present</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={8}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "4em" }}>Codediva</span>
            <br />
            <span style={{ fontSize: "2em" }}>Backend Developer</span>
            <br />
            <span style={{ fontSize: "1em" }}>2019- 2020</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={9}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Skill 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>PHP Laravel</Animator>
              <Animator animation={MoveIn(500, 0)}>
                Nodejs / Javascript
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>React</Animator>
              <Animator animation={MoveIn(-1000, 0)}>Python</Animator>
              <Animator animation={MoveIn(-500, 0)}>
                Git | Docker | Jira
              </Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={10}>
          <Animator animation={FadeInCss}>
            <span style={{ fontSize: "4em" }}>Line Message API</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={11}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Container>
              <Row>
                <Col>
                  {" "}
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/coreapi/image/upload/v1647452367/Food/073anjgo_dowp0n.png"
                    alt="line message api"
                  />
                </Col>
              </Row>
            </Container>
          </Animator>
        </ScrollPage>
        <ScrollPage page={12}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <a
              href="https://suttipongact.info/files/Suttipong_Rangseethammakul.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button variant="outline-info">Download Now</Button>
            </a>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ResumePage;
