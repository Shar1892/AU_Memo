//import {NavLink} from 'react-router-dom';

import './header.css';

function Header() {
	return (
		<header className='header'>
			<div className='header__content-container'>
				<h1 className='header__title'>Ликвидация «Мемориала»</h1>
				<div className='header__menu'>
					<a href='/#timeline' className='header__link'>
						Таймлайн
					</a>
					<a href='/#series' className='header__link'>
						Оглавление
					</a>
				</div>
			</div>
			<div className='header__separator'></div>
		</header>
	);
}

export default Header;

/*

<div className='header__subtitle-container'>
				<p className='header__subtitle'>
					<a
						href='https://music.yandex.ru/album/9756926/track/62107380'
						className='header__partner-link'
						target='_blank'
						rel='noreferrer'
					>
						Адвокатская улица
					</a>{' '}
					и{' '}
					<a
						href='https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0#%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B'
						className='header__partner-link'
						target='_blank'
						rel='noreferrer'
					>
						Мемориал
					</a>
				</p>
			</div>
			<div className='header__partner-container'>
				<a
					href='https://music.yandex.ru/album/9756926/track/62107380'
					className='header__link-element'
					target='_blank'
					rel='noreferrer'
				>
					<div className='header__link-block'>
						<p className='header__link-text'>АУ</p>
					</div>
				</a>
				<a
					href='https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0#%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B'
					className='header__link-element'
					target='_blank'
					rel='noreferrer'
				>
					<div className='header__link-block'>
						<p className='header__link-text'>М</p>
					</div>
				</a>
			</div>
			<nav className='header__navigation'>
				<NavLink exact to='/' className='header__navigation-link'>
					Главная
				</NavLink>
				<NavLink to='/series' className='header__navigation-link'>
					Все серии
				</NavLink>
			</nav>


*/
