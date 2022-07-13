/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import './series.css';

import seriesArr from '../../data/series';

function Series({seriesNumber, changeSeriesNumber}) {
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

	return (
		<main className='series'>
			<div className='series__title-container'>
				<p className='series__series-number'>{`Глава ${series.number}`}</p>
				<h2 className='series__series-title'>{series.name}</h2>
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
