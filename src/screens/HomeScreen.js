import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import projects from '../projects';
import Project from '../components/Project';

import Footer from '../components/Footer';

const Homepage = () => {
	return (
		<>
			<main>
				<div Jumbotron className="jumbotron">
					<div className="container-fluid">
						<h1>Hello, my name is Tim Laxton, welcome to my portfolio site!</h1>
					</div>
				</div>
				<Container className="mx-auto mt-5">
					<Row>
						<Col md={3}>
							<Image className="home-image" src="images/tim-3.jpg" fluid />
						</Col>
						<Col md={9} className="profile-text text-center py-3">
							<p>
								I have been coding and building my own apps for the last two years, and developed a good knowledge of
								HTML, CSS and JavaScript, React and Bootstrap. On a personal level, I am highly-motivated, result
								oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am
								fully aware of the latest Front-end Development Tools.{' '}
							</p>

							<p>
								In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and
								get along with others when working in a group setting. I also have the ability to work independently
								while staying on schedule and meeting those tight deadlines. Below is a list of my current technical
								skills.
							</p>
						</Col>
					</Row>
				</Container>
				<Container className="mx-auto mb-5">
					<h4 className="homepage-language-title">Languages and Libraries:</h4>
					<div className="tools-icons">
						<i className="fab fa-js fa-7x"></i>
						<i className="fab fa-react fa-7x"></i>
						<i className="fab fa-node fa-7x"></i>
						<i className="fab fa-envira fa-7x"></i>
						<i className="fab fa-bootstrap fa-7x"></i>
					</div>
				</Container>

				<Container className="mx-auto my-5">
					<h4 className="homepage-project-title">Projects:</h4>
					<Row>
						{projects.map((project) => (
							<Col md={6} lg={6} xl={4}>
								<Project project={project} />
							</Col>
						))}
					</Row>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
