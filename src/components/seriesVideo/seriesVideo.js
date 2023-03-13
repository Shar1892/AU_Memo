import {useState} from 'react';

import './seriesVideo.css';

function SeriesVideo({data}) {
	const [isPreview, setIsPreview] = useState(true);

	const hendleStartVideo = () => {
		setIsPreview(false);
	};

	return (
		<div className='seriesVideo'>
			<iframe
				id='ytplayer'
				type='text/html'
				src={data.videoSrc}
				frameBorder='0'
				allowFullScreen
				className={`seriesVideo__video ${
					isPreview ? 'seriesVideo__video_invisible' : ''
				}`}
				title={data.name}
			></iframe>
			<img
				className={`seriesVideo__preview ${
					isPreview ? '' : 'seriesVideo__preview_invisible'
				}`}
				src={data.preview}
				alt={data.name}
				onClick={hendleStartVideo}
			></img>
			<p className='seriesVideo__name'>{data.name}</p>
			{data.autor && (
				<p className='seriesVideo__autor'>{`${data.autor}, ${data.date}`}</p>
			)}
			{data.source && <p className='seriesVideo__source'>{data.source}</p>}
		</div>
	);
}

export default SeriesVideo;
