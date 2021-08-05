/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/emad.png";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-3 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-2 text-white">
                        Complex yet simply elegant{" "}
                        <span>designs that handle your needs</span>
                      </h1>
                      <p className="lead text-white">
                        Using abstraction and the most recent web development
                        assets, I build apps and websites that are pleasing on
                        the eyes and offer more functionality.
                      </p>
                      <div className="btn-wrapper"></div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <Row className="justify-content-center">
            <section className="section section-lg pt-lg-0 mt--200">
              <h2 className="text-center mb-5 font-weight-bold">My Projects</h2>
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-ambulance" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              Emergency Advisor
                            </h6>
                            <p className="description mt-3">
                              A website that helps people in need to find fast
                              solutions for emergencies they might encounter, it
                              also provides tips and recommendations for dealing
                              with chronic diseases and COVID-19.
                            </p>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                HMTL
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                CSS
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="https://anti-devs.github.io/emergency-advisor/"
                            >
                              View Now
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                              <i className="ni ni-cart" />
                            </div>
                            <h6 className="text-success text-uppercase">
                              Bus-Mall
                            </h6>
                            <p className="description mt-3">
                              A website for showing the user a catalogue in
                              order to help him with the items he might be
                              interested the most.It also shows him a chart for
                              demonstrating that in addition to other set of
                              features.
                            </p>
                            <div>
                              <Badge color="success" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="success" pill className="mr-1">
                                HTML
                              </Badge>
                              <Badge color="success" pill className="mr-1">
                                CSS
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="success"
                              href="https://hamzaahmad97.github.io/bus-mall/"
                            >
                              View Now
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                              <i className="ni ni-world" />
                            </div>
                            <h6 className="text-warning text-uppercase">
                              Horned Animals
                            </h6>
                            <p className="description mt-3">
                              A website that will show you a number of horned
                              animals with some descriptions for thier
                              behaviours and what identifies them, you will have
                              the ability to show animals that have a specific
                              number of horns.
                            </p>
                            <div>
                              <Badge color="warning" pill className="mr-1">
                                React
                              </Badge>
                              <Badge color="warning" pill className="mr-1">
                                Bootstrap
                              </Badge>
                              <Badge color="warning" pill className="mr-1">
                                JavaScript
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="warning"
                              href="https://stoic-lalande-e6a4c0.netlify.app/"
                            >
                              View Now
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </Row>
          <Row className="justify-content-center m-5"></Row>
          <Row className="justify-content-center pt-5 mt-5">
            <section className="section section-lg pt-lg-0 mt--200 ">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-satisfied" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              Cookie Stand
                            </h6>
                            <p className="description mt-3">
                              In this website, you will be able to check
                              something that might sound new to you which is the
                              salmon cookie. This website shows you the
                              locations, opening times and the services that
                              Pat's restaurant offers.
                            </p>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                CSS
                              </Badge>
                              <Badge color="primary" pill className="mr-1">
                                HTML
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="https://hamzaahmad97.github.io/cookie-stand/"
                            >
                              View Now
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                              <i className="ni ni-check-bold" />
                            </div>
                            <h6 className="text-success text-uppercase">
                              Chocolate Pizza
                            </h6>
                            <p className="description mt-3">
                              This website was built to demonstrate my skills in
                              positioning as per the requirements or the
                              instructions, it does not contain any useful
                              information, but I assure you that it can be fun
                              to check, so hurry and click that button.
                            </p>
                            <div>
                              <Badge color="success" pill className="mr-1">
                                JavaScript
                              </Badge>
                              <Badge color="success" pill className="mr-1">
                                CSS
                              </Badge>
                              <Badge color="success" pill className="mr-1">
                                HTML
                              </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="success"
                              href="https://hamzaahmad97.github.io/chocolate-pizza/"
                            >
                              View Now
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card
                          className="card-lift--hover shadow border-0 h-100"
                          style={{ background: "url(assets/img/theme/bg.png)" }}
                        >
                          <CardBody className="py-5 mt-5">
                            <h2 className="text-center mt-5 pt-5">
                              Coming soon
                            </h2>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </Row>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Emergency Advisor
                      </h4>
                      <p className="lead text-italic text-white">
                        Emergency Advisor was built with the help of a great
                        team called <strong>Anti-Divs</strong>, it utilizes
                        JavaScript, HTML and CSS in addition to the local
                        storage.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-sound-wave" />
                    </div>
                    <h3>Act fast</h3>
                    <p className="lead">
                      Usually people face immergency cases all out of a sudden,
                      some of these emergencies might not seem that harmful, but
                      if you do handle it in the wrong way, this might lead to
                      worse conditions and sometimes to death.
                    </p>
                    <p>
                      At Emergency Advisor, you will be able to check the latest
                      updates on COVID-19, access the nearest hospital to you,
                      read some useful tips and most importantly, finding
                      instructions for dealing emergency cases.
                    </p>
                    <p>
                      The website also has the user profile feature, where the
                      visitor can be able to access his medical history at any
                      time.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Have any suggestions to help improve the website?
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-bulb-61 text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Future Projects</h4>
                      <p className="text-white">
                        Currently, I am studying full stack web development, and
                        although I do not have lots of skills to begin with, I
                        have some ideas for future projects that you might find
                        interesting.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-settings" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">Welder</h5>
                          <p>
                            A website that will allow you to build simple
                            websites with ease, not requiring any programming
                            knowledge.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-controller" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">Zero:Hour</h5>
                          <p>
                            This website will hopefully be the go-to website for
                            the comman and conquer generals zero hour community
                            in order to keep the game alive.
                          </p>
                          <a
                            className="text-warning"
                            href="https://en.wikipedia.org/wiki/Command_%26_Conquer:_Generals_%E2%80%93_Zero_Hour"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row>
                <h2 className='text-center mb-5 w-100 font-weight-bold'>My Background</h2>
              </Row>
              <Row className="justify-content-center text-center">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/I9-ig2hkCPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay></iframe>
                </div>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
