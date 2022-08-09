import './seriesText.css';

function SeriesText({data}) {
	return (
		<div className='seriesText'>
			<p className='seriesText__content'>{data.content}</p>
		</div>
	);
}

export default SeriesText;
