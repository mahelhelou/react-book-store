const CartItem = ({ item, addToCart, removeFromCart }) => {
	return (
		<div className='cart-item'>
			<img src={`/books/${item.image}`} alt={item.title} className='cart-item-img' />
			<div className='cart-item-info'>
				<div>
					<div className='cart-item-book-title'>
						<b>Title: </b>
						{item.title}
					</div>
					<div className='cart-item-author'>
						<b>Author: </b>
						{item.author}
					</div>
				</div>
				<div>
					<div className='cart-item-quantity'>
						<i className='bi bi-plus-lg' onClick={() => addToCart({ ...item, quantity: item.quantity + 1 })}></i>
						<b>{item.quantity}</b>
						<i
							className='bi bi-dash-lg'
							onClick={() => {
								if (item.quantity > 1) {
									addToCart({ ...item, quantity: item.quantity - 1 })
								}
							}}
						></i>
					</div>
					<div className='cart-item-price'>${(item.price * item.quantity).toFixed(2)}</div>
					<i className='bi bi-trash-fill' onClick={() => removeFromCart(item.id)}></i>
				</div>
			</div>
		</div>
	)
}

export default CartItem
