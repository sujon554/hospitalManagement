import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleCare from "../Care/SingleCare";

const Tests = () => {
  const [cares, setCare] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setCare(data));
  }, []);
  const Style = {
    fontWeight: "bold",
    fontSize: '1.2rem',
    padding: "12px",
    color: 'white',
    borderRadius: "8px",
    backgroundColor: "blue"
};
  return (
    <Container>
         <h1 className="text-danger my-5">Test's</h1>
      <Row xs={1} md={3}>
        {cares.slice(0, 6).map((care) => 
        <SingleCare
        key={care.id}
        care={care}
        ></SingleCare>
        )}
      </Row>
    </Container>
  );
};

export default Tests;
