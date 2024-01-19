import React from "react";
import Home from "./Home";
import Formcreate from "./Createform";
import Edit from "./Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Formcreate />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
