import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {UpdateProduct} from "./components/UpdateProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
