import SeriesText from '../seriesText/seriesText';

import './timelinePart.css';

function TimelinePart({data, openVideo, isLast}) {
	return (
		<div className='timelinePart'>
			<div className='timelinePart__date-container'>
				<p className='timelinePart__date'>{data.date.date}</p>
				<p className='timelinePart__date'>{data.date.year}</p>
			</div>
			<div className='timelinePart__separator-container'>
				<div className='timelinePart__separator-dot'></div>
				<div className='timelinePart__separator-line'></div>
				{isLast && <div className='timelinePart__separator-triangle'></div>}
			</div>
			<div
				className={`timelinePart__content-container ${
					isLast ? 'timelinePart__content-container_last' : ''
				}`}
			>
				<p className='timelinePart__content-title'>{data.title}</p>
				<SeriesText data={data} />
			</div>
		</div>
	);
}

export default TimelinePart;

//{data.date.year}

/*

<div className='timelinePart__graphic'>
				<div className='timelinePart__graphic-main'>
					<SeparatorLine />
				</div>
				<div className='timelinePart__graphic-line'></div>
			</div>
			<div className='timelinePart__container'>
				<div className='timelinePart__date-block'>
					<div className='timelinePart__date-container'>
						<p className='timelinePart__date'>{data.startDate.year}</p>
						<p className='timelinePart__date'>{data.startDate.month}</p>
					</div>
					<div className='timelinePart__date-container timelinePart__date-container_end'>
						<p className='timelinePart__date'>{data.endDate.year}</p>
						<p className='timelinePart__date'>{data.endDate.month}</p>
					</div>
				</div>
				<div
					className='timelinePart__content'
					onClick={() => openVideo(data.seriesNumber, data.startSecond)}
				>
					<p className='timelinePart__subtitle'>{data.numText}</p>
					<img
						className='timelinePart__image'
						src={data.image}
						alt='image'
					></img>
					<h3 className='timelinePart__title'>{data.name}</h3>
					<p className='timelinePart__text'>{data.discription}</p>
				</div>
			</div>

*/
