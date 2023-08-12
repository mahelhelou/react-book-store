import { useState } from 'react'

import './BookSlider.css'

const BookSlider = ({ books }) => {
	const [slideIndex, setSlideIndex] = useState(0)

	const handleClick = dir => {
		if (dir === 'left') {
			setSlideIndex(slideIndex - 1)
		} else {
			setSlideIndex(slideIndex + 1)
		}
	}

	return (
		<div className='book-slider-container'>
			{slideIndex >= 0 && <i onClick={() => handleClick('left')} className='bi bi-chevron-left book-slider-arrow-left'></i>}
			<div style={{ transform: `translateX(${slideIndex * -340}px)` }} className='book-slider-wrapper'>
				{books.map(book => (
					<div key={book.id} className='book-slide-item'>
						<img src={`../books/${book.image}`} alt={book.title} className='book-slide-item-img' />
						<h3 className='book-slide-item-title'>{book.title}</h3>
						<div className='book-slider-item-price'>${book.price}</div>
						<div className='book-slider-icons-wrapper'>
							<i className='bi bi-eye-fill'></i>
							<i className='bi bi-cart-plus'></i>
						</div>
					</div>
				))}
			</div>
			{slideIndex <= books.length - 1 && <i onClick={() => handleClick('right')} className='bi bi-chevron-right book-slider-arrow-right'></i>}
		</div>
	)
}

export default BookSlider
