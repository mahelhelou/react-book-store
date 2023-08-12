import { useState } from 'react'
import './Header.css'

const Header = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className='header'>
			<div className='header-top'>
				<div className='header-top-menu' onClick={() => setToggle(prev => !prev)}>
					{toggle ? <i className='bi bi-x'></i> : <i className='bi bi-list'></i>}
				</div>
				<div className='header-top-phone'>
					<i className='bi bi-telephone'></i> 123-456-789
				</div>
				<div className='header-top-text'>Welcome to Book Store</div>
				<div className='header-top-a'>
					<i className='bi bi-person-fill'></i> Login
				</div>
			</div>

			<div className='header-middle'>
				<a href='/' className='header-middle-logo'>
					<b>Book</b>
					<i className='bi bi-book'></i>
					<b>Store</b>
				</a>
				<div className='header-middle-search-box'>
					<input className='header-middle-search-input' type='search' placeholder='Search in book store...' />
					<i className='bi bi-search'></i>
				</div>
				<div className='header-middle-cart-wrapper'>
					<i className='bi bi-cart2'></i>
				</div>
			</div>

			<nav style={{ left: toggle && '0' }} className='navbar'>
				<ul className='navbar-links'>
					<li onClick={() => setToggle(false)} className='navbar-li'>
						Home
					</li>
					<li onClick={() => setToggle(false)} className='navbar-li'>
						Authors
					</li>
					<li onClick={() => setToggle(false)} className='navbar-li'>
						About Us
					</li>
					<li onClick={() => setToggle(false)} className='navbar-li'>
						Contact Us
					</li>
					<li onClick={() => setToggle(false)} className='navbar-li'>
						Register
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
