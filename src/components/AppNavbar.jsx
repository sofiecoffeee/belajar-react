import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-primary bg-gradient" variant="dark">
      <Container>
        <Navbar.Brand href="#home">POS PPKD JAKPUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
          </Nav>
          <nav className="align-items-center">
            <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
