import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

const Homepage = () => {
	return (
		<>
			<main>
				<div Jumbotron className="jumbotron">
					<div className="container">
						<h1>Hello, world!</h1>
						<p>
							<h4>
								This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
								content or information.
							</h4>
						</p>
						<p>
							<Button variant="primary">Learn more</Button>
						</p>
					</div>
				</div>
				<div className="container"></div>
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
