/* eslint-disable jsx-a11y/img-redundant-alt */
import HorizontalScroll from 'react-scroll-horizontal';
import Timeline from '../timeline/timeline';

import './main.css';

import SeriesPreview from '../seriesPreview/seriesPreview';

import headerImage from '../../image/timelineHeaderImage.jpg';

function Main({handleSetCurrentSeriesNumber, seriesArr}) {
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
						/>
					))}
					<div className='main__empty-block'></div>
				</HorizontalScroll>
			</div>
			<Timeline />
			<div id='timeline'>
				<p>timeline</p>
			</div>
		</main>
	);
}

export default Main;

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

/*

<div className='main__discription'>
				<h2 className='main__discription-title'>Описание спецпроекта</h2>
				<p className='main__discription-text'>
					Много текста Много текста Много текста Много текста Много текста Много
					текста Много текста Много текста Много текста Много текста Много
					текста Много текста Много текста Много текста Много текста Много
					текста Много текста Много текста Много текста Много текста Много
					текста Много текста Много текста Много текста Много текста Много
					текста Много текста Много текста Много текста Много текста Много
					текста Много текста
				</p>
			</div>

<div className='main__series-list'>
				{seriesArr.map((series) => (
					<div className='main__series' key={series.number}>
						<div className='main__series-header'>
							<p className='main__series-number'>{series.numberText}</p>
							<h2 className='main__series-title'>{series.name}</h2>
						</div>
						<div className='main__series-container'>
							<img
								className='main__series-photo'
								src={series.mainImage}
								alt='photo'
							></img>
							<div className='main__series-discription-container'>
								<h3 className='main__series__discription-title'>
									Описание серии
								</h3>
								<p className='main__series__discription'>
									{series.discription}
								</p>
								<NavLink
									to='/series'
									className='main__series__button'
									onClick={() => handleSetCurrentSeriesNumber(series.number)}
								>
									Начать
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</div>

*/
