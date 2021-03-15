import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
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
					</div>
				</div>
				<Image className="home-image" src="images/tim-3.jpg" fluid />
				<div className="container-2">
					<p className="profile-text"></p>
				</div>
				<br />
				<div className="container-3">
					<h4 className="homepage-language-title">Languages and Libraries:</h4>
					<i className="fab fa-js fa-7x"></i> {''}
					<i className="fab fa-react fa-7x"></i> {''}
					<i className="fab fa-node fa-7x"></i> {''}
					<i className="fab fa-envira fa-7x"></i> {''}
					<i className="fab fa-bootstrap fa-7x"></i> {''}
				</div>

				<div className="container-4">
					<h4 className="homepage-project-title">Projects:</h4>
					<Row>
						{projects.map((project) => (
							<Col sm={2} md={2} lg={5} xl={2}>
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
