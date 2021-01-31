import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormErrors from '../form-errors';
import './login-form.scss';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			formErrors: { email: '', password: '' },
			emailValid: false,
			passwordValid: false,
			formValid: false,
		};
	}

	handleUserInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	};

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		switch (fieldName) {
			case 'email':
				emailValid = value.match(
					/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
				);
				fieldValidationErrors.email = emailValid ? '' : 'Invalid email';
				break;
			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid
					? ''
					: 'Invalid format too short';
				break;
			default:
				break;
		}
		this.setState(
			{
				formErrors: fieldValidationErrors,
				emailValid: emailValid,
				passwordValid: passwordValid,
			},
			this.validateForm
		);
	}

	validateForm() {
		this.setState({
			formValid: this.state.emailValid && this.state.passwordValid,
		});
	}

	errorClass(error, value) {
		if (error.length === 0 && value.length > 0) {
			return 'complete';
		}
		return error.length === 0 ? '' : 'has-error';
	}

	render() {
		let classNames = 'login-button';
		if (this.state.formValid) {
			classNames += ' login-button-enable';
		}
		return (
			<form className='login-form'>
				<FormErrors formErrors={this.state.formErrors} />
				<label htmlFor='email'>
					<div className='label-area'>
						Email
						<span>{this.state.formErrors.email}</span>
					</div>
					<input
						className={this.errorClass(
							this.state.formErrors.email,
							this.state.email
						)}
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleUserInput}
					/>
				</label>
				<label htmlFor='password'>
					<div className='label-area'>
						Password
						<span>{this.state.formErrors.password}</span>
					</div>
					<input
						className={this.errorClass(
							this.state.formErrors.password,
							this.state.password
						)}
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleUserInput}
					/>
					<Link to='#'>Forgot your password?</Link>
				</label>
				<button type='submit' className={classNames}>
					Sign in
				</button>
			</form>
		);
	}
}

export default LoginForm;
