import './part.css';

import SeparatorLine from '../separatorLine/separatorLine';
import SeriesText from '../seriesText/seriesText';
import SeriesImpotantText from '../seriesImpotantText/seriesImpotantText';
import SeriesQuote from '../seriesQuote/seriesQuote';
import SeriesDocument from '../seriesDocument/seriesDocument';
import SeriesMemoQuote from '../seriesMemoQuote/seriesMemoQuote';
import SeriesVideo from '../seriesVideo/seriesVideo';
import SeriesPhoto from '../seriesPhoto/seriesPhoto';
import SeriesReference from '../seriesReference/seriesReference';
import SeriesIllustration from '../seriesIllustration/seriesIllustration';
import SeriesSketch from '../seriesSketch/seriesSketch';

function Part({partData, partNumber}) {
	return (
		<div className='part'>
			{partNumber ? (
				<div className='part__header-container'>
					{partData.title ? (
						<div className='part__header'>
							<SeparatorLine />
							<img
								className='part__header-image'
								src={partData.title.illustration}
								alt={partData.title.name}
							></img>
							<h3 className='part__name'>{partData.title.name}</h3>
							<SeparatorLine />
						</div>
					) : (
						<div className='part__separator'></div>
					)}
				</div>
			) : (
				<></>
			)}
			<div className='part__content-container'>
				<div className='part__column-container'>
					<p className='part__date'>{partData.dateYear}</p>
					<p className='part__date'>{partData.dateMonth}</p>
				</div>
				<div className='part__column-container'>
					{partData.sections.map((section, i) => (
						<div
							className={`part__section-container ${
								section.type === 'text'
									? 'part__section-margin_small'
									: 'part__section-margin_large'
							}`}
							key={i}
						>
							{section.type === 'text' ? (
								<SeriesText data={section} />
							) : section.type === 'important text' ? (
								<SeriesImpotantText data={section} />
							) : section.type === 'quote' ? (
								<SeriesQuote data={section} />
							) : section.type === 'document' ? (
								<SeriesDocument data={section} />
							) : section.type === 'photo' ? (
								<SeriesPhoto data={section} />
							) : section.type === 'video' ? (
								<SeriesVideo data={section} />
							) : (
								<SeriesMemoQuote data={section} />
							)}
						</div>
					))}
				</div>
				<div className='part__column-container part__column-margin'>
					{partData.materials &&
						partData.materials.map((material, i) => (
							<div key={i}>
								{material.type === 'reference' ? (
									<SeriesReference data={material} />
								) : material.type === 'record' ? (
									<div>{material.type}</div>
								) : material.type === 'illustration' ? (
									<SeriesIllustration data={material} />
								) : (
									<SeriesSketch data={material} />
								)}
							</div>
						))}
				</div>
				<div className='part__column-container'>
					{partData.sources &&
						partData.sources.map((source, i) => <div key={i}>{source}</div>)}
				</div>
			</div>
		</div>
	);
}

export default Part;

/*

<div key={i}>
							{section.type === 'text' ? (
								<SeriesText data={section} />
							) : section.type === 'important text' ? (
								<SeriesImpotantText data={section} />
							) : section.type === 'quote' ? (
								<div>{section.type}</div>
							) : section.type === 'document' ? (
								<div>{section.type}</div>
							) : section.type === 'photo' ? (
								<div>{section.type}</div>
							) : section.type === 'video' ? (
								<div>{section.type}</div>
							) : (
								<div>{section.type}</div>
							)}
						</div>

*/
