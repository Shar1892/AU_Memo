import './timeline.css';

import timelineArr from '../../data/timeline';

function Timeline() {
	return (
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
						<div className='timeline__content'>
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
	);
}

export default Timeline;
