import './seriesText.css';

function SeriesText({data}) {
	return (
		<div className='seriesText'>
			<audio src={data.recordSrc} type='audio/mp3' loop controls></audio>
			<p className='seriesText__content'>{data.content}</p>
		</div>
	);
}

export default SeriesText;
