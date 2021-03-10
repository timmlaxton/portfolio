import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<LinkContainer to="/">
				<NavbarBrand>Tim Laxton</NavbarBrand>
			</LinkContainer>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<LinkContainer to="/projects">
						<Nav.Link>Projects</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/about">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/contact">
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
