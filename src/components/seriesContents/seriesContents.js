import './seriesContents.css';

function SeriesContents({isOpen, onClose}) {
	return (
		<div
			className={`seriesContents ${isOpen ? 'seriesContents_visible' : ''}`}
			onClick={(evt) => {
				if (evt.target === evt.currentTarget) {
					onClose();
				}
			}}
		>
			<div className='seriesContents__container'>
				<div className='seriesContents__vector-external'>
					<div className='seriesContents__vector-interior'></div>
				</div>
				<p className='seriesContents__content'>seriesContents</p>
			</div>
		</div>
	);
}

export default SeriesContents;
