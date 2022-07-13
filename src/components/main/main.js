/* eslint-disable jsx-a11y/img-redundant-alt */
import {NavLink} from 'react-router-dom';

import './main.css';
//import photo from '../../image/4904465.jpg';

import seriesArr from '../../data/series';

function Main({handleSetCurrentSeriesNumber}) {
	return (
		<main className='main'>
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
		</main>
	);
}

export default Main;

/*

<div className='main__series-list'>
				<div className='main__series'>
					<div className='main__series-header'>
						<p className='main__series-number'>I</p>
						<h2 className='main__series-title'>Название серии</h2>
					</div>
					<div className='main__series-container'>
						<img className='main__series-photo' src={photo} alt='photo'></img>
						<div className='main__series-discription-container'>
							<h3 className='main__series__discription-title'>Описание</h3>
							<p className='main__series__discription'>
								много текста Много текста Много текста Много текста Много текста
								Много текста Много текста Много текста Много текста Много текста
								Много текста Много текста Много текста Много текста Много текста
								Много текста Много текста Много текста Много текста Много текста
								Много текста Много текста Много текста Много текста Много текста
								Много текста Много текста
							</p>
							<button className='main__series__button'>Начать</button>
						</div>
					</div>
				</div>
			</div>

*/
