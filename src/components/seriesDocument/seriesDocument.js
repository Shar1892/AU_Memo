import {useState, useRef, useLayoutEffect} from 'react';

import './seriesDocument.css';

function SeriesDocument({data}) {
	const [isShort, setIsShort] = useState(false);
	const targetRef = useRef();

	const [isFitsCompletely, setIsFitsCompletely] = useState(false);

	useLayoutEffect(() => {
		console.log(targetRef.current.offsetHeight);
		if (targetRef.current.offsetHeight > 117) {
			setIsShort(true);
		} else {
			setIsFitsCompletely(true);
		}
	}, []);

	const expandDocument = () => {
		setIsShort(!isShort);
	};

	return (
		<div className='seriesDocument'>
			<p className='seriesDocument__title'>Документ</p>
			<p className='seriesDocument__name'>{data.name}</p>
			<p
				ref={targetRef}
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
					isShort || isFitsCompletely ? 'seriesDocument__button_hidden' : ''
				}`}
				onClick={expandDocument}
			>
				Свернуть
			</button>
		</div>
	);
}

export default SeriesDocument;
