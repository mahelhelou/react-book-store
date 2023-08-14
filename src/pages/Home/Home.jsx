import Slider from '../../components/Slider'
import Services from '../../components/Services'
import Heading from '../../components/Heading'
import BookSlider from '../../components/BookSlider'

import { books } from '../../data/books'

const Home = () => {
	return (
		<>
			<Slider />
			<Services />
			<Heading title='Most Gifted' />
			<BookSlider books={books} />
			<Heading title='Best Selling' />
			<BookSlider books={books} />
			<Heading title='Most Wished For...' />
			<BookSlider books={books} />
		</>
	)
}

export default Home
