const OrderSummary = ({ totalPrice }) => {
	return (
		<div className='cart-order-summary'>
			<h5 className='order-summary-title'>ORDER SUMMARY</h5>
			<div className='order-summary-item'>
				<span>Subtotal</span>
				<span>${totalPrice}</span>
			</div>
			<div className='order-summary-item'>
				<span>Shipping Cost</span>
				<span>0</span>
			</div>
			<div className='order-summary-item'>
				<span>Discount</span>
				<span>0</span>
			</div>
			<div className='order-summary-item'>
				<strong>Total</strong>
				<span>${totalPrice}</span>
			</div>
		</div>
	)
}

export default OrderSummary
