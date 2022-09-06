/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import {useEffect, useState} from 'react';

import './series.css';

import seriesArr from '../../data/series';

import Part from '../part/part';
import SeparatorLine from '../separatorLine/separatorLine';

function Series({seriesNumber, changeSeriesNumber}) {
	const windowWidth = window.innerWidth;

	const [isWide, setIsWide] = useState(() => {
		if (windowWidth > 425) {
			return true;
		} else {
			return false;
		}
	});

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
	}, []);

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
						<p className='series__date'>{series.startDate.mont}</p>
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
					<Part key={i} partData={part} partNumber={i} isWide={isWide} />
				))}
			</div>

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
		</main>
	);
}

export default Series;

/*


			<div className='series__title-container'>
				<p className='series__series-number'>{`Глава ${series.number}`}</p>
				<h2 className='series__series-title'>{series.title}</h2>
			</div>
			<div className='series__video-container'>
				<iframe
					id='ytplayer'
					type='text/html'
					src={series.videoSrc}
					frameBorder='0'
					allowFullScreen
					className='series__video'
				></iframe>
				<p className='series__video-discription'>{series.discription}</p>
			</div>
			<div className='series__persons-block'>
				<h3 className='series__persons-title'>Действующие лица</h3>
				<div className='series__persons-list'>
					{series.persons.map((person, i) => (
						<div className='series__person-preview' key={i}>
							<img
								className='series__person-photo'
								src={person.photo}
								alt={`${person.name} ${person.surname}`}
							></img>
							<div className='series__person-info'>
								<p className='series__person-name'>{`${person.name} ${person.surname}`}</p>
								<p className='series__person-discription'>
									{person.discription}
								</p>
							</div>
						</div>
					))}
				</div>
				<p className='series__text'>{series.text}</p>
				<div className='series__documents-list'>
					{series.documents.map((document, i) => (
						<div className='series__document-container' key={i}>
							<img
								className='series__document-photo'
								src={document.icon}
								alt='photo'
							></img>
							<p className='series__document-discription'>
								{document.discription}
							</p>
						</div>
					))}
				</div>
				<div className='series__persons-list'>
					{series.persons.map((persona, i) => (
						<div className='series__persona' key={i}>
							<img
								className='series__persona-photo'
								src={persona.photo}
								alt={`${persona.name} ${persona.surname}`}
							></img>
							<div className='series__persona-info'>
								<p className='series__persona-name'>{`${persona.name} ${persona.surname}`}</p>
								<p className='series__persona-discription'>
									{persona.discription}
								</p>
							</div>
						</div>
					))}
				</div>
				<p className='series__text'>{series.text}</p>
				<div className='series__autors-list'>
					<p className='series__autor'>Автор/ы</p>
					<p className='series__autor'>Редактор/ы</p>
				</div>
			</div>

*/
