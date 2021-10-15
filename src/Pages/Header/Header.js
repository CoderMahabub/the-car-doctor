import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>

                    <Nav className="mx-auto">
                        <Navbar.Brand href="#home">
                            <Link to="/home">
                                <img
                                    width="60%"
                                    src={logo}
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/home#experts">Our Experts</Nav.Link>
                            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a href="#login"> Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;