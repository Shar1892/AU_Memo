import React from 'react';

import './seriesImpotantText.css';

function SeriesImpotantText({data}) {
	return (
		<div className='seriesImpotantText'>
			<p className='seriesImpotantText__content'>{data.content}</p>
		</div>
	);
}

export default SeriesImpotantText;
