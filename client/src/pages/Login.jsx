import Sidebar from "../Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import fetch from "cross-fetch";
import Table from "react-bootstrap/Table";
import "./Employee_Details.css";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Login.css";
import { ReactSession } from "react-client-session";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  ReactSession.setStoreType("localStorage");

  function login() {
    console.log("Inside login");
    if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == "admin"
    ) {
      console.log(email.current.value);
      console.log(password.current.value);
      ReactSession.set("id", "admin");
      navigate("/home");
    } else {
      console.log("Before fetch");
      fetch(
        "https://localhost:7291/api/Employee/" +
          email.current.value +
          "/" +
          password.current.value,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result["id"]);
          ReactSession.set("id", result["id"]);
          ReactSession.set("email", result["emp_email"]);
          navigate("/empHome");
        });
    }

    console.log("after fetch");
  }

  return (
    <>
      <div className="container login">
        <div className="text-center title1 m-0">
          <h4>Login Area</h4>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="btn btn-success px-5"
            onClick={login}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
