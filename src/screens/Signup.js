import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.location,
      }),
    });
    const jsonData = await response.json();
    console.log(jsonData);
    if (jsonData.success) {
      alert("registered successfully");
    } else {
      alert("enter valid credentials");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => onChange(e)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLocation" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLocation"
            name="location"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already A User
        </Link>
      </form>
    </>
  );
}
