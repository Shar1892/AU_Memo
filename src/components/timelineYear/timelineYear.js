import SeparatorLine from '../separatorLine/separatorLine';
import TimelinePart from '../timelinePart/timelinePart';

import {checkLast} from '../../utils/utils';

import './timelineYear.css';

function TimelineYear({data, openVideo}) {
	return (
		<div className='timelineYear'>
			<SeparatorLine />
			<h3 className='timelineYear__header'>{data.year}</h3>
			<SeparatorLine />
			<div className='timelineYear__content'>
				{data.acts.map((act, i) => (
					<TimelinePart
						data={act}
						key={i}
						isLast={checkLast(i, data.acts)}
						openVideo={openVideo}
					/>
				))}
			</div>
		</div>
	);
}

export default TimelineYear;

/*

<div className='timelineYear__content'>
				{data.acts.map((act, i) => (
					<TimelinePart
						data={act}
						key={i}
						isLast={checkLast(i, data.acts)}
						openVideo={openVideo}
					/>
				))}
			</div>

*/
