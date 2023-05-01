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

function Salaries() {
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7291/api/Salaries")
      .then((res) => res.json())
      .then((result) => {
        setSalary(result);
      });
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <Sidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <h4
            style={{
              marginTop: "2%",
              marginLeft: "35%",
              color: "rgb(7, 100, 7)",
            }}
          >
            All Employees Details
          </h4>

          <Table
            style={{ width: "80%", marginLeft: "2%", marginTop: "5%" }}
            striped
            bordered
            hover
            size="sm"
            className="table table-responsive table-striped"
          >
            <thead>
              <tr>
                <th>Emp Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {salary.map((s, i) => (
                <tr key={i}>
                  <td>{s.emp_id}</td>
                  <td>{s.date}</td>
                  <td>{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Salaries;
