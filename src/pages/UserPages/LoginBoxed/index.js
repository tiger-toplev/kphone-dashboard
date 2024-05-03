import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

// Layout

const LoginBoxed = ({ match }) => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();
 
  return (
    <Fragment>
      <div className="h-100 bg-plum-plate bg-animation">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <Col md="8" className="mx-auto app-login-box">
            <div className="app-logo-inverse mx-auto mb-3" />
            <div className="modal-dialog w-100 mx-auto">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="h5 modal-title text-center">
                    <h4 className="mt-2">
                      <div>Welcome back,</div>
                      <span>Please sign in to your account below.</span>
                    </h4>
                  </div>
                  <Form>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email here..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Password here..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup check>
                      <Input type="checkbox" name="check" id="exampleCheck" />
                      <Label for="exampleCheck" check>
                        Keep me logged in
                      </Label>
                    </FormGroup>
                  </Form>
                  <div className="divider" />
                  <h6 className="mb-0">
                    No account? <Link to="/pages/register">Sign up now </Link>
                  </h6>
                </div>
                <div className="modal-footer clearfix">
                  <div className="float-left">
                    <a
                      href="https://colorlib.com/"
                      onClick={(e) => e.preventDefault()}
                      className="btn-lg btn btn-link"
                    >
                      Recover Password
                    </a>
                  </div>
                  <div className="float-right">
                    <Button color="primary" size="lg"  onClick={(e) => loginWithRedirect()}>
                      Login to Dashboard
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-white opacity-8 mt-3">
              Copyright &copy; ArchitectUI 2019
            </div>
          </Col>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginBoxed;
