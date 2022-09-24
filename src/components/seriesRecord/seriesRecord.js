import './seriesRecord.css';

function SeriesRecord({data}) {
	return (
		<div className='seriesRecord'>
			<audio
				className='seriesRecord__record'
				src={data.recordSrc}
				type='audio/mp3'
				controls
			></audio>
			<p className='seriesRecord__discription'>{data.discription}</p>
			<p className='seriesRecord__discription'>{`${data.autor}, ${data.year}`}</p>
		</div>
	);
}

export default SeriesRecord;
