import './seriesIllustration.css';

function SeriesIllustration({data}) {
	return (
		<div className='seriesIllustration'>
			<img
				className='seriesIllustration__Illustration'
				src={data.src}
				alt={data.type}
			></img>
		</div>
	);
}

export default SeriesIllustration;
