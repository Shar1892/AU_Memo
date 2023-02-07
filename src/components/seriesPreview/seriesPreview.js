/* eslint-disable jsx-a11y/img-redundant-alt */
import {NavLink} from 'react-router-dom';

import {transferToString} from '../../utils/utils';

import SeparatorLine from '../separatorLine/separatorLine';

import './seriesPreview.css';

function SeriesPreview({data, handleSetCurrentSeriesNumber, setPage}) {
	const seriesPrewiewClick = (seriesNumber) => {
		handleSetCurrentSeriesNumber(seriesNumber);
		setPage(false);
	};

	return (
		<NavLink
			to='/AU_Memo/series'
			className={`seriesPreview__navlinck ${
				data.number === -1 ? 'seriesPreview__navlinck_disabled' : ''
			}`}
			onClick={() => seriesPrewiewClick(data.number)}
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
						<p className='seriesPreview__subtitle'>{`${transferToString(
							data.number
						)} глава`}</p>
						<img
							className='seriesPreview__image'
							src={data.previewImage}
							alt='image'
						></img>
						<div className='seriesPreview__title-container'>
							<h3 className='seriesPreview__title'>{data.title.join(' ')}</h3>
						</div>
						<p className='seriesPreview__text'>{data.previewDiscription}</p>
					</div>
				</div>
			</div>
		</NavLink>
	);
}

export default SeriesPreview;
