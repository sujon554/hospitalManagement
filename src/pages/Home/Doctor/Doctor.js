import React, { useEffect, useState } from 'react';
import { Button, Card as h1, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("https://frozen-waters-08113.herokuapp.com/doctors")
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])
    return (
        <Container className="my-5 mb-3 py-3">
        <h1 className="text-danger my-5">Doctors</h1>
        <Row xs={1} md={3} className="g-4">
          {doctors.slice(0, 6).map((doctor) => (
            <Col key={doctor._id} doctor={doctor}>

              <Row className="bg-dark m-2 border-2 rounded-3 g-3 bg-opacity-10 border-3">
                <Col xs={3}>  
                  <h1.Img
                  height="120"
                  width="70"
                  variant="top"
                  src={doctor.img}

                />

               
                </Col>
                <Col> 
                <h3>{doctor.name}</h3>
                <h5>{doctor.specialty}</h5>
                <h6>{doctor.degree}</h6>
                </Col>

                <Link className="pb-2" to={`/singledoctor/${doctor._id}`}>
                  <Button className="px-5 py-2">BooK Now</Button>
                </Link>
              </Row>


              {/*
                  <Card.Text>{watch.Description}</Card.Text> */}
  
                  {/* <Rating
                    initialRating={watch.star}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                  /> 
               
  
                 */}
            
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Doctor;