import { useState, useContext } from 'react'

import './BookSlider.css'
import Rating from './Rating'
import Modal from '../Modal'

import CartContext from '../../context/CartContext'

const BookSlider = ({ books }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const [openModal, setOpenModal] = useState(false)
	const [bookData, setBookData] = useState(null)

	const { addToCart } = useContext(CartContext)

	const handleClick = dir => {
		if (dir === 'left') {
			setSlideIndex(slideIndex - 1)
		} else {
			setSlideIndex(slideIndex + 1)
		}
	}

	const handleOpenModal = book => {
		setOpenModal(true)
		setBookData(book)
	}

	return (
		<div className='book-slider-container'>
			{slideIndex >= 0 && <i onClick={() => handleClick('left')} className='bi bi-chevron-left book-slider-arrow-left'></i>}
			<div style={{ transform: `translateX(${slideIndex * -340}px)` }} className='book-slider-wrapper'>
				{books.map(book => (
					<div key={book.id} className='book-slide-item'>
						<img src={`../books/${book.image}`} alt={book.title} className='book-slide-item-img' />
						<h3 className='book-slide-item-title'>{book.title}</h3>
						<Rating rating={book.rating} reviews={book.reviews} />
						<div className='book-slider-item-price'>${book.price}</div>
						<div className='book-slider-icons-wrapper'>
							<i className='bi bi-eye-fill' onClick={() => handleOpenModal(book)}></i>
							<i className='bi bi-cart-plus' onClick={() => addToCart({ ...book, quantity: 1 })}></i>
						</div>
					</div>
				))}
			</div>
			{slideIndex <= books.length - 1 && <i onClick={() => handleClick('right')} className='bi bi-chevron-right book-slider-arrow-right'></i>}

			{openModal && <Modal setOpenModal={setOpenModal} bookData={bookData} />}
		</div>
	)
}

export default BookSlider
