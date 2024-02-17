import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { User } from "./components/User";
import "./App.css";
import { Employee } from "./components/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/user/:userEmail" element={<User />}></Route>
        <Route path="/user/:userEmail/:index" element={<Employee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
