import React from 'react';

import './proofAge.css';

function ProofAge({isVisible, handleYes}) {
	if (!isVisible) {
		return null;
	}

	return (
		<div className='proof-age'>
			<h2 className='proof-age__header'>ВАМ ЕСТЬ 18 ЛЕТ?</h2>
			<div className='proof-age__button-container'>
				<a className='proof-age__link' href='https://www.google.ru/'>
					<button className='proof-age__button'>Нет</button>
				</a>
				<button className='proof-age__button' onClick={handleYes}>
					Да
				</button>
			</div>
		</div>
	);
}

export default ProofAge;
