import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/slider';
import Login from './components/login';
import './index.css';

const App = () => {
	return (
		<Router>
			<main>
				<Slider />
				<Login />
			</main>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
