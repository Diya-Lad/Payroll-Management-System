import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";
import Add_Employee from "../pages/Add_Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      ReactSession.get("id") === undefined &&
      ReactSession.get("id") != "admin"
    ) {
      navigate("/login");
    }
  }, []);

  function onClickRedirection(link) {
    var str = "/" + link;
    navigate(str);
  }

  return (
    <>
      <div className="row g-0" style={{ height: 657 }}>
        <div className="col-3 p-0 sidebar">
          <Sidebar />
        </div>
        <div className="col-8 right" style={{ width: 1130, left: 0 }}>
          <div className="container" style={{ margin: "1%" }}>
            <div className="col">
              <Button
                className="buttons"
                style={{ marginLeft: "4%", marginTop: "5%" }}
                onClick={() => onClickRedirection("addEmployee")}
              >
                <span className="material-symbols-outlined icn">
                  person_add
                </span>
                <p>Add Employee</p>
              </Button>
              <Button
                className="buttons"
                style={{ marginLeft: "4%", marginTop: "5%" }}
                onClick={() => onClickRedirection("employeeReport")}
              >
                <span className="icn material-symbols-outlined">summarize</span>
                <p>Employee Report</p>
              </Button>
              <Button
                className="buttons"
                style={{ marginLeft: "4%", marginTop: "5%" }}
                onClick={() => onClickRedirection("employeeDetails")}
              >
                <span class="icn material-symbols-outlined">info</span>
                <p>Employee Details</p>
              </Button>
            </div>

            <div className="col">
              <Button
                className="buttons"
                style={{ marginLeft: "4%", marginTop: "5%" }}
                onClick={() => onClickRedirection("salary")}
              >
                <span class="icn material-symbols-outlined">
                  currency_exchange
                </span>
                <p>Salary</p>
              </Button>
              <Button
                className="buttons"
                style={{ marginLeft: "4%", marginTop: "5%" }}
                onClick={() => onClickRedirection("salaryReport")}
              >
                <span class="icn material-symbols-outlined">price_change</span>
                <p>Salary Report</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
