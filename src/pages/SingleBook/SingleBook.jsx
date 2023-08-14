import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import './SingleBook.css'
import { books } from '../../data/books'

import Rating from '../../components/BookSlider/Rating'
import CartContext from '../../context/CartContext'

const SingleBook = () => {
	const [qty, setQty] = useState(1)
	const { id } = useParams()
	const book = books.find(book => book.id === +id) // parseInt(id)

	const { addToCart } = useContext(CartContext)

	return (
		<div className='book'>
			<div className='book-content'>
				<img src={`/books/${book.image}`} alt={book.title} className='book-content-img' />
				<div className='book-content-info'>
					<h1 className='book-title'>{book.title}</h1>
					<div className='book-author'>
						by <span>{book.author}</span> (Author)
					</div>
					<Rating rating={book.rating} reviews={book.reviews} />
					<div className='book-add-to-cart'>
						<input className='book-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e => setQty(e.target.value)} />
						<button className='book-add-to-cart-btn' onClick={() => addToCart({ ...book, quantity: qty })}>
							<i className='bi bi-cart-plus'></i> Add To Cart
						</button>
					</div>
				</div>
			</div>
			<p className='book-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea voluptatem veniam quidem minima odio nisi vitae nam laborum repellat commodi aspernatur exercitationem eius vel, quasi, fuga, illo perspiciatis quo consequatur. Odio sint distinctio numquam?</p>

			<div className='book-icons'>
				<div className='book-icon'>
					<small>Print Length</small>
					<i className='bi bi-file-earmark-break'></i>
					<b>({book.printLength}) Pages</b>
				</div>
				<div className='book-icon'>
					<small>Language</small>
					<i className='bi bi-globe'></i>
					<b>{book.language}</b>
				</div>
				<div className='book-icon'>
					<small>Publication date</small>
					<i className='bi bi-calendar3'></i>
					<b>{book.PublicationDate}</b>
				</div>
			</div>
		</div>
	)
}

export default SingleBook
