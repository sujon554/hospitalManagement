import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className="container p-5 m-5">
            <Row xs={1} md={3}>
                <Col>
                    <h1>OFFICE ADDRESS</h1>
                    <h4>My Health Medical Center</h4>
                    <h4>Block-B</h4>
                    <h4>House: #04</h4>
                    <h4>Road: #01</h4>
                    <h4>Mirpur, Dhaka-1207</h4>
                    <h4>Bangladesh</h4>

                   
                </Col>

                <Col>
                    <h1>PHONE</h1>
                    <h4>01700000000</h4>
                    <h4>01700000000</h4>
                    <h4>01700000000</h4>
                   
                    
                </Col>
                <Col>
                <h1>E-mail</h1>
                    <h4>demo@gmail.com</h4>
                    <h4>demo@gmail.com</h4>
                </Col>
            </Row>
            
        </div>
    );
};

export default Contacts;