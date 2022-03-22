import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Read = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://frozen-waters-08113.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <h1>Current This time {doctors.length} Appointments</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>Doctors Name</th>
            <th>Doctors specialty</th>
            <th>Doctors Fee</th>
          </tr>
        </thead>
        {doctors.map((doctor) => (
          <tbody>
            <tr>
              <td></td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.fee}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Read;
