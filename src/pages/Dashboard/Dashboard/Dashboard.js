import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Create from "../Create/Create";
import Read from "../Read/Read";
import Update from "../Update/Update";
import Delete from "../Delete/Delete";
import Admin from "./Admin/Admin";
import MyAppointment from "../MyAppointment/MyAppointment";

const Dashboard = () => {
  const { logOut, admin, user } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div>
        <h1 className="text-center mt-3 mb-3  text-uppercase display-6">
          <span className="text-danger">{user?.displayName}</span> dash
          <strong className="text-info">board</strong>
        </h1>
      </div>
      <hr className="new" />
      <Container className="mt-4 mb-5 pb-5">
        <Row>
          <Col sm={2} xl={2} lg={2}>
            <div className="pt-5 px-2">
              <Nav className="d-grid me-auto">
                <NavLink
                  className="mb-3 dashboard text-decoration-none"
                  to={`${url}/myappointment`}
                >
                  My Appointment
                </NavLink>

                {admin && (
                  <Nav>
                    <NavLink
                      className="mb-3 dashboard text-decoration-none"
                      to={`${url}/create`}
                    >
                      Create Appointment
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/read`}
                    >
                      Total Appointment
                    </NavLink>

                    

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/delete`}
                    >
                      Delete Appointment
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/update`}
                    >
                      Update Appointment
                    </NavLink>


                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/admin`}
                    >
                      Make Admin
                    </NavLink>
                  </Nav>
                )}

                <NavLink
                  onClick={logOut}
                  className=" mb-3 text-decoration-none"
                  to="/home"
                >
                  <Button size="sm" variant="warning mt-3 px-4">
                    Log Out
                  </Button>
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={10} xl={10} lg={10}>
            <div className="menubar px-5 w-100">
              <Switch>
                {/* <Route path={path}>
                    <Create />
                  </Route> */}

                <Route path={`${path}/create`}>
                  <Create />
                </Route>

                <Route path={`${path}/read`}>
                  <Read />
                </Route>

                <Route path={`${path}/update`}>
                  <Update />
                </Route>
                <Route path={`${path}/delete`}>
                  <Delete />
                </Route>
                <Route path={`${path}/myappointment`}>
                  <MyAppointment />
                </Route>

                <Route path={`${path}/admin`}>
                  <Admin />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
