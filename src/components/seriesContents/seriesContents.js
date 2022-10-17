import './seriesContents.css';

import {NavLink} from 'react-router-dom';

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
								to='/series'
								className='seriesContents__series-name'
								onClick={() => seriesLinkClick(sr.number)}
							>
								<i className='seriesContents__series-number'>
									{sr.romanNumber}
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

//onClick={() => openSeries(sr.number)}
