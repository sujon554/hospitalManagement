import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleCare from './SingleCare';
import carephoto from '../../images/care.jpg';
const Care = () => {
    const [cares, setCare] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setCare(data))
      
    } , [])

    return (
        <Container>
            <img className="pb-4" src={ carephoto} alt="" />
            <Row xs={1} md={3}>
                {
                    cares.map(care => <SingleCare
                        key={care.id}
                        care={care}
                    ></SingleCare>)
                }

            </Row>
        </Container>
    );
};

export default Care;