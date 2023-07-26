import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function SignUp({ setOpenModal }) {
  // toggle button to show password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const[fname ,setFname] = useState('');
  const[lname ,setLname] = useState('');
  const[email ,setEmail] = useState('');
  const[password ,setPassword] = useState('');
    
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if(data.status === "ok") {
          alert("Sign Up Successful");
        } else {
          alert("Sign Up Unsuccessful");
        }
      });
  }
  return (
    <div className="modalBackground">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={ handleSubmit}>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 buttonIn">
            <label>Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button-eye" onClick={togglePassword}><FontAwesomeIcon icon={faEye} /></button>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
          </div>
      
    </form>
      </div>
    </div>
    
  );
}