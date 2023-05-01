import Sidebar from "../Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import fetch from "cross-fetch";
import Table from "react-bootstrap/Table";
import "./Employee_Details.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ReactSession } from "react-client-session";

function Employee_Details() {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);
  const [emp_id, setEmpId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  const handleClose = () => setShow(false);
  function handleShow(data) {
    console.log(data.id);
    setEmpId(data.id);
    setShow(true);
  }

  function editRecord(data) {
    navigate("/editRecord", { state: { emp: data } });
  }

  function deleteRecord() {
    fetch("https://localhost:7291/api/Employee/" + emp_id, {
      method: "DELETE",
    });
    setShow(false);
  }

  useEffect(() => {
    fetch("https://localhost:7291/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  });

  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <Sidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <h1>All Employees Details</h1>

          <Table
            striped
            bordered
            hover
            size="sm"
            className="table table-responsive table-striped"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Password</th>
                <th>Mobile No.</th>
                <th>Password</th>
                <th>Address</th>
                <th>Joining Date</th>
                <th>Basic Pay</th>
                <th>Salary</th>
                <th>Bank Account</th>
                <th>Pincode</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, i) => (
                <tr key={i}>
                  <td>{e.emp_name}</td>
                  <td>{e.emp_email}</td>
                  <td>{e.emp_dob}</td>
                  <td>{e.emp_pass}</td>
                  <td>{e.emp_mobile_no}</td>
                  <td>{e.emp_pass}</td>
                  <td>{e.address}</td>
                  <td>{e.joining_date}</td>
                  <td>{e.basic_pay}</td>
                  <td>{e.salary}</td>
                  <td>{e.bank_account}</td>
                  <td>{e.pincode}</td>
                  <td>{e.designation}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={(event) => editRecord(e)}
                    >
                      Edit Details
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={(event) => handleShow(e)}>
                      Delete Record
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure, you want to delete this record ?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={deleteRecord}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Employee_Details;
