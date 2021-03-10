import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import ProScreen from './screens/ProScreen';
import './index.css';

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Route path="/" component={HomeScreen} exact />
				<Route path="/projects" component={ProjectScreen} />
				<Route path="/project/:id" component={ProScreen} />
			</main>
		</Router>
	);
};

export default App;
