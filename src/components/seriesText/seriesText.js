import './seriesText.css';

function SeriesText({data, isWide, openPopup}) {
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

	const finalArrayText = getArrayText(data.content, data.meaningfulPhrases);

	const chechMeaningfulPhrase = (text, phraseArr) => {
		if (phraseArr) {
			return phraseArr.find((phrase) => {
				return phrase === text;
			});
		} else {
			return false;
		}
	};

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
