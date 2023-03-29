import './video.css';

function Video({data}) {
	return (
		<iframe
			id='ytplayer'
			type='text/html'
			src={data.videoSrc}
			frameBorder='0'
			allowFullScreen
			className='video'
			title={data.name}
			allow='autoplay'
		></iframe>
	);
}

export default Video;
