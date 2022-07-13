import './footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__links-container'>
				<p className='footer__links'>
					<a
						className='footer__partner-link'
						href='https://music.yandex.ru/album/9756926/track/62107380'
						target='_blank'
						rel='noreferrer'
					>
						Адвокатская улица
					</a>{' '}
					/{' '}
					<a
						className='footer__partner-link'
						href='https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0#%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B'
						target='_blank'
						rel='noreferrer'
					>
						Мемориал
					</a>
				</p>
			</div>
			<div className='footer__contacts-container'>
				<h3 className='footer__subtitle'>Контакты:</h3>
				<p className='footer__info'>контакт1</p>
				<p className='footer__info'>контакт2</p>
			</div>
			<div className='footer__autors-container'>
				<h3 className='footer__subtitle'>Авторы спецпроекта:</h3>
				<p className='footer__info'>Автор1</p>
				<p className='footer__info'>Автор2</p>
			</div>
		</footer>
	);
}

export default Footer;
