import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import projects from '../projects';
import Project from '../components/Project';

import Footer from '../components/Footer';

const Homepage = () => {
	return (
		<>
			<main>
				<div Jumbotron className="jumbotron">
					<div className="container">
						<h1>Hello, my name is Tim Laxton, welcome to my portfolio site!</h1>
						<p></p>
						<p>
							<Button variant="primary">About Me</Button>
						</p>
					</div>
				</div>
				<div className="container-2">
					<h4 className="profile-text">
						I have been coding for almost 2 years, with the last year focussing on learning and building apps with the
						MERN stack. I am seeking a full time position in order to increase my knowledge and skills as a developer.
					</h4>
					<h4 className="homepage-language-title">Languages and Libraries:</h4>
					<div>
						<i className="fab fa-js fa-7x"></i> {''}
						<i className="fab fa-react fa-7x"></i> {''}
						<i className="fab fa-node fa-7x"></i> {''}
						<i className="fab fa-envira fa-7x"></i> {''}
						<i className="fab fa-bootstrap fa-7x"></i> {''}
					</div>
				</div>

				<div className="container-3">
					<h4 className="homepage-project-title">Projects:</h4>
					<Row>
						{projects.map((project) => (
							<Col sm={2} md={2} lg={2} xl={2}>
								<Project project={project} />
							</Col>
						))}
					</Row>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
