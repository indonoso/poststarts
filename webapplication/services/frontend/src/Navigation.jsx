import React from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Postcards Dataset</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/search">Search</Nav.Link>

                        <NavDropdown title="Data Analysis" id="basic-nav-dropdown">

                            <NavDropdown.Item as={Link} to="/exploratory_analysis">
                                Exploratory Analysis
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/geo_data">
                                Geo Spatial Data
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tourism_analysis">
                                Tourism analysis
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;