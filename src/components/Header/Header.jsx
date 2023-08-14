import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import CartContext from '../../context/CartContext'

const Header = () => {
	const [toggle, setToggle] = useState(false)
	const { cartItemsLength } = useContext(CartContext)

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
				<Link to='/login' className='header-top-link'>
					<i className='bi bi-person-fill'></i> Login
				</Link>
			</div>

			<div className='header-middle'>
				<Link to='/' className='header-middle-logo'>
					<b>Book</b>
					<i className='bi bi-book'></i>
					<b>Store</b>
				</Link>
				<div className='header-middle-search-box'>
					<input className='header-middle-search-input' type='search' placeholder='Search in book store...' />
					<i className='bi bi-search'></i>
				</div>
				<Link to='/cart' className='header-middle-cart-wrapper'>
					{cartItemsLength && <b className='cart-notification'>{cartItemsLength}</b>}
					<i className='bi bi-cart2'></i>
				</Link>
			</div>

			<nav style={{ left: toggle && '0' }} className='navbar'>
				<ul className='navbar-links'>
					<Link to='/' className='navbar-link' onClick={() => setToggle(false)}>
						Home
					</Link>
					<Link to='/authors' className='navbar-link' onClick={() => setToggle(false)}>
						Authors
					</Link>
					<Link to='/about' className='navbar-link' onClick={() => setToggle(false)}>
						About Us
					</Link>
					<Link to='/contact' className='navbar-link' onClick={() => setToggle(false)}>
						Contact Us
					</Link>
					<Link to='/register' className='navbar-link' onClick={() => setToggle(false)}>
						Register
					</Link>
				</ul>
			</nav>
		</div>
	)
}

export default Header
