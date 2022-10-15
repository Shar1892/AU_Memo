/* eslint-disable jsx-a11y/img-redundant-alt */
import SeparatorLine from '../separatorLine/separatorLine';

import SeriesText from '../seriesText/seriesText';

import './timelinePart.css';

function TimelinePart({data, openVideo}) {
	return (
		<div className='timelinePart'>
			<p>{data.title}</p>
			<SeriesText data={data} />
		</div>
	);
}

export default TimelinePart;

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
