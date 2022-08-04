import './part.css';

import SeparatorLine from '../separatorLine/separatorLine';

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
						<div key={i}>
							{section.type === 'text' ? (
								<div>{section.type}</div>
							) : section.type === 'important text' ? (
								<div>{section.type}</div>
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
					))}
				</div>
				<div className='part__column-container'>
					{partData.materials &&
						partData.materials.map((material, i) => (
							<div key={i}>
								{material.type === 'reference' ? (
									<div>{material.type}</div>
								) : material.type === 'record' ? (
									<div>{material.type}</div>
								) : material.type === 'illustration' ? (
									<div>{material.type}</div>
								) : (
									<div>{material.type}</div>
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
