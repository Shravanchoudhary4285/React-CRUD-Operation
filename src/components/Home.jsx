import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Home() {
  let [Data, setData] = useState([]);
  let [tabledark, settabledark] = useState("");

  let Navigate = useNavigate();
  let Createform = () => {
    Navigate("/create");
  };

  let Getdata = () => {
    axios
      .get("https://658d26737c48dce947389671.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Getdata();
  }, []);

  let handleEdit = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  let handleDelete = (id) => {
    axios
      .delete(`https://658d26737c48dce947389671.mockapi.io/crud/${id}`)
      .then(() => {
        Getdata();
        alert("Data Deleted Successfully");
      });
  };

  let toggleClick = () => {
    if (tabledark === "table-dark") {
      settabledark("");
    } else {
      settabledark("table-dark");
    }
  };

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input m-1"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleClick}
        />
      </div>

      <div className="centres">
        <h2>Crud Operation</h2>
        <Link to="/create">
          <button className="btn btn-success m-4" onClick={Createform}>
            Create
          </button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((result) => (
            <tr key={result.id}>
              <th scope="row">{result.id}</th>
              <td>{result.name}</td>
              <td>{result.email}</td>
              <td>
                <Link to="/edit">
                  <button
                    className="btn btn-primary m-1"
                    onClick={() =>
                      handleEdit(result.id, result.name, result.email)
                    }
                  >
                    Edit
                  </button>
                </Link>

                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(result.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
