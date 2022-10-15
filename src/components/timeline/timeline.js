/* eslint-disable jsx-a11y/img-redundant-alt */
import {useState} from 'react';
//import HorizontalScroll from 'react-scroll-horizontal';

import './timeline.css';

//import TimelinePart from '../timelinePart/timelinePart';
import TimelineYear from '../timelineYear/timelineYear';

//import headerImage from '../../image/timelineHeaderImage.jpg';

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

// <TimelinePart key={i} data={timeline} openVideo={openVideo} />

/*

<div className='timeline__header'>
					<p className='timeline__pretitle'>Спецпроект</p>
					<h2 className='timeline__title'>Мемориал. Ликвидация</h2>
					<img
						className='timeline__header-image'
						src={headerImage}
						alt='header image'
					></img>
					<p className='timeline__subtitle'>
						Как за 10 лет уничтожили старейшую правозащитную организацию России
						«Международный Мемориал»
					</p>
				</div>
				<div className='timeline__list-container'>
					<HorizontalScroll className='timeline__list' reverseScroll={true}>
						{timelineArr.map((timeline) => (
							<TimelinePart
								key={timeline.num}
								data={timeline}
								openVideo={openVideo}
							/>
						))}
						<div className='timeline__empty-block'></div>
					</HorizontalScroll>
				</div>
				<div className='timeline__autors-list'>
					<p className='timeline__autor'>Автор/ы</p>
					<p className='timeline__autor'>Редактор/ы</p>
				</div>

*/
