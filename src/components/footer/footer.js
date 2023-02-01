import './footer.css';

import {years} from '../../utils/constants';
import {autors} from '../../utils/constants';
import logo from '../../image/logoMemo.png';

function Footer({seriesNames}) {
	return (
		<footer className='footer'>
			<div className='footer__separator'></div>
			<div className='footer__content-container'>
				<div className='footer__discription'>
					<div className='footer__discription-container'>
						<img
							className='footer__logo'
							src={logo}
							alt='Логотип Мемориала'
						></img>
						<p className='footer__copyright'>
							(C) {`${new Date().getFullYear()}`}
						</p>
					</div>
					<p className='footer__discription-text'>
						Специальный проект «Адвокатской улицы» и общества «Мемориал» о том,
						как власти пытались победить одну из старейших правозащитных
						организаций России.
					</p>
				</div>
				<div className='footer__column'>
					<p className='footer__column-name'>Главы</p>
					<div className='footer__column-container'>
						{seriesNames.map((sr, i) => (
							<div className='footer__series-container' key={i}>
								<p className='footer__series-name'>
									<i className='footer__series-number'>{sr.romanNumber}</i>
									{` ${sr.name}`}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='footer__column'>
					<p className='footer__column-name'>Авторы проекта</p>
					<div className='footer__column-container'>
						{autors.map((autor, i) => (
							<div className='footer__autor-container' key={i}>
								<p className='footer__autor-role'>
									{`${autor.role} `}
									<i className='footer__autor-name'>{autor.name}</i>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

// 	&#169;

/*

<div className='footer__column'>
					<p className='footer__column-name'>Таймлайн</p>
					<div className='footer__years-container'>
						{years.map((year, i) => (
							<p className='footer__year' key={i}>
								{year}
							</p>
						))}
					</div>
				</div>


*/
