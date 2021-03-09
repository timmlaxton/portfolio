import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer classname="bg-light text-center text-lg-start">
			<Container className="p-4">
				<Row>
					<Col className="text-center py-3">Copyright &copy; TimLaxton</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
