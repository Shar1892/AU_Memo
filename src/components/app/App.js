import {Route, Switch} from 'react-router-dom';
import {useState} from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Series from '../series/series';

import './App.css';

function App() {
	const [currentSeriesNumber, setCurrentSeriesNumber] = useState(1);

	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Main handleSetCurrentSeriesNumber={setCurrentSeriesNumber} />
				</Route>
				<Route path='/series'>
					<Series
						seriesNumber={currentSeriesNumber}
						changeSeriesNumber={setCurrentSeriesNumber}
					/>
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
