import React from 'react';

import './videoPopup.css';

import seriesArr from '../../data/series';

const VideoPopup = ({
	isOpen,
	onClose,
	currentSeriesNumber,
	currentSeriesSecond,
}) => {
	const series = seriesArr.find((item) => {
		return item.number === currentSeriesNumber;
	});

	return (
		<div
			className={`video-popup ${isOpen ? 'video-popup_visible' : ''}`}
			onClick={(evt) => {
				if (evt.target === evt.currentTarget) {
					onClose();
				}
				if (evt.target.classList.contains('video-popup_close-button')) {
					onClose();
				}
			}}
		>
			<div className='video-popup__container'>
				<button className='video-popup_close-button'></button>
				<iframe
					id='ytplayer'
					type='text/html'
					src={`${series.videoSrc}?${
						currentSeriesSecond ? 'autoplay=1&' : ''
					}start=${currentSeriesSecond}`}
					frameBorder='0'
					allowFullScreen
					allow='autoplay'
					className='video-popup__video'
					title='video'
				></iframe>
			</div>
		</div>
	);
};

export default VideoPopup;
