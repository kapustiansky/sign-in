import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../login-form/';
import logo from '../../assets/logo.svg';
import './login.scss';

const Login = () => {
	return (
		<section className='login-container'>
			<img src={logo} alt='merge development' />
			<div className='login-area'>
				<div className='login-heading'>
					<h1>Sign in</h1>
					<span>
						Don’t have an Xcellerate account?
						<Link to='#'>Sign up now</Link>
					</span>
				</div>
				<LoginForm />
			</div>
			<div className='info-links'>
				<Link to='#'>Contact</Link>
				<Link to='#'>Privacy</Link>
				<Link to='#'>Terms</Link>
			</div>
		</section>
	);
};

export default Login;
