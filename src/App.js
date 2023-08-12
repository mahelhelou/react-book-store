import './App.css'

// Components
import Header from './components/Header'
import Slider from './components/Slider'
import Services from './components/Services'
import BookSlider from './components/BookSlider'

import { books } from './data/books'

const App = () => {
	return (
		<>
			<Header />
			<Slider />
			<Services />
			<BookSlider books={books} />
		</>
	)
}

export default App
