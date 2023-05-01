import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React, { useEffect, useRef, useState } from "react";
import fetch from "cross-fetch";
import EmpSidebar from "./EmpSidebar";
import { Form, Button, Table } from "react-bootstrap";

function EmpDetails() {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (ReactSession.get("id") === undefined) {
      navigate("/login");
    }
    var link =
      "https://localhost:7291/api/Employee/" + ReactSession.get("email");
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        //   navigate("/items");
        console.log(result);
        console.log(result["id"]);
        setEmpName(result["emp_name"]);
        setMobNo(result["emp_mobile_no"]);
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
      });
  });
  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <EmpSidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <h3
            style={{
              alignItems: "text-center",
              marginLeft: "5%",
              color: "rgb(3, 74, 3)",
            }}
          >
            Employee Details
          </h3>
          <div className="container">
            <Table style={{ width: "40%" }}>
              <tbody>
                <tr>
                  <td className="heading">
                    <b>Name:</b>
                  </td>
                  <td>{emp_name}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Mobile No. :</b>
                  </td>
                  <td className="data">{mob_no}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Email: </b>
                  </td>
                  <td className="data">{email1}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Dob : </b>
                  </td>
                  <td className="data">{dob}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Password : </b>
                  </td>
                  <td className="data">{password}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Designation : </b>
                  </td>
                  <td className="data">{designation}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Basic Pay: </b>
                  </td>
                  <td className="data">{basic_pay}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Salary : </b>
                  </td>
                  <td className="data">{salary}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Bank Account : </b>
                  </td>
                  <td className="data">{bank_account}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Joining Date : </b>
                  </td>
                  <td className="data">{joining_date}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Address : </b>
                  </td>
                  <td className="data">{address}</td>
                </tr>
                <tr>
                  <td className="heading">
                    <b>Pincode : </b>
                  </td>
                  <td className="data">{pincode}</td>
                </tr>
              </tbody>
            </Table>
            {/* <div className="row">
              <div className="col-6">
                <h5>Name: {emp_name}</h5>
                <h5>Email: {email1}</h5>
                <h5>Password: {password}</h5>
                <h5>DOB: {dob}</h5>
                <h5>Mobile No. : {mob_no}</h5>
                <h5>Email: {email1}</h5>
                <h5>Address: {address}</h5>
              </div>
              <div className="col-6">
                <h5>Designation: {designation}</h5>
                <h5>Basic Pay: {basic_pay}</h5>
                <h5>Salary: {salary}</h5>
                <h5>Bank Account: {bank_account}</h5>
                <h5>Joining Date : {joining_date}</h5>
                <h5>Pincode: {pincode}</h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpDetails;
