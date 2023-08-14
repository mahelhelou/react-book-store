import { useContext } from 'react'
import './Cart.css'
// import { cartInfo } from '../../data/cart' // Dummy data

import CartItem from './CartItem'
import OrderSummary from './OrderSummary'
import CartContext from '../../context/CartContext'

const Cart = () => {
	const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
	// const cartInfo = cartItems // Do this if you want to keep the same code as using dummy data

	// const totalPrice = cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
	const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)

	return (
		<div className='cart'>
			<h1 className='cart-title'>Your Shopping Cart</h1>
			<div className='cart-wrapper'>
				<div className='cart-items'>
					{/* Case: Dummy data */}
					{/* {cartInfo.map(item > ...)} */}
					{cartItems.map(item => (
						<CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
					))}
				</div>
				<OrderSummary totalPrice={totalPrice} />
			</div>
		</div>
	)
}

export default Cart
