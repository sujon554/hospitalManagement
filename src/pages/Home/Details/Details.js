import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
import { useHistory, useParams } from 'react-router';

const Details = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});
  
    useEffect(() => {
        fetch("/service.json")
          .then((res) => res.json())
            .then((data) => setService(data));
       
    }, []);
    
    useEffect(() => {
        const getService = service.find( (care) => care.id === serviceId  );
        //check the id value string / number if string then (===) if number then (==)
        console.log(getService);
        setSingleServiceDetails(getService);
      }, [serviceId, service]);
    
      let history = useHistory();
      function goBack() {
        history.push("/care");
      }
    return (
<div className="d-flex flex-column align-items-center pb-5">
        <div className="text-center p-3">
          <img src={ singleServiceDetails?.img} alt="" />
          <h1>This is "{singleServiceDetails?.name}"</h1>
          <h2>Fee {singleServiceDetails?.Fee}</h2>
          <h3>DESCRIPTION</h3>
          <h5 className="mx-auto w-50 h-80">{singleServiceDetails?.description}</h5>

        </div>
       
      <div className="pt-5">
        <Button className="p-3 px-5" onClick={goBack} variant="warning" size="sm">
          Go Back Care's Page
        </Button>
      </div>
    </div>
    
    
    );
};

export default Details;


