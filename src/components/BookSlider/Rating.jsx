const Rating = ({ rating, reviews }) => {
	const maxStars = 5
	const fullStars = Math.floor(rating)
	const hasHalfStar = rating % 1 !== 0
	const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0)

	const starElements = []

	for (let i = 0; i < fullStars; i++) {
		starElements.push(<i key={`full-star-${i}`} className='bi bi-star-fill'></i>)
	}

	if (hasHalfStar) {
		starElements.push(<i key='half-star' className='bi bi-star-half'></i>)
	}

	for (let i = 0; i < emptyStars; i++) {
		starElements.push(<i key={`empty-star-${i}`} className='bi bi-star'></i>)
	}

	return (
		<div className='rating'>
			{starElements}
			<span>{rating}</span>
			<span>({reviews} reviews)</span>
		</div>
	)
}

export default Rating
