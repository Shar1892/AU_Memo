import './seriesText.css';

import {getArrayText, chechMeaningfulPhrase} from '../../utils/utils';

function SeriesText({data, isWide, openPopup}) {
	const finalArrayText = getArrayText(data.content, data.meaningfulPhrases);

	const showReference = (meaningfulPhrase) => {
		openPopup(meaningfulPhrase);
		console.log(meaningfulPhrase);
	};

	return (
		<div className='seriesText'>
			<p className='seriesText__content'>
				{finalArrayText.map((text, i) => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a
						className={`${
							chechMeaningfulPhrase(text, data.meaningfulPhrases)
								? 'seriesText__meaningfulPhrase'
								: ''
						}`}
						onClick={
							chechMeaningfulPhrase(text, data.meaningfulPhrases) && !isWide
								? () => {
										showReference(text);
								  }
								: null
						}
						key={i}
					>
						{text}
					</a>
				))}
			</p>
		</div>
	);
}

export default SeriesText;
