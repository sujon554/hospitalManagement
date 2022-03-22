import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const SingleCare = (props) => {

    const {id, name, img, Fee, description } = props.care;
    const Style = {
        fontWeight: "bold",
        fontSize: '1.2rem',
        padding: "12px",
        color: 'white',
        borderRadius: "8px",
        backgroundColor: "blue"
    };
    const photo = {
        height: "300px",
        width: "400px"
    }
    return (
        <Col className="card">
            <Card.Img style={photo} variant="top" src={ img}  />
            <Card.Body>
                <h2>{name }</h2>
                <h3>FEE: { Fee}</h3>
                <p><strong>DESCRIPTION</strong> {description}</p>
                <Link to={`/details/${id}`}>
                    <Button style={Style}>Check Detaies</Button>
                </Link>
            </Card.Body>
        </Col>
    );
};

export default SingleCare;