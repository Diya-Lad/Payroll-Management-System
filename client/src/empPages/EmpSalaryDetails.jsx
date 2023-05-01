import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React, { useEffect, useRef, useState } from "react";
import fetch from "cross-fetch";
import EmpSidebar from "./EmpSidebar";
import "./EmpSalaryDetails.css";
import Table from "react-bootstrap/Table";
import { useLocation, useNavigate } from "react-router-dom";

function EmpSalaryDetails() {
  const [salary, setSalary] = useState([]);
  const navigate = useNavigate();
  const [n, setN] = useState(0);
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (ReactSession.get("id") === undefined) {
      navigate("/login");
    }
    fetch("https://localhost:7291/api/Salaries")
      .then((res) => res.json())
      .then((result) => {
        var list = [];
        console.log(ReactSession.get("id"));
        result.map((item) => {
          if (item.emp_id === "1") {
            list.push(item);
            console.log(item);
          }
        });
        setSalary(list);
        setN(list.length);
        setAmount(list[0].amount);
        console.log(result);
        console.log(n);
      });
  }, []);
  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <EmpSidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <h1>All Employees Details</h1>

          <Table
            style={{ width: "40%" }}
            striped
            bordered
            hover
            size="sm"
            className="table table-responsive table-striped"
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {salary.map((s, i) => (
                <tr key={i}>
                  <td>{s.date}</td>
                  <td>{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Net Pay : {n * amount}</h4>
        </div>
      </div>
    </>
  );
}

export default EmpSalaryDetails;
