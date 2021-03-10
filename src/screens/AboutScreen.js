import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

export const AboutScreen = () => {
	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image className="about-image" src="images/tim2.jpg" fluid />
				</Col>
			</Row>
		</>
	);
};

export default AboutScreen;
