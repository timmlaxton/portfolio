import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Project from '../components/Project';
import projects from '../projects';

const ProjectScreen = () => {
	return (
		<>
			<h1 className="title">Projects</h1>
			<Row>
				{projects.map((project) => (
					<Col sm={6} md={6} lg={6} xl={4}>
						<Project project={project} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default ProjectScreen;
