import './timeline.css';

function Timeline() {
	const arrSeries = [1, 2, 3, 4, 5];

	return (
		<main className='timeline'>
			<h2 className='timeline__title'> Название таймлайна</h2>
			<div className='timeline__list'>
				{arrSeries.map((series, i) => (
					<div className='timeline__part' key={i}>
						<p className='timeline__part-date'>11.11.2020</p>
						<div className='timeline__graphic'>
							<div className='timeline__graphic-head'></div>
							<div className='timeline__graphic-line'></div>
						</div>
						<div className='timeline__content'>
							<h3 className='timeline__subtitle'>Событие</h3>
							<p className='timeline__text'>
								текст текст тексттекст текст тексттекст текст тексттекст текст
								тексттекст текст тексттекст текст тексттекст текст тексттекст
								текст тексттекст текст тексттекст текст тексттексттекст текст
								тексттекст текст тексттекст текст тексттекст текст
								тексттексттекст текст тексттекст текст тексттекст текст
								тексттекст текст тексттекст
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='timeline__autors-list'>
				<p className='timeline__autor'>Автор/ы</p>
				<p className='timeline__autor'>Редактор/ы</p>
			</div>
		</main>
	);
}

export default Timeline;

/*

<div class='title-container'>
				<h2 class='timeline-title'> Название таймлайна</h2>
			</div>

*/
