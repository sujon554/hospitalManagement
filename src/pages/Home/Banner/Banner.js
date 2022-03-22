import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import './banner.css';

import banner1 from "../../images/banner.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";


// import card1 from "../../images/Home/card1.jpg";
// import card2 from "../../images/Home/card2.jpg";
// import card3 from "../../images/Home/card3.jpg";
// import card4 from "../../images/Home/card4..jpg";
// import card5 from "../../images/Home/card5.jpg";
// import card6 from "../../images/Home/card6.jpg";
// import card7 from "../../images/Home/card7.jpg";
// import card8 from "../../images/Home/card8.jpg";




const Banner = () => {
    return (
        < >
        <Carousel className="pb-5" id="home">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>First slide label</h1>
                    <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Second slide label</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <h5>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

            


{/* Service item 
            <div className="container py-5">
                <h1 className="py-5 text-success"><strong>OUR CONSULTANCY</strong></h1>
            <Row xs={1} md={3} className="g-4">
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card1} />
                <Card.Body>
                <h2>Home Medicare</h2>
                
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={card2} />
                <Card.Body>
                <h2>Home Healthcare</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card3} />
                <Card.Body>
                <h2>Healsoul RTL</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card4} />
                <Card.Body>
                <h2>Home Health Center</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card5} />
                <Card.Body>
                <h2>Home Therapist</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card6} />
                <Card.Body>
                <h2>Home Doctor</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card7} />
                <Card.Body>
                <h2>Home Modern</h2>
               
                </Card.Body>        
            </Col>
            <Col>        
                    <Card.Img className="consultancyImage" variant="top" src={ card8} />
                <Card.Body>
                <h2>Home Caregiver</h2>
               
                </Card.Body>        
            </Col>
        </Row>
        </div>  */}
    </>
    );
};

export default Banner;