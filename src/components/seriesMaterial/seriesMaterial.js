import './seriesMaterial.css';

import SeriesReference from '../seriesReference/seriesReference';
import SeriesIllustration from '../seriesIllustration/seriesIllustration';
import SeriesSketch from '../seriesSketch/seriesSketch';
import SeriesRecord from '../seriesRecord/seriesRecord';

function SeriesMaterial({materials, isWide}) {
	return (
		<div className={`seriesMaterial ${isWide ? 'seriesMaterial_single' : ''}`}>
			{materials &&
				materials.map((material, i) => (
					<div
						className={`${isWide ? '' : 'seriesMaterial__content'} ${
							!isWide & (material.type === 'reference')
								? 'seriesMaterial__content_invisible'
								: ''
						}`}
						key={i}
					>
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
	);
}

export default SeriesMaterial;

// <>{isWide && <SeriesReference data={material} />}</>
