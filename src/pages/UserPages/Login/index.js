import React, { Fragment, Component, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Slider from "react-slick";

import bg1 from "../../../assets/utils/images/originals/city.jpg";
import bg2 from "../../../assets/utils/images/originals/citydark.jpg";
import bg3 from "../../../assets/utils/images/originals/citynights.jpg";
import dashLogo from "../../../assets/utils/images/logo-inverse.png";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };
  const { isLoading, loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  return (
    <Fragment>
      {/* <div className="h-100">
        <Row className="h-100 no-gutters">
          {/* <Col lg="4" className="d-none d-lg-block">
            <div className="slider-light">
              <Slider {...settings}>
                <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                  <div
                    className="slide-img-bg"
                    style={{
                      backgroundImage: "url(" + bg1 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Perfect Balance</h3>
                    <p>
                      ArchitectUI is like a dream. Some think it's too good to
                      be true! Extensive collection of unified React Boostrap
                      Components and Elements.
                    </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                  <div
                    className="slide-img-bg"
                    style={{
                      backgroundImage: "url(" + bg3 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Scalable, Modular, Consistent</h3>
                    <p>
                      Easily exclude the components you don't require.
                      Lightweight, consistent Bootstrap based styles across all
                      elements and components
                    </p>
                  </div>
                </div>
                <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div
                    className="slide-img-bg opacity-6"
                    style={{
                      backgroundImage: "url(" + bg2 + ")",
                    }}
                  />
                  <div className="slider-content">
                    <h3>Complex, but lightweight</h3>
                    <p>
                      We've included a lot of components that cover almost all
                      use cases for any type of application.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col> */}
          {/* <Col
            lg="12"
            md="12"
            className="h-100 d-flex bg-white justify-content-center align-items-center"
          >
            <Col lg="6" md="10" sm="12" className="mx-auto app-login-box">
              <div className="app-logo" />
              <img src={dashLogo} style={{width:140,marginBottom:50}}/>
              <h4 className="mb-0">
                <div>Welcome back,</div>
                <span>Please sign in to your account.</span>
              </h4>
              <div>
                <Form>
                  <Row className="divider" />
                  <div className="d-flex align-items-center">
                    <div className="ml-auto">
                      <Button
                        color="primary"
                        size="lg"
                        onClick={(e) => loginWithRedirect()}
                      >
                        Go to Dashboard
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Col>
        </Row>
      </div> */} */}
    </Fragment>
  );
};
export default Login;
