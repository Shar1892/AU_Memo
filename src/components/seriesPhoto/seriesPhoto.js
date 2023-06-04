import React from 'react';

import './seriesPhoto.css';

function SeriesPhoto({data}) {
	return (
		<div className='seriesPhoto'>
			<img
				className='seriesPhoto__photo'
				src={data.image}
				alt={data.name}
			></img>
			<p className='seriesPhoto__name'>{data.name}</p>
			<p className='seriesPhoto__autor'>{`${data.autor}, ${data.date}`}</p>
			<p className='seriesPhoto__source'>{data.source}</p>
		</div>
	);
}

export default SeriesPhoto;
