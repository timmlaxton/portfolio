import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ContactScreen = () => {
	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>

			<Container>
				<div>
					<h1 className="email">timmlaxton@gmail.com</h1>
					<h1 className="phone">+44(0)7563143254</h1>

					<div>
						<a href={'https://www.linkedin.com/in/tim-laxton-b6b33862/'}>
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
			</Container>
		</>
	);
};

export default ContactScreen;
