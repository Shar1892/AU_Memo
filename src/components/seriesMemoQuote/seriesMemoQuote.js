import './seriesMemoQuote.css';

function SeriesMemoQuote({data}) {
	return (
		<div className='seriesMemoQuote'>
			<div className='seriesMemoQuote__title-image'></div>
			<p className='seriesMemoQuote__text'>{data.text}</p>
			<div className='seriesMemoQuote__autor-container'>
				<div className='seriesMemoQuote__line'></div>
				<p className='seriesMemoQuote__autor'>{data.autor}</p>
			</div>
		</div>
	);
}

export default SeriesMemoQuote;
