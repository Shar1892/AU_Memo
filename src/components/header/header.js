//import {NavLink} from 'react-router-dom';
import {useState} from 'react';

import SeriesContents from '../seriesContents/seriesContents';

import './header.css';

function Header() {
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
				<div className='header__menu'>
					<a href='/#timeline' className='header__link'>
						Таймлайн
					</a>
					<p className='header__link' onClick={openMenu}>
						Оглавление
					</p>
				</div>
			</div>
			<div className='header__separator'></div>
			<SeriesContents isOpen={isMenuOpen} onClose={menuClose} />
		</header>
	);
}

export default Header;

//<a href='/#series' className='header__link'>
