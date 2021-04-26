import React from 'react'
import{Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Nav.css'
function Navigation() {
    return (
        <div>
        
         <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand ><img src="/image/logo.svg" className="logo" alt=""/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav bg">
    <Nav className="ml-auto">
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">Career</Nav.Link>
      <Nav.Link href="#pricing">Departments</Nav.Link>
    
    </Nav>

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
