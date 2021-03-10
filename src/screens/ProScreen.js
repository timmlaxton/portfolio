import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import projects from '../projects';

const ProScreen = ({ match }) => {
	const project = projects.find((p) => p._id === match.params.id);

	return (
		<>
			<Link className="btn btn-light my-3" to="/projects">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image className="image" src={project.image} alt={project.name} fluid />
				</Col>
				<Col md={3} className="project-row">
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h4>{project.name}</h4>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{project.description}</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<p>{project.features}</p>
						</ListGroup.Item>
						<ListGroup.Item>{project.link}</ListGroup.Item>
						<ListGroup.Item>{project.git}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default ProScreen;
