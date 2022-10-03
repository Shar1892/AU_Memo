import './footer.css';

import {years} from '../../utils/constants';
import {autors} from '../../utils/constants';

function Footer({seriesNames}) {
	return (
		<footer className='footer'>
			<div className='footer__separator'></div>
			<div className='footer__content-container'>
				<div className='footer__discription'>
					<div className='footer__discription-container'>
						<img className='footer__memo-icon'></img>
						<p className='footer__copyright'>
							&#169; {`${new Date().getFullYear()}`}
						</p>
					</div>
					<p className='footer__discription-text'>
						Краткое описание спецпроекта в несколько предложений и строк. Лучше,
						чтобы тут был небольшой блок текста. Описание спецпроекта в
						несколько предложений и строк.
					</p>
				</div>
				<div className='footer__column'>
					<p className='footer__column-name'>Главы</p>
					{seriesNames.map((sr, i) => (
						<div className='footer__series-container' key={i}>
							<p className='footer__series-name'>
								<i className='footer__series-number'>{sr.number}</i>
								{sr.name}
							</p>
						</div>
					))}
				</div>
				<div className='footer__column'>
					<p className='footer__column-name'>Авторы проекта</p>
					{autors.map((autor, i) => (
						<div className='footer__autor-container' key={i}>
							<p className='footer__autor-role'>
								{autor.role}
								<i className='footer__autor-name'>{autor.name}</i>
							</p>
						</div>
					))}
				</div>
				<div className='footer__column'>
					<p className='footer__column-name'>Таймлайн</p>
					{years.map((year, i) => (
						<p className='footer__year' key={i}>
							{year}
						</p>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
