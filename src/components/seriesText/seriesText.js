import {useState} from 'react';

import './seriesText.css';

function SeriesText({data}) {
	const windowWidth = window.innerWidth;

	const getArrayText = (str, phraseArr) => {
		let resArr = [];

		if (phraseArr) {
			let currentText = str;

			phraseArr.forEach((phrase) => {
				const indexFinish = currentText.indexOf(phrase);
				resArr.push(currentText.slice(0, indexFinish), phrase);
				currentText = currentText.slice(indexFinish + phrase.length);
			});

			resArr.push(currentText);
		} else {
			resArr.push(str);
		}

		return resArr;
	};

	const [finalArrayText, setFinalArrayText] = useState(
		getArrayText(data.content, data.meaningfulPhrases)
	);

	const chechMeaningfulPhrase = (text, phraseArr) => {
		if (phraseArr) {
			return phraseArr.find((phrase) => {
				return phrase === text;
			});
		} else {
			return false;
		}
	};

	const showReference = () => {
		console.log(windowWidth);
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
							chechMeaningfulPhrase(text, data.meaningfulPhrases) &&
							windowWidth < 769
								? showReference
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
