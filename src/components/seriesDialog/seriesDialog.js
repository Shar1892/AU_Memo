import './seriesDialog.css';

function SeriesDialog({data}) {
	return (
		<div className='seriesDialog'>
			{data.content.map((contentString, i) => (
				<p className='seriesDialog__string' key={i}>
					{contentString}
				</p>
			))}
		</div>
	);
}

export default SeriesDialog;
