import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Authors from './pages/Authors'
import Contact from './pages/Contact'
import Register from './pages/Forms/Register'
import Login from './pages/Forms/Login'
import Cart from './pages/Cart'
import SingleBook from './pages/SingleBook'
import Blog from './pages/Blog'

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/authors' element={<Authors />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/books/:id' element={<SingleBook />} />
				<Route path='/blog' element={<Blog />} />
			</Routes>

			<Footer />
		</Router>
	)
}

export default App
