import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth()
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
                            {user?.email ?
                                <Button className="btn-sm" onClick={logOut} variant="light"> LogOut </Button>
                                : <Nav.Link as={Link} to="/login"> LogIn</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed In As: <a href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;