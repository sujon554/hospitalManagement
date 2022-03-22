import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const Delete = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      fetch("https://frozen-waters-08113.herokuapp.com/doctors")
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);

     //   /Delete Orders
  const deleteHandler = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this Doctor?"
    );
    if (proceed) {
      fetch(`https://frozen-waters-08113.herokuapp.com/doctors/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingDoctors = doctors.filter(
              (watch) => watch._id !== id
            );

            setDoctors(remainingDoctors);
          }
        });
    }
  };
    return (
        <div>
        <h1>Current This time {doctors.length} Appointments</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
             
              <th>Doctors Name</th>
              <th>Doctors specialty</th>
              <th>Doctors Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          {doctors.map((doctor) => (
            <tbody>
              <tr>
                <td></td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.fee}</td>
                <Button
                    className="bg-danger text-light m-2 px-4"
                    onClick={() => deleteHandler(doctor._id)}
                  >
                    Delete
                  </Button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default Delete;