import React from 'react';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'

function Header(){
    return (<div>
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">RICK AND MORTY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#link"></Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </div>);
    
}

export default Header;