import React from 'react';

import './seriesQuote.css';

function SeriesQuote({data}) {
	return (
		<div className='seriesQuote'>
			<p className='seriesQuote__title'>Цитата</p>
			<p className='seriesQuote__text'>{data.text}</p>
			<div className='seriesQuote__person-container'>
				<img
					className='seriesQuote__person-photo'
					src={data.autorsPhoto}
					alt={data.autor}
				></img>
				<p className='seriesQuote__person'>{data.autor}</p>
			</div>
		</div>
	);
}

export default SeriesQuote;
