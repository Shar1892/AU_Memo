/* eslint-disable jsx-a11y/img-redundant-alt */
import HorizontalScroll from 'react-scroll-horizontal';
import Timeline from '../timeline/timeline';

import './main.css';

import SeriesPreview from '../seriesPreview/seriesPreview';

import headerImage from '../../image/timelineHeaderImage.jpg';

function Main({handleSetCurrentSeriesNumber, seriesArr, setPage}) {
	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__pretitle'>Спецпроект</p>
				<h2 className='main__title'>Мемориал. Ликвидация</h2>
				<img
					className='main__header-image'
					src={headerImage}
					alt='header image'
				></img>
				<p className='main__subtitle'>
					Как за 10 лет уничтожили старейшую правозащитную организацию России
					«Международный Мемориал»
				</p>
			</div>
			<div className='main__list-container' id='series'>
				<HorizontalScroll className='main__series-list' reverseScroll={true}>
					{seriesArr.map((series) => (
						<SeriesPreview
							key={series.number}
							data={series}
							handleSetCurrentSeriesNumber={handleSetCurrentSeriesNumber}
							setPage={setPage}
						/>
					))}
					<div className='main__empty-block'></div>
				</HorizontalScroll>
			</div>
			<div id='timeline'>
				<Timeline />
			</div>
		</main>
	);
}

export default Main;

/*

	<div className='main__list-container' id='series'>
				<HorizontalScroll className='main__series-list' reverseScroll={true}>
					{seriesArr.map((series) => (
						<SeriesPreview
							key={series.number}
							data={series}
							handleSetCurrentSeriesNumber={handleSetCurrentSeriesNumber}
							setPage={setPage}
						/>
					))}
					<div className='main__empty-block'></div>
				</HorizontalScroll>
			</div>
			<div id='timeline'>
				<Timeline />
			</div>

*/

//onClick={setPage(false)}

/*

<NavLink
							to='/series'
							className='main__series__button'
							onClick={() => handleSetCurrentSeriesNumber(series.number)}
							key={series.number}
						>
							<SeriesPreview data={series} />
						</NavLink>

*/

//openVideo={openVideo}
