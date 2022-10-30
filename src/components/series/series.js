/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import {useEffect, useState} from 'react';

import './series.css';

import Part from '../part/part';
import SeparatorLine from '../separatorLine/separatorLine';
import PopupReference from '../popupReference/popupReference';

function Series({seriesNumber, changeSeriesNumber, seriesArr}) {
	let windowWidth = window.innerWidth;

	const [isWide, setIsWide] = useState(() => {
		if (windowWidth > 425) {
			return true;
		} else {
			return false;
		}
	});

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const [referenceData, setReferenceData] = useState({});

	const setEventListeners = () => {
		document.addEventListener('keydown', handleEscClose);
	};

	const handlePopupOpen = (reference) => {
		setIsPopupOpen(true);
		setReferenceData(reference);
		setEventListeners();
	};

	const popupClose = () => {
		setIsPopupOpen(false);
		document.removeEventListener('keydown', handleEscClose);
	};

	const handleEscClose = (evt) => {
		if (evt.key === 'Escape') {
			popupClose();
		}
	};

	const series = seriesArr.find((item) => {
		return item.number === seriesNumber;
	});

	const goNextSeries = () => {
		if (series.number < seriesArr.length) {
			changeSeriesNumber(series.number + 1);
		}
	};

	const goPreviousSeries = () => {
		if (series.number > 1) {
			changeSeriesNumber(series.number - 1);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [seriesNumber]);

	return (
		<main className='series'>
			<img
				className='series__main-image'
				src={series.mainImage}
				alt={series.title}
			></img>
			<div className='series__header'>
				<SeparatorLine />
				<div className='series__period-container'>
					<div className='series__date-container'>
						<p className='series__date'>{series.startDate.year}</p>
						<p className='series__date'>{series.startDate.month}</p>
					</div>
					<p className='series__number'>{`Глава ${series.number}`}</p>
					<div className='series__date-container'>
						<p className='series__date'>{series.endDate.year}</p>
						<p className='series__date'>{series.endDate.month}</p>
					</div>
				</div>
				<div className='series__name-container'>
					{series.title.map((titleString, i) => (
						<p className='series__name' key={i}>
							{titleString}
						</p>
					))}
				</div>
				<div className='series__discription-container'>
					{series.discription.map((discriptionString, i) => (
						<p className='series__discription' key={i}>
							{discriptionString}
						</p>
					))}
				</div>
				<div className='series__line'></div>
				<div className='series__columns-names-container'>
					<p className='series__columns-names'>дата</p>
					<p className='series__columns-names'>событие</p>
					<p
						className={`series__columns-names ${
							isWide ? '' : 'series__columns-names_invisible'
						}`}
					>
						материалы дела
					</p>
					<p
						className={`series__columns-names ${
							isWide ? '' : 'series__columns-names_invisible'
						}`}
					>
						источник
					</p>
				</div>
				<SeparatorLine />
			</div>
			<div className='series__parts-container'>
				{series.parts.map((part, i) => (
					<Part
						key={i}
						partData={part}
						partNumber={i}
						isWide={isWide}
						popupOpen={handlePopupOpen}
					/>
				))}
			</div>
			<PopupReference
				isOpen={isPopupOpen}
				data={referenceData}
				popupClose={popupClose}
			/>
		</main>
	);
}

export default Series;

/*

{series.parts.map((part, i) => (
					<Part
						key={i}
						partData={part}
						partNumber={i}
						isWide={isWide}
						popupOpen={handlePopupOpen}
					/>
				))}

*/

/*

<PopupReference
				isOpen={isPopupOpen}
				data={referenceData}
				popupClose={popupClose}
			/>

*/

/*

<div className='series__button-container'>
				<button
					className={`series__button ${
						series.number === 1 ? 'series__button_disable' : ''
					}`}
					onClick={goPreviousSeries}
				>
					Предыдущая глава
				</button>
				<button
					className={`series__button ${
						series.number === seriesArr.length ? 'series__button_disable' : ''
					}`}
					onClick={goNextSeries}
				>
					Следующая глава
				</button>
			</div>

*/
