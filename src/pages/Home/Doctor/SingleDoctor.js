import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const SingleDoctor = () => {
    const [singleDoctor, setSingleDoctor] = useState([]);
    const [success, setSuccess] = useState();
    const {id} = useParams();
    const { user } = useAuth();
  const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://frozen-waters-08113.herokuapp.com/doctors/${id}`)
          .then((res) => res.json())
          .then((data) => setSingleDoctor(data));

      }, []);

        //Booking FORM Submit
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://frozen-waters-08113.herokuapp.com/allorders", data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccess("Doctor Appointment Successfully !!!");
        }
      });
  };
    return (
        <Container className="d-flex">
      {/* Button */}
      <Link to="/home">
        <Button className="px-5 m-3">Back Home</Button>
      </Link>
      <div className="mb-5">
        <img className="h-25 w-25" src={singleDoctor.img} alt="" />
        <h1 className="mt-5">Doctor Name {singleDoctor.name}</h1>
       <ul className='text-start'>
       <h2>specialty: {singleDoctor.specialty}</h2>
        <h2>Degree: {singleDoctor.degree}</h2>
        <h2>Designation: {singleDoctor.designation}</h2>
        <h2>Address: {singleDoctor.address}</h2>
        <p>About: {singleDoctor.about}</p>
       </ul>
      </div>

    
       <div>
 
        <Form
          className="d-flex flex-column mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.displayName}
            {...register("userName")}
          />
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.email}
            {...register("userEmail")}
          />
         

          {singleDoctor.name && (
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              defaultValue={singleDoctor.name}
              {...register("singleDoctorName")}
            />
          )}

          {singleDoctor.img && (
            <input
              className="mb-3 p-2 d-none"
              defaultValue={singleDoctor.img}
              {...register("singleDoctorImg")}
            />
          )}

          {singleDoctor.specialty && (
            <input
              className="mb-3 p-2"
              defaultValue={singleDoctor.specialty}
              {...register("specialty")}
            />
          )}
          {singleDoctor.fee && (
            <input
              className="mb-3 p-2"
              defaultValue={singleDoctor.fee}
              {...register("fee")}
            />
          )}

          

          <input
            className="mb-3 p-2 d-none"
            defaultValue="Pending"
            {...register("bookedServiceStatus")}
          />

          <Button variant="warning" type="submit">
            Appointment Now
          </Button>
        </Form> 
        <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
      </div>
    </Container>
    );
};

export default SingleDoctor;