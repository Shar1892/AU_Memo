import React from 'react';

import './seriesContents.css';

import {NavLink} from 'react-router-dom';

import {transferToRoman} from '../../utils/utils';

function SeriesContents({
	isOpen,
	onClose,
	seriesNames,
	handleSetCurrentSeriesNumber,
	setPage,
}) {
	const openSeries = (seriesNumber) => {
		handleSetCurrentSeriesNumber(seriesNumber);
		onClose();
	};

	const seriesLinkClick = (seriesNumber) => {
		openSeries(seriesNumber);
		setPage(false);
	};

	return (
		<div
			className={`seriesContents ${isOpen ? 'seriesContents_visible' : ''}`}
			onClick={(evt) => {
				if (evt.target === evt.currentTarget) {
					onClose();
				}
			}}
		>
			<div className='seriesContents__container'>
				<div className='seriesContents__vector-external'>
					<div className='seriesContents__vector-interior'></div>
				</div>
				<div className='seriesContents__list'>
					{seriesNames.map((sr, i) => (
						<div className='seriesContents__series-container' key={i}>
							<NavLink
								to='/AU_Memo/series'
								className={`seriesContents__series-name ${
									sr.number === -1 ? 'seriesContents__series-name_disabled' : ''
								}`}
								onClick={() => seriesLinkClick(sr.number)}
							>
								<i className='seriesContents__series-number'>
									{transferToRoman(i)}
								</i>
								{` ${sr.name}`}
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SeriesContents;
