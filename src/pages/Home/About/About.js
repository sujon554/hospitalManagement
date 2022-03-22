import React from 'react';
import { Col, Row } from 'react-bootstrap';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className="container">
            <h1>About Us </h1>
            <Row xs={1} md={2} className="g-4 py-5">
                <Col className="text-justify">
                    <p>
                        Inner banner
                        ViewsFacebookTwitterLinkedInThe healthcare industry is evolving at an unprecedented pace. A thriving technology, Internet of Things (IoT), is spawning a plethora of opportunities in the healthcare space.As per the latest reports, IoT in healthcare is estimated to grow from $41.22 billion in 2017 to $265 billion in 2024.Medical sensors, smart devices and wearables are facilitating the Collection of valuable data that offers eye-opening insights on symptoms and trends, facilitates remote care and gives patients better control over their health.Advances in IoT have allowed healthcare players to operate with greater efficacy and patients to obtain better treatment.Here are 5 exciting IoT applications in healthcare that are revolutionizing this space One of the salient IoT applications in healthcare is remote monitoring of patients.Of late, there has been a trend towards treating the patient in a private, remote environment instead of in hospitals or emergency care environments. Such an approach reduces the workload on healthcare workers who, in many cases, cannot cope up with the rising number of patients.Monitoring in a remote environment not only minimizes the cost of treatment by reducing the need for visitation but also improves the overall quality of treatment. 
                    </p>
                </Col>

                <Col>
                    <img className="w-100" src={ about} alt="" />
                 </Col>
            </Row>
        </div> 
    );
};

export default About;