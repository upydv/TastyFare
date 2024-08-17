import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {useNavigate} from 'react-router-dom'


// import Home from './Home';
const TestNavBar = () => {
  const navigate=useNavigate();
  const handelLogout=()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (
    <Navbar expand="lg" className=" bg-success navbar-dark ">
      <Container fluid>
        <Navbar.Brand href="#home">TastyFare</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='active fs-5'>Home</Nav.Link>
            {
            (localStorage.getItem("authToken"))?<Nav.Link href="#home" className=' btn active fs-5'>My orders </Nav.Link>:""
          }
          </Nav>
          

          <Nav>
          {
            (!localStorage.getItem("authToken"))?
            <nav className='d-flex'>
            <Nav.Link href="./login" className='btn bg-white text-success mx-1'>Login</Nav.Link>
            <Nav.Link href="./createuser" className='btn bg-white text-success mx-1'>Signup</Nav.Link>
            </nav>
            :<Nav className='d-flex'>
            
            <Nav.Link href="./login" className='btn bg-white text-success mx-1' onClick={handelLogout}>My Cart</Nav.Link>
            <Nav.Link href="./login" className='btn bg-white text-danger mx-1' onClick={handelLogout}>Logout</Nav.Link>
            </Nav>
          }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TestNavBar;
