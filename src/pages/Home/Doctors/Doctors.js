

import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);


  useEffect(() => {
    fetch("https://frozen-waters-08113.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);


  return (
    <div className="container py-5">
      <img src={doctors} alt="" />
      <h1 className="py-5">Our Doctor's</h1>
      <Row xs={1} md={3} className="g-4">
        {doctors.map((doctor) => (
          <Col className="card g-3">
            <Card.Img className="drPhoto" variant="top" src={doctor.img} />
            <h3>{doctor.name}</h3>
            <h6>{doctor.specialty} </h6>
            <h6>{doctor.degree} </h6>

            <Link className="pb-2" to={`/singledoctor/${doctor._id}`}>
                  <Button className="px-5 py-2">BooK Now</Button>
                </Link>
          </Col>
        ))}
      </Row>




     
    </div>
  );
};

export default Doctors;
