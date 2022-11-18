import './seriesText.css';

import {getArrayText, chechPhrase} from '../../utils/utils';

function SeriesText({data, isWide, openPopup}) {
	const documentLinkNames = data.documentLinks
		? data.documentLinks.map((documentLink) => documentLink.name)
		: [];

	const highlightedWordsArr = data.meaningfulPhrases
		? [...data.meaningfulPhrases, ...documentLinkNames]
		: documentLinkNames;

	const finalArrayText = getArrayText(data.content, highlightedWordsArr);

	const showReference = (meaningfulPhrase) => {
		openPopup(meaningfulPhrase);
	};

	const getLink = (text, arr) => {
		const resDocumentLink = arr.find(
			(documentLink) => documentLink.name === text
		);
		return resDocumentLink.link;
	};

	return (
		<div className='seriesText'>
			<p className='seriesText__content'>
				{finalArrayText.map((text, i) => (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a
						className={`${
							chechPhrase(text, data.meaningfulPhrases)
								? 'seriesText__meaningfulPhrase'
								: ''
						} ${
							chechPhrase(text, documentLinkNames) ? 'seriesText__link' : ''
						}`}
						onClick={
							chechPhrase(text, data.meaningfulPhrases) && !isWide
								? () => {
										showReference(text);
								  }
								: null
						}
						href={
							chechPhrase(text, documentLinkNames)
								? getLink(text, data.documentLinks)
								: null
						}
						target='_blank'
						key={i}
						rel='noreferrer'
					>
						{text}
					</a>
				))}
			</p>
		</div>
	);
}

export default SeriesText;
