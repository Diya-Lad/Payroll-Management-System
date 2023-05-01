import Sidebar from "../Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import fetch from "cross-fetch";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

function Salary_Report() {
  const email = useRef();

  const [emp_name, setEmpName] = useState("");
  const [mob_no, setMobNo] = useState("");
  const [email1, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [basic_pay, setBasicPay] = useState("");
  const [salary, setSalary] = useState("");
  const [bank_account, setBankAccount] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [netPay, setNetPay] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

  function searchEmp(event) {
    event.preventDefault();
    var link = "https://localhost:7291/api/Employee/" + email.current.value;
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        console.log(result["id"]);

        setEmpName(result["emp_name"]);
        setMobNo(result["emp_mob_no"]);
        setEmail(result["emp_email"]);
        setDob(result["emp_dob"]);
        setPassword(result["emp_pass"]);
        setDesignation(result["designation"]);
        setBasicPay(result["basic_pay"]);
        setSalary(result["salary"]);
        setBankAccount(result["bank_account"]);
        setJoiningDate(result["joining_date"]);
        setAddress(result["address"]);
        setPincode(result["pincode"]);

        // console.log(result["joining_date"]);
        console.log(result["joining_date"]);
        console.log(new Date());
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;

        console.log(
          getMonthDifference(
            new Date(result["joining_date"]),
            new Date(currentDate)
          )
        );
        setNetPay(
          getMonthDifference(
            new Date(result["joining_date"]),
            new Date(currentDate)
          )
        );
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
            <h4>Salary Report</h4>
          </div>
          <Form>
            <div className="row">
              <div className="col">
                <label className="fw-bold">Email Address : </label>
                <input
                  type="email"
                  placeholder="Search By Email"
                  ref={email}
                  className="rounded-pill border border-3 mx-1"
                  style={{ width: "500px", borderRadius: "2%" }}
                />
                <button
                  variant="primary"
                  className="btn btn-success"
                  onClick={searchEmp}
                  style={{ marginLeft: "2%", marginTop: "2%" }}
                >
                  Search
                </button>
              </div>
            </div>
          </Form>
          <div className="container">
            <Table style={{ width: "40%" }}>
              <tbody>
                <tr>
                  <td className="heading">
                    <b>Name:</b>
                  </td>
                  <td className="data">{emp_name}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Email:</b>
                  </td>
                  <td className="data">{email1}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Salary:</b>
                  </td>
                  <td className="data">{salary}</td>
                </tr>
                <tr className="text-center">
                  <b>NetPay: {basic_pay * parseInt(netPay)}</b>
                </tr>
              </tbody>
            </Table>
            {/* <h5>Name: {emp_name}</h5>
            <h5>Email: {email1}</h5>
            <h5>Basic pay: {basic_pay}</h5>
            <h5>Salary: {salary}</h5>
            <h4>NetPay: {basic_pay * parseInt(netPay)}</h4> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Salary_Report;
