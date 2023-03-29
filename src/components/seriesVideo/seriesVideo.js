import {useState} from 'react';

import './seriesVideo.css';

import Video from '../video/video';

function SeriesVideo({data}) {
	const [isPreview, setIsPreview] = useState(true);

	const hendleStartVideo = () => {
		setIsPreview(false);
	};

	return (
		<div className='seriesVideo'>
			{isPreview ? null : <Video data={data} />}
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
