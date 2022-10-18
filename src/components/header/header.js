//import {NavLink} from 'react-router-dom';
import {useState} from 'react';

import SeriesContents from '../seriesContents/seriesContents';

import './header.css';

function Header({seriesNames, handleSetCurrentSeriesNumber, isMain, setPage}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuClose = () => {
		setIsMenuOpen(false);
	};

	const openMenu = () => {
		setIsMenuOpen(true);
	};

	return (
		<header className='header'>
			<div className='header__content-container'>
				<h1 className='header__title'>Ликвидация «Мемориала»</h1>
				{isMain ? (
					<div className='header__menu'>
						<a href='#timeline' className='header__link'>
							Таймлайн
						</a>
						<p className='header__link' onClick={openMenu}>
							Оглавление
						</p>
					</div>
				) : (
					<a href='/' className='header__link'>
						Основная
					</a>
				)}
			</div>
			<div className='header__separator'></div>
			<SeriesContents
				isOpen={isMenuOpen}
				onClose={menuClose}
				seriesNames={seriesNames}
				handleSetCurrentSeriesNumber={handleSetCurrentSeriesNumber}
				setPage={setPage}
			/>
		</header>
	);
}

export default Header;
