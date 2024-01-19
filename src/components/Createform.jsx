import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Createform() {
  let Navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://658d26737c48dce947389671.mockapi.io/crud", {
        name: name,
        email: email,
      })
      .then(() => {
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Form Create</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default Createform;
