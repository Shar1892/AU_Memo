import {Route, Switch} from 'react-router-dom';
import {useState} from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Series from '../series/series';

import seriesArr from '../../data/series';

import './App.css';

function App() {
	const [currentSeriesNumber, setCurrentSeriesNumber] = useState(1);

	const seriesNames = seriesArr.map((series) => {
		return {
			name: series.title.join(' '),
			romanNumber: series.romanNumber,
			number: series.number,
		};
	});

	return (
		<div className='App'>
			<Header
				seriesNames={seriesNames}
				handleSetCurrentSeriesNumber={setCurrentSeriesNumber}
			/>
			<Switch>
				<Route exact path='/'>
					<Main
						handleSetCurrentSeriesNumber={setCurrentSeriesNumber}
						seriesArr={seriesArr}
					/>
				</Route>
				<Route path='/series'>
					<Series
						seriesNumber={currentSeriesNumber}
						changeSeriesNumber={setCurrentSeriesNumber}
						seriesArr={seriesArr}
					/>
				</Route>
			</Switch>
			<Footer seriesNames={seriesNames} />
		</div>
	);
}

export default App;
