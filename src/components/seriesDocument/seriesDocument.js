import {useState} from 'react';

import './seriesDocument.css';

function SeriesDocument({data}) {
	const [isShort, setIsShort] = useState(true);

	const expandDocument = () => {
		setIsShort(!isShort);
	};

	return (
		<div className='seriesDocument'>
			<p className='seriesDocument__title'>Документ</p>
			<p className='seriesDocument__name'>{data.name}</p>
			<p
				className={`seriesDocument__text ${
					isShort ? 'seriesDocument__text_short' : ''
				}`}
			>
				{data.text}
			</p>
			<button
				className={`seriesDocument__button ${
					isShort ? '' : 'seriesDocument__button_hidden'
				}`}
				onClick={expandDocument}
			>
				Читать полностью
			</button>
			<button
				className={`seriesDocument__button ${
					isShort ? 'seriesDocument__button_hidden' : ''
				}`}
				onClick={expandDocument}
			>
				Свернуть
			</button>
		</div>
	);
}

export default SeriesDocument;
