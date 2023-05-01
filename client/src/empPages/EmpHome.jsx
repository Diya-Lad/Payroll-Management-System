import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import EmpSidebar from "./EmpSidebar";
import "./EmpHome.css";

function EmpHome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (ReactSession.get("id") === undefined) {
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
          <EmpSidebar />
        </div>
        <div className="col-8" style={{ width: 1133 }}>
          <Button
            className="buttons"
            style={{ marginLeft: "4%", marginTop: "5%" }}
            onClick={() => onClickRedirection("empDetails")}
          >
            <span class="icn material-symbols-outlined">info</span>
            <p>Employee Details</p>
          </Button>
          <Button
            className="buttons"
            style={{ marginLeft: "4%", marginTop: "5%" }}
            onClick={() => onClickRedirection("empSalReport")}
          >
            <span className="icn material-symbols-outlined">summarize</span>
            <p>Salary Details</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default EmpHome;
