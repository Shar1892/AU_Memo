import './seriesVideo.css';

function SeriesVideo({data}) {
	return (
		<div className='seriesVideo'>
			<iframe
				id='ytplayer'
				type='text/html'
				src={data.videoSrc}
				frameBorder='0'
				allowFullScreen
				className='seriesVideo__video'
				title={data.name}
			></iframe>
			<p className='seriesVideo__name'>{data.name}</p>
			<p className='seriesVideo__autor'>{`${data.autor}, ${data.date}`}</p>
			<p className='seriesVideo__source'>{data.source}</p>
		</div>
	);
}

export default SeriesVideo;
