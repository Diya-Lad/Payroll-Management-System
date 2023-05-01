import "./Add_Employee.css";
import "bootstrap/dist/css/bootstrap.css";
import fetch from "cross-fetch";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ReactSession } from "react-client-session";
import { useLocation, useNavigate } from "react-router-dom";

function Add_Employee() {
  const name = useRef();
  const email = useRef();
  const dob = useRef();
  const password = useRef();
  const confirm_password = useRef();
  const designation = useRef();
  const basic_pay = useRef();
  const salary = useRef();
  const bank_account = useRef();
  const joining_date = useRef();
  const address = useRef();
  const phone_no = useRef();
  const pincode = useRef();
  const [Items, setItems] = useState([]);
  const [id, setId] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetch("https://localhost:7291/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  });

  function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

  function addEmployee() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //   if (
    //     ReactSession.get("id") === undefined &&
    //     ReactSession.get("id") != "admin"
    //   ) {
    //     navigate("/login");
    //   }
    // }, []);
    // var link = "https://localhost:7291/api/Employee/" + email.current.value;
    // fetch(link).then((res) => {
    //   if (res.status == 200) {
    //     console.log("Email already exists");
    //     return;
    //   }
    // });

    fetch("https://localhost:7291/api/Employee", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        emp_name: name.current.value,
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
      .then((res) => res.json())
      .then((result) => {
        setId(result.id);
        console.log(result);
      });
    // var link = "https://localhost:7291/api/Employee/" + email;
    // fetch(link)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result.json);
    //   });

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    let n = parseInt(
      getMonthDifference(
        new Date(joining_date.current.value),
        new Date(currentDate)
      )
    );

    console.log(Items);
    // va
    // console.log(id);
    var d = joining_date.current.value.split("-");
    var m = parseInt(d[1]),
      y = parseInt(d[0]);
    for (var i = 0; i < n; i++) {
      fetch("https://localhost:7291/api/Salaries", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          emp_id: id,
          date: `${y}-${m}-1`,
          amount: basic_pay.current.value,
        }),
      });
      m++;
      if (m == 13) {
        y++;
        m = 1;
      }
    }
  }

  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <Sidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <div className="text-center title1 m-0">
            <h4>Add New Employee</h4>
          </div>
          <div className="container-fluid form p-3">
            <Form>
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" name="name" ref={name} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" name="email" ref={email} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>DOB: </Form.Label>
                    <Form.Control type="date" name="dob" ref={dob} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      ref={password}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control
                      type="password"
                      name="confirm_password"
                      ref={confirm_password}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Designation: </Form.Label>
                    <Form.Control
                      type="text"
                      name="designation"
                      ref={designation}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Basic Pay: </Form.Label>
                    <Form.Control
                      type="number"
                      name="basic_pay"
                      ref={basic_pay}
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Salary: </Form.Label>
                    <Form.Control type="number" name="salary" ref={salary} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Bank Account: </Form.Label>
                    <Form.Control
                      type="text"
                      name="bank_account"
                      ref={bank_account}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Joining Date: </Form.Label>
                    <Form.Control
                      type="date"
                      name="joining_date"
                      ref={joining_date}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      name="address"
                      ref={address}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Phone Number: </Form.Label>
                    <Form.Control
                      type="number"
                      name="phone_number"
                      ref={phone_no}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="">
                    <Form.Label>Pincode: </Form.Label>
                    <Form.Control type="number" name="pincode" ref={pincode} />
                  </Form.Group>
                </div>
              </div>
              <Button
                variant="primary"
                className="btn btn-success px-5"
                style={{ marginLeft: "45%" }}
                onClick={addEmployee}
              >
                Add Employee
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Add_Employee;
