import './seriesDocument.css';

function SeriesDocument({data}) {
	return (
		<div className='seriesDocument'>
			<p className='seriesDocument__title'>Документ</p>
			<p className='seriesDocument__name'>{data.name}</p>
			<p className='seriesDocument__text'>{data.text}</p>
		</div>
	);
}

export default SeriesDocument;
