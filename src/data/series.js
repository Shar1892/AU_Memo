import image1 from '../image/4904465.jpg';
import photo1_1 from '../image/4904465.jpg';
import photo1_2 from '../image/4904465.jpg';
import icon1_1 from '../image/4904465.jpg';
import icon1_2 from '../image/4904465.jpg';

import image2 from '../image/4904465.jpg';
import photo2_1 from '../image/4904465.jpg';
import photo2_2 from '../image/4904465.jpg';
import icon2_1 from '../image/4904465.jpg';
import icon2_2 from '../image/4904465.jpg';

import image3 from '../image/4904465.jpg';
import photo3_1 from '../image/4904465.jpg';
import photo3_2 from '../image/4904465.jpg';
import icon3_1 from '../image/4904465.jpg';
import icon3_2 from '../image/4904465.jpg';

const seriesArr = [
	{
		number: 1,
		numberText: 'I',
		name: 'Название первой серии',
		discription:
			'1 Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии ',
		mainImage: image1,
		videoSrc: 'https://www.youtube.com/embed/1yuTJMFGxEw',
		persons: [
			{
				photo: photo1_1,
				name: 'Иван',
				surname: 'Иванов',
				discription: '11 Описание персоны Описание персоны Описание персоны',
				quote: '11 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
			{
				photo: photo1_2,
				name: 'Сергей',
				surname: 'Сергеев',
				discription: '12 Описание персоны Описание персоны Описание персоны',
				quote: '12 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
		],
		text: '1 Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст',
		documents: [
			{
				icon: icon1_1,
				discription: '11 Описание документа',
			},
			{
				icon: icon1_2,
				discription: '12 Описание документа',
			},
		],
	},
	{
		number: 2,
		numberText: 'II',
		name: 'Название второй серии',
		discription:
			'2 Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии ',
		mainImage: image2,
		videoSrc: 'https://www.youtube.com/embed/bFNAndV99Rc',
		persons: [
			{
				photo: photo2_1,
				name: 'Иван',
				surname: 'Иванов',
				discription: '21 Описание персоны Описание персоны Описание персоны',
				quote: '21 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
			{
				photo: photo2_2,
				name: 'Сергей',
				surname: 'Сергеев',
				discription: '22 Описание персоны Описание персоны Описание персоны',
				quote: '22 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
		],
		text: '2 Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст',
		documents: [
			{
				icon: icon2_1,
				discription: '21 Описание документа',
			},
			{
				icon: icon2_2,
				discription: '22 Описание документа',
			},
		],
	},
	{
		number: 3,
		numberText: 'III',
		name: 'Название третьей серии',
		discription:
			'3 Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии Описание серии ',
		mainImage: image3,
		videoSrc: 'https://www.youtube.com/embed/k3Ncs0anYCI',
		persons: [
			{
				photo: photo3_1,
				name: 'Иван',
				surname: 'Иванов',
				discription: '31 Описание персоны Описание персоны Описание персоны',
				quote: '31 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
			{
				photo: photo3_2,
				name: 'Сергей',
				surname: 'Сергеев',
				discription: '32 Описание персоны Описание персоны Описание персоны',
				quote: '32 Цитата персоны Цитата персоны Цитата персоны Цитата персоны',
				status: 'Статус персоны',
			},
		],
		text: '3 Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст Основной текст',
		documents: [
			{
				icon: icon3_1,
				discription: '31 Описание документа',
			},
			{
				icon: icon3_2,
				discription: '32 Описание документа',
			},
		],
	},
];

export default seriesArr;
