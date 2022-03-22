import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Alert,
  Col,
  Container,
  Form,
  Row,
  Button,
} from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, logInUser, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    logInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <Container style={{ background: "#FBEFEC" }}>
      <h1 className="mb-5">
        <strong className="text-danger">LOGIN</strong>
        <strong className="text-info">HERE</strong>
      </h1>
      <Row>
        <Col>
          <Form onSubmit={handleLoginSubmit}>
            <input
              className="w-75 p-1"
              type="email"
              name="email"
              placeholder="E-mail"
              onBlur={handleOnChange}
            />{" "}
            <br /> <br />
            <input
              className="w-75 p-1"
              type="password"
              name="password"
              placeholder="password"
              onBlur={handleOnChange}
            />{" "}
            <br /> <br />
            <Button className="px-5" type="submit">
              User's LogIn
            </Button>{" "}
            <br />
            <br />
            <p>Or</p>
            <br />
            {user?.email && (
              <Alert severity="success">Login Success successfully!</Alert>
            )}
          </Form>
          <Button className="px-5 py-2" onClick={handleGoogleSignIn}>
            <i className="px-5 fs-3 text-danger fab fa-google"></i> Google
            SignIn
          </Button>{" "}
          <br /> <br />
          <NavLink className="my-5" to="/register">
            <Button className="fs-5 my-5 text-danger text-bold" variant="text">
              New User? <strong className="text-info">Please Register</strong>
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
