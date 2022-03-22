import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container p-5">
            <Row xs={1} md={2} className="g-4">
                <Col>
                        <h2>Medical Team responsibility</h2>
                       
                            <li>Mental health care</li>
                            <li>Dental care</li>
                            <li>Laboratory and diagnostic care</li>
                            <li>Substance abuse treatment</li>
                            <li>Preventative care.</li>
                            <li>Physical and occupational therapy</li>
                            <li>Nutritional support</li>
                            <li>Pharmaceutical care</li>                       
                </Col>
                <Col>
                        <h2>Home Team responsibility</h2>
                            <li>Home Health Center</li>
                            <li>Home Therapist</li>
                            <li>Home Doctor</li>
                            <li>Home Medicare</li>
                            <li>Home Healthcare</li>
                            <li>Healsoul RTL</li>
                            <li>Home Modern</li>
                            <li>Home Caregiver</li>
                </Col>
            </Row>
           </div>
        </footer>
    );
};

export default Footer;