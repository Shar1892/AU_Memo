import React from 'react';

import './seriesReference.css';

function SeriesReference({data}) {
	return (
		<div className='seriesReference'>
			<p className='seriesReference__title'>справка</p>
			<p className='seriesReference__name'>{data.name}</p>
			<p className='seriesReference__discription'>{data.discription}</p>
		</div>
	);
}

export default SeriesReference;
