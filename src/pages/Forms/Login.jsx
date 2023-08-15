import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Forms.css'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const formSubmitHandler = e => {
		e.preventDefault()

		if (email.trim() === '') {
			return toast.error('Email is required')
		}

		if (password.trim() === '') {
			return toast.error('Password is required')
		}

		console.log({ email, password })

		// UX: Emptying the fields after form submission
		setEmail('')
		setPassword('')
	}

	const showPasswordHandler = () => {
		setShowPassword(prev => !prev)
	}

	return (
		<div className='form-wrapper'>
			<ToastContainer />
			<h1 className='form-title'>Log in to your account</h1>
			<form onSubmit={formSubmitHandler} className='form'>
				<input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
				<input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='Password' />

				{showPassword ? <i onClick={showPasswordHandler} className='bi bi-eye-slash-fill show-password-icon'></i> : <i onClick={showPasswordHandler} className='bi bi-eye-fill show-password-icon'></i>}

				<button className='form-btn' type='submit'>
					Login
				</button>
			</form>
			<div className='form-footer'>
				Dont't have an account?{' '}
				<Link to='/register' className='forms-link'>
					Register
				</Link>
			</div>
		</div>
	)
}

export default Login
