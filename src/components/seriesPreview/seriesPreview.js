import {NavLink} from 'react-router-dom';

import SeparatorLine from '../separatorLine/separatorLine';

import './seriesPreview.css';

// onClick={() => handleSetCurrentSeriesNumber(series.number)}
//	className='main__series__button'

function SeriesPreview({data, handleSetCurrentSeriesNumber}) {
	return (
		<NavLink
			to='/series'
			className='seriesPreview__navlinck'
			onClick={() => handleSetCurrentSeriesNumber(data.number)}
		>
			<div className='seriesPreview'>
				<div className='seriesPreview__graphic'>
					<div className='seriesPreview__graphic-main'>
						<SeparatorLine />
					</div>
					<div className='seriesPreview__graphic-line'></div>
				</div>
				<div className='seriesPreview__container'>
					<div className='seriesPreview__date-block'>
						<div className='seriesPreview__date-container'>
							<p className='seriesPreview__date'>{data.startDate.year}</p>
							<p className='seriesPreview__date'>{data.startDate.month}</p>
						</div>
						<div className='seriesPreview__date-container seriesPreview__date-container_end'>
							<p className='seriesPreview__date'>{data.endDate.year}</p>
							<p className='seriesPreview__date'>{data.endDate.month}</p>
						</div>
					</div>
					<div className='seriesPreview__content'>
						<p className='seriesPreview__subtitle'>{data.numText}</p>
						<img
							className='seriesPreview__image'
							src={data.previewImage}
							alt='image'
						></img>
						<h3 className='seriesPreview__title'>{data.title.join(' ')}</h3>
						<p className='seriesPreview__text'>{data.previewDiscription}</p>
					</div>
				</div>
			</div>
		</NavLink>
	);
}

export default SeriesPreview;

// onClick={() => openVideo(data.seriesNumber, data.startSecond)}
