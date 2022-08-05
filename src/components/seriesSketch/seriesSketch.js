import './seriesSketch.css';

function SeriesSketch({data}) {
	return (
		<div className='seriesSketch'>
			<img className='seriesSketch__image' src={data.src} alt={data.type}></img>
			<p className='seriesSketch__title'>зарисовка</p>
			<p className='seriesSketch__discription'>{data.discription}</p>
		</div>
	);
}

export default SeriesSketch;
