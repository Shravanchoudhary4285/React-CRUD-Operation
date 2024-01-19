import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  let Navigate=useNavigate()
  let [id, setid] = useState("");

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  console.log(name);
  console.log(email);
  let handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  let handleUpdate = () => {
    axios.put(`https://658d26737c48dce947389671.mockapi.io/crud/${id}`, {
      name: name,
      email: email,
    }).then(()=>{
      alert("Data Updated Successfully")
      Navigate("/")
    })
  };
  return (
    <>
      <h1>Form Update</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Edit;
