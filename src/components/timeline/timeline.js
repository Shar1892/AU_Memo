import {useState} from 'react';

import './timeline.css';

import timelineArr from '../../data/timeline';
import VideoPopup from '../videoPopup/videoPopup';

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
		console.log(1);
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
			<main className='timeline'>
				<h2 className='timeline__title'> Название таймлайна</h2>
				<div className='timeline__list'>
					{timelineArr.map((timeline) => (
						<div className='timeline__part' key={timeline.number}>
							<p className='timeline__part-date'>{timeline.date}</p>
							<div className='timeline__graphic'>
								<div className='timeline__graphic-head'></div>
								<div className='timeline__graphic-line'></div>
							</div>
							<div
								className='timeline__content'
								onClick={() =>
									openVideo(timeline.seriesNumber, timeline.startSecond)
								}
							>
								<h3 className='timeline__subtitle'>{timeline.name}</h3>
								<p className='timeline__text'>{timeline.discription}</p>
							</div>
						</div>
					))}
				</div>
				<div className='timeline__autors-list'>
					<p className='timeline__autor'>Автор/ы</p>
					<p className='timeline__autor'>Редактор/ы</p>
				</div>
			</main>
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
