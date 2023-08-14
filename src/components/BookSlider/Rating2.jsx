const Rating = ({ rating, reviews }) => {
	return (
		<div className='rating'>
			
			<span>{rating}</span>
			<span>({reviews} reviews)</span>
		</div>
	)
}

export default Rating
