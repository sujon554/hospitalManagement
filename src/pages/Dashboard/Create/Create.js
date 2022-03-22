import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Create = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState();
  
    const onSubmit = (data) => {
      axios
        .post("https://frozen-waters-08113.herokuapp.com/doctors", data)
        .then((res) => {
          if (res.data.insertedId) {
            // alert("Package Addeded Successfully!");
            reset();
           
            setSuccess("Doctor Added Successfully !");
          }
        });
    };
  
    //Remove Success Text
    const successTextRemover = () => {
      setSuccess("");
    };
    return (
        <div className="pt-5">
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add a new <strong className="text-info">Doctors</strong>
      </h3>

      <Form
        className="d-flex flex-column w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors Name"
          {...register("name")}
        />
        
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors specially"
          {...register("specialty")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors Degree"
          {...register("degree")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors ৳ Fee"
          {...register("fee")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("img")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors Designation"
          {...register("designation")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors Address"
          {...register("address")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Doctors About"
          {...register("about")}
        />

        <Button className="w-50" variant="success" type="submit">
          Add Doctor
        </Button>
      </Form>
      <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
    );
};

export default Create;