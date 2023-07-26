import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default function Login({ setOpenModal }) {
// toggle link to slide from login to signin and the other way around
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }



  // toggle button to show password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  const[fname ,setFname] = useState('');
  const[lname ,setLname] = useState('');
  const[email ,setEmail] = useState('');
  const[password ,setPassword] = useState('');
      
  
  const handleSubmitLogin = e => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          //window.location.href = "./userDetails";
        } else {
          alert("login unsuccessful, email already in use");
        }
      });
  }
  const handleSubmitSignIn = e => {
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

  if (authMode === "signin") {
    return (
      <div className="modalBackground">
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={ handleSubmitLogin  }>
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
          <h3 className="Auth-form-title">Login</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
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
  
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
  
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="#toSignUp" onClick={changeAuthMode}>Sign Up</a>
          </p>
          </div>
                
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="modalBackground">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={ handleSubmitSignIn }>
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
            Already registered <a href="#toSignIn" onClick={changeAuthMode}>sign in?</a>
          </p>
          </div>
      
    </form>
      </div>
    </div>
    
  );



  
}