import {useState} from 'react';

import './timeline.css';

import TimelineYear from '../timelineYear/timelineYear';

import timelineArr from '../../data/timeline';
import SeparatorLine from '../separatorLine/separatorLine';
import VideoPopup from '../videoPopup/videoPopup';

import timelineImage from '../../image/firstSeriesHeader.jpg';

function Timeline() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const [currentSeriesNumber, setCurrentSeriesNumber] = useState(1);
	const [currentSeriesSecond, setCurrentSeriesSecond] = useState(0);

	const setEventListeners = () => {
		document.addEventListener('keydown', handleEscClose);
	};

	const openVideo = (numberSeries, second) => {
		setIsPopupOpen(true);
		setCurrentSeriesNumber(numberSeries);
		setCurrentSeriesSecond(second);
		setEventListeners();
	};

	const handleEscClose = (evt) => {
		if (evt.key === 'Escape') {
			popupClose();
		}
	};

	const popupClose = () => {
		setIsPopupOpen(false);
		setCurrentSeriesSecond(0);
		document.removeEventListener('keydown', handleEscClose);
	};

	return (
		<>
			<section className='timeline'>
				<SeparatorLine />
				<img
					src={timelineImage}
					className='timeline__image'
					alt='Картинка таймлайна'
				></img>
				{timelineArr.map((timeline, i) => (
					<TimelineYear key={i} data={timeline} openVideo={openVideo} />
				))}
			</section>
			<VideoPopup
				isOpen={isPopupOpen}
				onClose={popupClose}
				currentSeriesNumber={currentSeriesNumber}
				currentSeriesSecond={currentSeriesSecond}
			/>
		</>
	);
}

export default Timeline;

/*

	{timelineArr.map((timeline, i) => (
					<TimelineYear key={i} data={timeline} openVideo={openVideo} />
				))}

*/

/*

	<VideoPopup
				isOpen={isPopupOpen}
				onClose={popupClose}
				currentSeriesNumber={currentSeriesNumber}
				currentSeriesSecond={currentSeriesSecond}
			/>

*/
