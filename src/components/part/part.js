import {useState} from 'react';

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
import SeriesRecord from '../seriesRecord/seriesRecord';

function Part({partData, partNumber, isWide}) {
	return (
		<div className='part'>
			{partNumber ? (
				<div className='part__header-container'>
					{partData.title ? (
						<div className='part__header'>
							<SeparatorLine />
							{partData.title.illustration && (
								<img
									className='part__header-image'
									src={partData.title.illustration}
									alt={partData.title.name}
								></img>
							)}
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
					<>
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
					</>
					<>
						{!isWide && (
							<div className='part__column-container'>
								{partData.materials &&
									partData.materials.map((material, i) => (
										<div key={i}>
											{material.type === 'reference' ? (
												<SeriesReference data={material} />
											) : material.type === 'record' ? (
												<SeriesRecord data={material} />
											) : material.type === 'illustration' ? (
												<SeriesIllustration data={material} />
											) : (
												<SeriesSketch data={material} />
											)}
										</div>
									))}
							</div>
						)}
					</>
				</div>
				<div
					className={`part__column-container part__column-margin ${
						isWide ? '' : 'part__column-container_invisible'
					}`}
				>
					{partData.materials &&
						partData.materials.map((material, i) => (
							<div key={i}>
								{material.type === 'reference' ? (
									<SeriesReference data={material} />
								) : material.type === 'record' ? (
									<SeriesRecord data={material} />
								) : material.type === 'illustration' ? (
									<SeriesIllustration data={material} />
								) : (
									<SeriesSketch data={material} />
								)}
							</div>
						))}
				</div>
				<div
					className={`part__column-container part__column-margin ${
						isWide ? '' : 'part__column-container_invisible'
					}`}
				>
					{partData.sources &&
						partData.sources.map((source, i) => (
							<div key={i} className='part__source-container'>
								<div className='part__source-image'></div>
								<p className='part__source-name'>{source}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Part;
