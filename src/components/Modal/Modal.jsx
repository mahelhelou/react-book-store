import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'

import Rating from '../BookSlider/Rating'
import CartContext from '../../context/CartContext'

const Modal = ({ setOpenModal, bookData }) => {
	const [qty, setQty] = useState(1)
	const { addToCart } = useContext(CartContext)

	return (
		<div className='modal-container' onClick={() => setOpenModal(false)}>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<i className='bi bi-x-circle-fill modal-icon' onClick={() => setOpenModal(false)}></i>
				<div className='modal-content-img'>
					<img src={`/books/${bookData.image}`} alt={bookData.title} />
				</div>
				<div className='modal-content-info'>
					<h5 className='modal-content-info-title'>{bookData.title}</h5>
					<div className='modal-content-info-stock'>
						<b>Status:</b> {bookData.inStock ? 'In stock' : 'Out of stock'}
					</div>
					<Rating rating={bookData.rating} reviews={bookData.reviews} />
					<div className='modal-content-info-author'>
						<b>Author: </b>
						{bookData.author}
					</div>
					<div className='modal-content-info-price'>
						<b>Price: </b>${bookData.price}
					</div>
					<div className='modal-add-to-cart'>
						<input className='modal-add-to-cart-input' type='number' min='1' max='100' value={qty} onChange={e => setQty(e.target.value)} />
						<button className='modal-add-to-cart-btn' onClick={() => addToCart({ ...bookData, quantity: qty })}>
							<i className='bi bi-cart-plus'></i>
							Add To Cart
						</button>
					</div>
					<Link to={`/books/${bookData.id}`} className='modal-content-info-link'>
						See More Details
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Modal
