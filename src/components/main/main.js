import React from 'react';
import {useSessionStorage} from 'usehooks-ts';

/* eslint-disable jsx-a11y/img-redundant-alt */
import HorizontalScroll from 'react-scroll-horizontal';
import Timeline from '../timeline/timeline';
import IAInfo from '../IAInfo/IAInfo';
import ProofAge from '../proofAge/proofAge';

import './main.css';

import SeriesPreview from '../seriesPreview/seriesPreview';

import headerImage from '../../image/mainTitleImage.png';

function Main({handleSetCurrentSeriesNumber, seriesArr, setPage, isWide}) {
	const [isAgreement, setIsAgreement] = useSessionStorage('agreement', false);

	const handleYesAnswer = () => {
		setIsAgreement(true);
	};

	return (
		<main className='main'>
			<div className='main__header'>
				<p className='main__pretitle'>Спецпроект</p>
				<h2 className='main__title'>Мемориал. Ликвидация</h2>
				<IAInfo></IAInfo>
				<img
					className='main__header-image'
					src={headerImage}
					alt='header image'
				></img>
				<div className='main__separatorLine'>
					<div className='main__separatorLine-triangle-left'></div>
					<div className='main__separatorLine__dot'></div>
					<div className='main__separatorLine-triangle-right'></div>
				</div>
				<p className='main__subtitle'>
					7 октября 2022 года одна из старейших правозащитных организаций России
					— «Мемориал» — получила Нобелевскую премию мира.
				</p>
				<p className='main__subtitle'>
					Многие «мемориальцы» узнали эту новость в Тверском суде. Пока весь мир
					поздравлял правозащитников с наградой, российское государство отбирало
					у них последнее — дом «Мемориала» на Каретном ряду.
				</p>
				<p className='main__subtitle'>
					К тому моменту карательная операция против движения была почти
					завершена. Позади остались обыски и проверки, признание «иноагентами»,
					штрафы и уголовные дела. Даже юридические лица «Международного
					Мемориала» и Правозащитного центра «Мемориал» были ликвидированы.
				</p>
				<p className='main__subtitle'>
					Но власти так и не смогли уничтожить «Мемориал». Юристы и адвокаты
					отчаянно защищали организацию в судах — и смогли привлечь внимание
					всего мира к этим откровенно репрессивным процессам. А само движение в
					итоге собралось заново — и открыло новую страницу своей истории.
				</p>
				<p className='main__subtitle main__subtitle_italics'>
					О том, как «Мемориал» боролся с государством за себя и за всё
					гражданское общество России, вы узнаете в этом специальном проекте
					«Адвокатской улицы» и «Мемориала».
				</p>
			</div>
			{isWide ? (
				<div className='main__list-container' id='series'>
					<HorizontalScroll className='main__series-list' reverseScroll={true}>
						{seriesArr.map((series, i) => (
							<SeriesPreview
								key={i}
								data={series}
								handleSetCurrentSeriesNumber={handleSetCurrentSeriesNumber}
								setPage={setPage}
								isWide={true}
							/>
						))}
						<div className='main__empty-block'></div>
					</HorizontalScroll>
				</div>
			) : (
				<div className='main__preview-list'>
					{seriesArr.map((series, i) => (
						<SeriesPreview
							key={i}
							data={series}
							handleSetCurrentSeriesNumber={handleSetCurrentSeriesNumber}
							setPage={setPage}
							isWide={false}
						/>
					))}
				</div>
			)}
			<div id='timeline'>
				<Timeline />
			</div>
			<ProofAge isVisible={!isAgreement} handleYes={handleYesAnswer}></ProofAge>
		</main>
	);
}

export default Main;
