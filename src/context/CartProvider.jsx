import { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])

	const addToCart = item => {
		const itemExists = cartItems.find(cartItem => cartItem.id === item.id)

		if (itemExists) {
			// If item exists in cart, only update the quantity
			setCartItems(prevCartItems => prevCartItems.map(cartItem => (cartItem.id === item.id ? item : cartItem)))
		} else {
			// If item doesn't exist in cart, add it to the cart
			setCartItems(prevCartItems => [...prevCartItems, item])
		}
	}

	const removeFromCart = id => {
		const cart = cartItems.filter(item => item.id !== id)
		setCartItems(cart)
	}

	return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemsLength: cartItems.length }}>{children}</CartContext.Provider>
}

export default CartProvider
