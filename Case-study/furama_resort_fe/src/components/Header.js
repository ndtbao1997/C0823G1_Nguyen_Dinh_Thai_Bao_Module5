import React, { useState } from 'react';
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getVilla} from "../redux/action/villa";
import {getHome} from "../redux/action/home";
import {getRoom} from "../redux/action/room";
export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRoom = () => {
        dispatch(getRoom());
        navigate(`/room`);
    }
    const handleHouse = () => {
        dispatch(getHome());
        navigate(`/house`);
    }
    const handleVilla = () => {
        dispatch(getVilla());
        navigate(`/villa`);
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control style={{width:"45%"}}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"   className="me-2">Tìm kiếm</Button>
                            <Button variant="outline-success" onClick={() => handleLogin()}>Đăng nhập</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div
                id='intro-example'
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')" }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Chào mừng bạn đến với Furama Resort</h1>
                            <h5 className='mb-4'>298, Trần Hưng Đạo, Thành phố Đà Nẵng</h5>
                            <MDBBtn className='mx-2' color='secondary' size="lg" onClick={() => handleVilla()}>
                                Villa
                            </MDBBtn>
                            <MDBBtn className='mx-2' color='secondary' size="lg" onClick={() => handleHouse()}>
                                House
                            </MDBBtn>
                            <MDBBtn className='mx-2' color='secondary' size="lg" onClick={() => handleRoom()}>
                                Room
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </header>
    );
}