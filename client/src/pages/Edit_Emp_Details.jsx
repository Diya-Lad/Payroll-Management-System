import Sidebar from "../Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import fetch from "cross-fetch";
import Table from "react-bootstrap/Table";
import "./Employee_Details.css";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import { ReactSession } from "react-client-session";

function Edit_Emp_Details() {
  const { state } = useLocation();
  var name1 = useRef();
  var email = useRef();
  var dob = useRef();
  var password = useRef();
  var designation = useRef();
  var basic_pay = useRef();
  var salary = useRef();
  var bank_account = useRef();
  var joining_date = useRef();
  var address = useRef();
  var phone_no = useRef();
  var pincode = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  console.log(state.emp.id);

  function updateDetails() {
    fetch("https://localhost:7291/api/Employee/" + state.emp.id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: state.emp.id,
        emp_name: name1.current.value,
        emp_email: email.current.value,
        emp_dob: dob.current.value,
        emp_pass: password.current.value,
        designation: designation.current.value,
        basic_pay: basic_pay.current.value,
        salary: salary.current.value,
        bank_account: bank_account.current.value,
        joining_date: joining_date.current.value,
        address: address.current.value,
        emp_mobile_no: phone_no.current.value,
        pincode: pincode.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <Sidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <div className="text-center title1 m-0">
            <h4>Edit Employee Details</h4>
          </div>
          <div className="container-fluid form p-3">
            <Form>
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                      type="text"
                      name="name1"
                      ref={name1}
                      defaultValue={state.emp.emp_name}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      ref={email}
                      defaultValue={state.emp.emp_email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>DOB: </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      ref={dob}
                      defaultValue={state.emp.emp_dob}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      defaultValue={state.emp.emp_pass}
                      ref={password}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Designation: </Form.Label>
                    <Form.Control
                      type="text"
                      name="designation"
                      defaultValue={state.emp.designation}
                      ref={designation}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Basic Pay: </Form.Label>
                    <Form.Control
                      type="number"
                      name="basic_pay"
                      ref={basic_pay}
                      defaultValue={state.emp.basic_pay}
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Salary: </Form.Label>
                    <Form.Control
                      type="number"
                      name="salary"
                      ref={salary}
                      defaultValue={state.emp.salary}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Bank Account: </Form.Label>
                    <Form.Control
                      type="text"
                      name="bank_account"
                      ref={bank_account}
                      defaultValue={state.emp.bank_account}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Joining Date: </Form.Label>
                    <Form.Control
                      type="date"
                      name="joining_date"
                      ref={joining_date}
                      defaultValue={state.emp.joining_date}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      name="address"
                      ref={address}
                      defaultValue={state.emp.address}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Phone Number: </Form.Label>
                    <Form.Control
                      type="number"
                      name="phone_number"
                      ref={phone_no}
                      defaultValue={state.emp.emp_mobile_no}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Pincode: </Form.Label>
                    <Form.Control
                      type="number"
                      name="pincode"
                      ref={pincode}
                      defaultValue={state.emp.pincode}
                    />
                  </Form.Group>
                </div>
              </div>
              <Button
                variant="primary"
                className="btn btn-success px-5"
                style={{ marginLeft: "45%" }}
                onClick={updateDetails}
              >
                Edit Details
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit_Emp_Details;
