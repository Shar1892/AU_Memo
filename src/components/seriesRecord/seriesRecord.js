import './seriesRecord.css';

function SeriesRecord({data}) {
	return (
		<div className='seriesRecord'>
			<iframe
				frameBorder='0'
				className='seriesRecord__record'
				src={data.recordSrc}
				title='record'
			></iframe>
			<p className='seriesRecord__discription'>{data.discription}</p>
			<p className='seriesRecord__discription'>{`${data.autor}, ${data.year}`}</p>
		</div>
	);
}

export default SeriesRecord;
