import firstSeriesHeaderImage from './images/firstSeriesHeader.jpg';

import secondPartImage from './images/secondPartImage.jpg';

import illustration1 from './images/illustration1.jpg';
import illustration2 from './images/illustration2.jpg';
import partHeader1 from './images/partHeader1.jpg';
import partHeader2 from './images/partHeader2.jpg';
import sketchImage1 from './images/sketchImage1.jpg';
import seriesImage from './images/seriesImage.jpg';
import personPhoto from './images/personPhoto.jpg';

import noize from './records/Noize_MC.mp3';

const secondSeries = {
	number: 2,
	numberText: 'II',
	title: ['Поиск', 'агентов', 'начинается'],
	discription: [
		'Олег Орлов прошёл по коридору мемориальского офиса в Каретном',
		'ряду. Открыл дверь в кабинет Арсения Рогинского. Тот молча',
		'открыл коньяк и разлил по рюмкам.',
		'— Ну, Олег, смотри: произошло таки!',
		'— Да, — задумчиво ответил Орлов.',
		'Мужчины выпили.',
		'— Что делать-то будем?, — спросил',
		'Рогинский. — Мы ведь не будем исполнять этот закон?',
		'— Да, это совершенно невозможно.',
	],

	previewDiscription:
		'Выдержка из текста, самые интересные кусочки. Занимает несколько строк. Можно развернуть и прочитать целиком.',

	startDate: {
		year: '2013',
		month: 'сентябрь',
	},
	endDate: {
		year: '2014',
		month: 'январь',
	},

	mainImage: firstSeriesHeaderImage,
	previewImage: secondPartImage,

	videoSrc: 'https://www.youtube.com/embed/1yuTJMFGxEw',

	parts: [
		{
			dateYear: '2011',
			dateMonth: 'Декабрь',
			sections: [
				{
					type: 'text',
					content:
						'4 декабря 2011 года в стране прошли выборы в Госдуму. Главным их отличием стало необычно большое количество наблюдателей — и сделанных ими фото и видео фальсификаций на избирательных участках. На следующий день эти свидетельства заполнили интернет. Вечером возмущённые таким обращением с их голосами граждане собрались на Чистопрудном бульваре в Москве. Многих задержали — и другие активные граждане впервые задумались о системе сбора информации о  задержанных. Через пол года эту систему назовут ОВД-Инфо.',
				},
				{
					type: 'text',
					content:
						'Возмущение не утихало. Через неделю москвичи вышли на самый многочисленный за последние десятилетия митинг. Ещё через 10 дней — на проспекте Сахарова собралось по разным оценкам от 50 до 100 тысяч человек. «Вы нас даже не представляете», — звучал один из лозунгов, адресованный одновременно новому парламенту и власти в целом. Социологи, действительно, не представляли, что гражданское общество стало таким заметным. Возможно, не представляли и власти. Растущее движение наблюдателей активно участвовало в президентских выборах. И снова зафиксировали массу нарушений. Некоторая часть общества поставила законность избрания Владимира Путина на третий срок под сомнение.',
				},
			],
		},

		{
			dateYear: '2012',
			dateMonth: 'Май',
			sections: [
				{
					type: 'text',
					content:
						'Выразить его собирались на очередном масштабном митинге 6 мая в Москве. Шествие должно было окончиться митингом на Болотной площади — которая за прошедшие полгода стала символом притязаний граждан на участие в политике. Но проход к ней оказался заблокирован, и власти начали силовой разгон протестующих. Тем не менее, часть протестующих отказалась расходиться и осталась ночевать на Чистопрудном бульваре. В течение последующих недель протестующие перемещались по Москве и устраивали стихийные митинги (что по аналогии с оккупай Уолл Стрит прозвали «Окупай Абай»).',
					meaningfulPhrases: ['силовой разгон', '«Окупай Абай»'], //Фразы должны быть взяты точно из текста
				},
				{
					type: 'text',
					content:
						'В этот момент в Госдуме активно обсуждали способы обуздать гражданскую активность.',
				},
				{
					type: 'important text',
					content:
						'Для улиц подготовили новый закон о митингах, который запрещал без согласования властей собираться в количестве более трёх и многократно увеличивал штрафы за нарушение этого требования. Для НКО, в которых власти, вероятно, видели причину общественного беспокойства готовили Закон об иностранных агентах.',
				},
				{
					type: 'text',
					content:
						'Автор закона депутат Александр Сидякин объяснял его суть так: «Политическим НКО, за исключением партий, будет признаваться такое объединение, которое финансирует и проводит политические акции в целях воздействия на принятие государственными органами решений, направленных на изменение проводимой ими государственной политики, а также в формировании общественного мнения в указанных целях».',
				},
				{
					type: 'quote',
					text: 'Закон делает доступной и открытой информацию о том, кто финансируется из-за рубежа и кто дает оценку тому, что у нас в политике происходит. Кто это делает самостоятельно, где это мнение является продуктом нашего гражданского общества, наших с вами суждений, а где нет. Если свободный журналист свободной страны Илья Азар говорит, что в России все плохо, то нет проблем, окей, все понятно. Но [неправильно] когда общественное мнение узурпируется и выдается за общественное теми, кто на самом деле его не представляет.',
					autor: 'Александр Сидякин, депутат',
					autorsPhoto: personPhoto,
				},
				{
					type: 'text',
					content:
						'Правозащитники восприняли это закон однозначно. «Если до декабря 2011 года в стране была управляемая демократия имени Суркова, — считает Александр Черкасов, — Где среди пластиковых деревьев ещё бегали какие-то живые звери — как мы — то в 2012 году наступил авторитаризм. Который уже не нуждался в декорациях». ',
				},
			],
			materials: [
				{
					type: 'reference',
					name: 'Силовой разгон',
					numb: 1,
					discription:
						'Описание явления своими словами, из статей, Википедии, откуда угодно еще',
				},
				{
					type: 'reference',
					name: '«Оккупай Абай»',
					numb: 2,
					discription:
						'Оккупай Абай — акции протеста внесистемной российской оппозиции, проходившая в российском городе Москве с 8 по 16 мая 2012 года, и, в опосредованном виде, до 19 мая, когда протест окончательно расплылся. Начало акций связывают с инаугурацией Президента Российской Федерации Владимира Путина, вступление которого в должность внесистемной оппозицией оценивается как незаконное.',
				},
				{
					type: 'record',
					discription: 'Описание сюжета записи',
					autor: 'Олег Орлов',
					year: '2021',
					recordSrc: noize,
				},
			],
			sources: ['Циклопедия', 'Новая Газета'],
		},

		{
			dateYear: '2012',
			dateMonth: 'июль',
			sections: [
				{
					type: 'text',
					content:
						'Не календарный — настоящий 2012 год наступил в июле. Тогда Госдума приняла поправки в закон о митингах — и закон об иностранных агентах. Вступить в силу он должен был 20 ноября 2012 года. Тогда же началось первый массовый политический процесс — «Болотное дело».',
					meaningfulPhrases: ['Болотное дело'],
				},
				{
					type: 'text',
					content:
						'«Мы видели, что происходит что-то необычное для постсоветской России, — отмечает Олег Орлов. — Создавалось ощущение, что всё движется к откровенно репрессивной системе. Но, конечно, представить себе, что мы вернёмся к практике советских репрессий, мы не могли. Мы готовились отразить эту атаку на гражданское общество и были уверены, что в какой-то мере это получится».',
				},
			],
			materials: [
				{
					type: 'reference',
					name: 'Болотное дело',
					numb: 3,
					discription:
						'Расследованное Следственным комитетом Российской Федерации уголовное дело о массовых беспорядках и случаях насилия в отношении представителей органов правопорядка, по мнению следствия, имевших место во время акции протеста на подходе колонн протестующих, двигавшихся по Большой Якиманке, к месту заключительного митинга на Болотной площади. Было задержано около 400 демонстрантов, в отношении более чем 30 человек возбудили уголовные дела.',
				},
			],
			sources: ['Циклопедия'],
		},

		{
			dateYear: '2012',
			dateMonth: 'май',
			sections: [
				{
					type: 'text',
					content:
						'Позицию по поводу нового закона Мемориал выразил в своём заявлении.',
				},
				{
					type: 'document',
					name: 'Заявление Международного Мемориала 21 сентября 2012 года О законе об «иностранных агентах» ',
					text: 'Закон этот — антиправовой и аморальный по самой своей сути. Антиправовой — потому что наделяет исполнительную власть прерогативами суда. И аморальный — потому что априори предполагает, что организации, получающие средства из-за рубежа, действуют по указке своих спонсоров, то есть высшей государственной мудростью провозглашает дешевый блатной афоризм: «Кто вас ужинает, тот вас и танцует».',
				},
			],
			sources: ['Циклопедия'],
		},

		{
			title: {
				name: '«Мы не агенты!»',
			},
			dateYear: '2013',
			dateMonth: 'февраль',
			sections: [
				{
					type: 'text',
					content:
						'Движение мемориальцев не только опасалось попасть в список «иноагентов» и видело в новых законах отголоски шпиономании 1930-х годов. С самого начала «Мемориал» стал активно бороться за отмену иноагентского законодательства.',
					meaningfulPhrases: ['шпиономании'],
				},
				{
					type: 'text',
					content:
						'С момента внесения законопроекта в Госдуму юрист правозащитного центра «Мемориал» Фуркат Тишаев стал продумывать аргументацию для подачи жалобы в ЕСПЧ. Как только закон был принят в последней редакции, юрист получил возможность подготовить текст жалобы от имени одиннадцати НКО, которые могут стать потенциальными «иноагентами».',
				},
				{
					type: 'text',
					content:
						'Доводы жалобы строились вокруг нарушения четырёх статей Европейской конвенции по правам человека:',
				},
				{
					type: 'important text',
					content:
						'клеймо «иностранного агента», которое в русском языке прочно ассоциируется со шпионом, ограничивает свободу выражения мнения (10 ст.) и свободу собраний и объединений (11 ст.);',
				},
				{
					type: 'important text',
					content:
						'внесение иноагентов в специальный реестр и обязанность предоставлять дополнительную отчётность, по мнению заявителей, нарушило 14 статью (запрещение дискриминации);',
				},
				{
					type: 'important text',
					content:
						'постоянная угроза проверок, штрафов и ограничение на получение иностранного финансирования нарушает 18 статью (пределы использования ограничений прав).',
				},
				{
					type: 'text',
					content:
						'7 февраля представители правозащитных организаций провели совместную пресс-конференцию «Мы не агенты!». «Мы представляем себя в жалобе как потенциальную жертву, то есть ни к кому из нас закон применен не был. Но системная угроза есть, закон висит над нами как Дамоклов меч. Мы надеемся, что ЕСПЧ согласится с нами», — сказал член Совета ПЦ «Мемориал» Олег Орлов. Так мемориальское движение встало в авангард правозащитных НКО, сопротивлявшихся закону об иностранных агентах.',
				},
			],
			materials: [
				{
					type: 'reference',
					name: 'Шпиономания',
					numb: 4,
					discription:
						'Чрезмерная подозрительность, навязчивое стремление видеть в чьей-либо деятельности признаки шпионажа или желание разгласить государственную тайну',
				},
				{
					type: 'illustration',
					src: illustration1,
				},
			],
			sources: ['Вики-словарь'],
		},

		{
			title: {
				illustration: partHeader1,
				name: 'Поиск агентов начался',
			},
			dateYear: '2013',
			dateMonth: 'Март',
			sections: [
				{
					type: 'text',
					content:
						'В феврале 2013 года президент выступал на заседании коллегии ФСБ. Он похвалил растущую активность гражданского общества — и одновременно с этим возмутился попытками некоторых НКО говорить от его имени.',
				},
				{
					type: 'quote',
					text: 'Ни у кого нет монополии на право говорить от имени всего российского общества, тем более у структур, управляемых и финансируемых из‑за рубежа, а значит, неизбежно обслуживающих чужие интересы.',
					autor: 'Имя Фамилия, должность',
					autorsPhoto: personPhoto,
				},
				{
					type: 'text',
					content:
						'Путин указал своим бывшим коллегам на установленный «порядок деятельность НКО» – в особенности финансируемых из-за границы. И потребовал любые попытки «иностранных партнёров» вмешаться в дела России – видимо, руками этих НКО.',
				},
				{
					type: 'text',
					content:
						'Через месяц прокуратура начала проверять НКО по всей стране. «Проверки стартовали далеко за пределами Москвы и две-три недели мы просто наносили флажки на карту, понимая, что кольцо сжимается, а значит прокуроры придут и к НКО в Москве, и в Мемориал», – вспоминает юрист ПЦ Мемориал Кирилл Коротеев.',
				},
			],
			sources: ['Сайт Президента России', 'Источник'],
		},

		{
			dateYear: '2013',
			dateMonth: 'июль',
			sections: [
				{
					type: 'text',
					content:
						'Сотрудники антидискриминационного центра (АДЦ) «Мемориал» в Санкт-Петербурге защищали самые уязвимые группы — мигрантов, цыган, представителей ЛГБТ и многих-многих других. Правозащитники не только оказывали адресную юридическую помощь и вели стратегические дела — они регулярно выезжали для полевых исследований и писать доклады для международных институций.',
				},
				{
					type: 'text',
					content:
						'26 марта в их офисе появился молодой человек, напомнивший правозащитникам Чичикова — «не красавец, но и не дурной наружности, ни слишком толст, ни слишком тонок». Он представился помощником прокурора Невского района Дмитрием Смирновым и привёл с собой большую команду подмастерьев — двух полицейских, по одному сотруднику МЧС, ФНС и Роспотребнадзора.',
				},
				{
					type: 'text',
					content: 'Непрошенные гости объявили, что будут проводить проверку.',
				},
				{
					type: 'important text',
					content:
						'«Стоят ли швабры в отдельном помещении? Есть ли у секретаря прививка от кори? Лицензированы ли программы на компьютерах? Почему отсутствует плафон на лампочке?»',
				},
				{
					type: 'text',
					content:
						'Проверяющие постоянно переключались с одной темы на другую. Но руководители центра Ольга Абраменко и Стефания Кулаева не волновались — они всегда следовали букве закона.',
				},
				{
					type: 'text',
					content:
						'Проверка сопровождалась многочасовыми «опросами», изъятием документов и публикаций Центра. В итоге представители МЧС и Роспотребнадзора вынесли «суждения» с перечнем недочётов: маленький дверной проём, отсутствие «инструментальных замеров уровня микроклимата и акустических шумов», нарушения пожарной безопасности.',
				},
				{
					type: 'text',
					content:
						'Правозащитники отправились в ведомства получать предупреждения. Ольга Абраменко была в МЧС, где сотрудники очень удивились незначительности предписанных нарушений. «Скажите, чего к вам прокуроры так прицепились?» — изумился начальник МЧС.',
				},
				{
					type: 'text',
					content:
						'Стефания Кулаева получала предупреждение уже в Роспотребнадзоре — за неизмерение шумов в офисе. По иронии, в самом Роспотребнадзоре было очень шумно — рядом проходили строительные работы. «Но у нас не всегда так», — оправдывалась сотрудница. В её кабинете мемориальцы заметили три портрета Владимира Путина – на стене, на кружке и на столе, где обычно стоит фото любимого человека.',
				},
				{
					type: 'text',
					content:
						'Очень скоро в Центр снова нагрянул прокурор Смирнов и, слащаво улыбаясь, вручил постановление о возбуждении дела об административном правонарушении за осуществление деятельности НКО-иноагента, не включённой в соответствующий реестр. Поводом для преследования стал доклад Центра «Цыгане, мигранты, активисты: жертвы полицейского произвола», который правозащитники готовили для сессии Комитета ООН против пыток, прошедшей 8-12 ноября 2012 года — ещё до вступления в силу закона об иностранных агентах.',
				},
				{
					type: 'text',
					content:
						'По мнению прокуратуры, в докладе имеются признаки «призыва к противостоянию действующей власти и структурам», «выражено мнение об игнорировании сотрудниками правоохранительных органов действующего уголовного и уголовно-процессуального законодательства», а также «распространяется мнение о неэффективности действующего законодательства». Прокуратуру возмутило, что АДЦ «Мемориал» предложил свои рекомендации по изменению законов. По мнению ведомства, это говорит о том, что организация занималась политической деятельностью.',
				},
				{
					type: 'document',
					name: 'Из постановления прокурора Александра Юрасова',
					text: '... Вместе с тем, высказывания авторов ничем не обоснованы. Примеры о возможном несоблюдении сотрудниками правоохранительных органов действующего законодательства основаны на так называемых повествованиях и рассказах представителей цыганских меньшинств. Данные сведения не являются мотивированным обоснованием для дачи юридической оценки действий сотрудников правоохранительных органов, которые в свою очередь порочат честь и облик действующих сотрудников правоохранительных структур. Свои доводы, оценки и мнения сотрудники Организации впоследствии распространили для выработки общественного мнения гражданами и иными лицами, путём отражения в печатном издании, и разместив данную информацию на сайте Организации.',
				},
				{
					type: 'text',
					content:
						'От этого протокола мемориальцам удалось отбиться. На их сторону встал сначала мировой судья, а затем районный суд. Они вернули постановление прокурору из-за неустранимых нарушений.',
				},
				{
					type: 'text',
					content:
						'В этой борьбе мемориальцев поддерживал Комитет ООН против пыток, направивший письмо послу России в ООН.',
				},
				{
					type: 'document',
					name: 'Письмо председателя Комитета против пыток ООН Клаудио Гроссмана послу России в ООН 17 мая 2013 года',
					text: 'Мы обеспокоены тем, что, согласно полученной информации, действия, предпринятые против Антидискриминационного центра «Мемориал» и его руководства, могут быть связаны с предоставлением отчета Комитету против пыток...',
				},
			],
			materials: [
				{
					type: 'illustration',
					src: illustration2,
				},
				{
					type: 'record',
					discription: 'Описание сюжета записи',
					autor: 'Олег Орлов',
					year: '2021',
					recordSrc: noize,
				},
			],
			sources: ['Википедия'],
		},

		{
			dateYear: '2013',
			dateMonth: 'Март апрель',
			sections: [
				{
					type: 'text',
					content:
						'В конце марта (2013) у дверей офиса Правозащитного центра Мемориал в Каретном ряду собралась группа людей. Встречать неизвестных гостей вышел Олег Орлов. Перед ним оказались сотрудники прокуратуры с постановлением о проведении проверки. На вопрос, с чем она связана, ответили лаконично: «На основании Закона о прокуратуре». Искать собирались сразу всё.',
				},
				{
					type: 'text',
					content:
						'Прокуроров и сопровождающих их сотрудников МВД проводили в библиотеку — куда должны были выйти юристы Мемориала с документами. Но вслед за правоохранителями по коридорам офиса разбежались корреспонденты НТВ.',
				},
				{
					type: 'important text',
					content:
						'«Прокуроры остались в библиотеке, а НТВшники стали просто рыскать по кабинетам! — вспоминает Орлов. — И мы ничего не могли с ними сделать. Пришлось отдельно вызывать полицию, чтобы их выставить. Представляете: при прокурорах и МВД вызывать полицию, чтобы выгнать людей, которые с ними пришли!».',
				},
				{
					type: 'text',
					content:
						'Прокуроры затребовали огромный массив самых разных документов. Их интересовала вся бухгалтерская отчётность, все штатные расписания с указанием зарплат, копии соглашений, которые получали от фондов на те или иные пожертвования, документы руководящих органов, копии протоколов о проведении собраний… «И всё это требовали предоставить завтра. Наши юристы пытались их вежливо “посылать”. Выторговывать время, чтобы мы успели подготовить бумаги. И отказывались давать то, что по закону показывать мы не обязаны», — рассказывает Орлов. Черкасов вспоминает, что торг шёл за каждый документ: юристы требовали назвать основание для его предъявления, прокуроры тут же на месте искали их. Всего за время проверок в московских офисах прокурорам выдали 9 тысяч листов документации. «Самое неприятное, что бумага и краска — наши», — отмечает Черкасов.',
				},
				{
					type: 'text',
					content:
						'Орлов поясняет: это была не первая проверка Мемориала. Но с таким «хамством и агрессией» в организации столкнулись в первый раз. В коридорах офиса появилась тревога.',
				},
				{
					type: 'important text',
					content: 'В разговорах сотрудников звучало: «Началось»',
				},
				{
					type: 'text',
					content:
						'Через несколько дней Рогинский собрал сотрудников Мемориала. «Ну что, ребята, Нас сейчас начнут пропускать через это закон», — заявил он.',
				},
			],
			materials: [
				{
					type: 'sketch',
					src: sketchImage1,
					discription:
						'Проверяющие пришли и в офис Международного Мемориала. Исполнительный директор организации Елена Жемкова готовила кофе, строила планы на неделю. Размышляла о чем-то… Этот момент в дверь постучали. Прокуроры представились, прошли в помещение. Жемкова распорядилась угостить их кофе и печеньями.',
				},
			],
			sources: ['Википедия'],
		},

		{
			title: {
				illustration: partHeader2,
				name: 'Встреча общества и государства',
			},
			dateYear: '2013',
			dateMonth: 'Март апрель',
			sections: [
				{
					type: 'text',
					content:
						'30 апреля Московская прокуратура подвела итог проверкам — и внесла представление (отображение документа представления или выжимок из него в открывающемся окошке как у Медузы). В нём говорилось, что ПЦ Мемориал получает иностранное финансирование и занимается политической деятельностью. Таковой посчитали ведения списка политзаключенных — и работу ОВД-Инфо. «Меня это даже обрадовало, — признаётся Александр Черкасов. — Если бы прокуратура нашла нарушения в нашем уставе, в основной правозащитной деятельности… Но нет, политикой посчитали то, чем занималась «Хроника текущих событий» с 1968 года. Ведение реестра политических преследований». Прокуратура потребовала от Мемориала самостоятельно зарегистрироваться в реестре иностранных агентов.',
				},
				{
					type: 'text',
					content:
						'Представители надзорного ведомства решили вручить представление лично. Двое сотрудников пришли в офис в Каретном ряду. И даже изъявили желание услышать позицию Мемориала. Правозащитники тут же собрали Совет. Государство и гражданское общество в лице своих представителей смотрели в глаза друг другу.',
				},
				{
					type: 'text',
					content:
						'Мемориальцы начали выступать. «Мы говорили им в лицо всё, что думаем об этом законе, — рассказывает Олег Орлов. — Что сама по себе конструкция закона — антиправовая»',
				},
				{
					type: 'memorial quote',
					text: 'Как устроен закон FARA В США, на который ссылались наши законодатели? Иностранным агентом признают за лоббистскую деятельность в интересах иностранного патрона. Когда это можно доказать в суде. А в нашем законе есть коварная формулировка, что признать агентом могут «в том числе» за деятельность в интересах иностранных акторов, которые финансируют организацию. А что помимо этого «в том числе»? Где доказательство, что мы действуем в интересах тех, кто нас финансирует? Доказать это невозможно. Этот закон нужен, чтобы власть могла заклеймить своих противников.',
					autor: 'Олег Орлов, правозащитник «Мемориала»',
				},
				{
					type: 'text',
					content:
						'Прокуроры оказались не готовы к этому. «Они совершенно не привыкли чтобы с ними так говорили, — вспоминает Орлов. — Это было для них очень неожиданно и неприятно. Лица были перекошены. Но это был тот редкий случай, когда обычная для прокуроров в судебном заседании маска скучающего человека спала — и за ней открылись настоящие эмоции живого человека».',
				},
				{
					type: 'text',
					content:
						'Прокуроры попытались ответить на обвинения правозащитников. Но, как утверждает Орлов, «человеческих аргументов» для этого не нашли. Отвечали казёнными формулировками: «Есть закон и вы должны его исполнить». ',
				},
				{
					type: 'important text',
					content:
						'«Мы говорили: вы ведь юристы — и сами должны понимать, что этот закон не имеет отношения к праву. Поэтому мы не будем его исполнять. И по их глазам было видно, что они это понимают. Мы сказали, что не будем лгать, что мы иностранные агенты и самостоятельно регистрироваться в реестре». Прокуроры услышали этот ответ и ушли крайне недовольными.',
				},
			],
			sources: ['Циклопедия'],
		},

		{
			title: {
				name: 'Первое сражение',
			},
			dateYear: '2013',
			dateMonth: 'Март апрель',
			sections: [
				{
					type: 'text',
					content:
						'Началась борьба. Юрист Мемориала Кирилл Коротеев вспоминает, что в самом начале проверок прокуроры были встречены жёсткми вопросами об основаниях своих действий. «На эти вопросы они едва ли могли ответить. В основном, их позиция сводилась к “проверяем, потому что можем”. Поэтому и я, и другие юристы Мемориала начали искать способы оспорить эти проверки». К столичной прокуратуре подали иск.',
				},
				{
					type: 'text',
					content:
						'Аналогичные иски помогли подготовить и другим мемориальским организациям в регионам, которые также подверглись проверкам.',
				},
				{
					type: 'text',
					content:
						'Юристы искали любую зацепку, исследовали практику по жалобам на прокуратуру. В большинстве случаев их отклоняли, поскольку заявители оспаривали итоги проверок. Тогда мемориальцы решили поставить вопрос не только о результатах — но о самих полномочиях прокуроров. Оказалось, что к тому моменту уже более 10 лет в КС не поступало подобных обращений.',
				},
				{
					type: 'memorial quote',
					text: 'Так появилась идея отдельно оспорить именно начало проверки - и подать заявление в суд еще до того, как появится прокурорское представление. Мемориалы успели, был процесс уже в мае в Замоскворецком суде, а после отклонения апелляционных жалоб Мосгорсудом была подготовлена жалоба в КС. Идея оспорить проверку отдельно от ее результатов сработала, в 2015 году вышло вполне сносное постановление',
					autor: 'Кирилл Коротеев, юрист «Мемориала»',
				},
				{
					type: 'text',
					content:
						'Иски, судебные заседания, где юристы Мемориала выступали в том числе в интересах других НКО отнимали массу времени. Но, как уверяет Олег Орлов, ощущения, что основная работа правозащитников по помощи гражданам парализована, не возникало.',
				},
				{
					type: 'important text',
					content:
						'Мемориальцы восприняли это как открытие нового фронта: власть попыталась загнать гражданское общество в установленные рамки и нейтрализовать его. И теперь все силы нужно было пустить не только на работу по конкретным кейсам — а на эту общую борьбу, на то, чтобы отодвинуть навязанные рамки.',
				},
				{
					type: 'photo',
					image: seriesImage,
					name: 'Название фотографии, описание сюжета',
					autor: 'Автор фотографии',
					date: '2021',
					source: 'Источник: Медуза',
				},
				{
					type: 'text',
					content:
						'«После проверок народ понял, что ничего хорошего ждать не стоит, — признаёт Орлов. Конечно, удовольствие нам это всё не доставляло. Но никакого упадка и расстройства не было. Даже появился адреналин».',
				},
				{
					type: 'memorial quote',
					text: 'У всех было ощущение: «Да прорвемся!». Ей богу! Мы рассуждали так: Хорошо — они нас сейчас будут заставлять выполнять требованиям закона об иноагентах. Ну а мы будем драться! Мы только привлечем дополнительное внимание к проблеме. Вы на нас наехали — так  посмотрим, может вы и зубы обломаете. Это будет большой и сильный скандал.',
					autor: 'Олег Орлов, правозащитник «Мемориала»',
				},
				{
					type: 'text',
					content:
						'По словам Орлова, каждый судебный процесс, каждая жалоба воспринималась как этап этой борьбы. Кроме того, ещё в феврале 2013 года — даже до начала проверок — несколько крупнейших организаций подали жалобу на закон об иностранных агентах в ЕСПЧ. Тогда правозащитники жаловались ещё не на нарушение своих прав — а только на потенциальную опасность применения к ним антиправовых норм. «Мы ждали, что ЕСПЧ отреагирует, укажет власти на то, что положения закона противоречат Конвенции», — поясняет Орлов. — Не все верили, что российские власти тут же отменят закон. Но всё таки тогда власти не могли проигнорировать постановление ЕСПЧ. Мы рассчитывали, что власти изменят закон, что он не станет совсем уж репрессивным, что его применение не станет массовым, что мы нейтрализуем его действие».',
				},
				{
					type: 'text',
					content:
						'Сначала правозащитники ждали, что ЕСПЧ укажет на недостатки закона до того, как кто-то успеет пострадать от его применения. Этого не произошло. «Когда уже пошли проверки, мы дополнили жалобу, — отмечает Орлов. — Всё о чём мы предупреждали, начало реализовываться. Но ЕСПЧ трусливо молчал»',
				},
				{
					type: 'memorial quote',
					text: 'Вот уже начались суды. Наши юристы ездили в регионы, участвовали в заседаниях по другим мемориальским организациям. Мы постоянно дополняли жалобу, сообщали Суду, как к нам применяют этот Закон. Мы верили, что всё это важные этапы борьбы, что ЕСПЧ отреагирует на жалобу. И все затраченное на юридическую работу, на суды время, все эти усилия обеспечат решение ЕСПЧ в нашу пользу. Надежды были такие – и это поддерживало в нас определённый оптимизм. Никто тогда не думал, что исход нашей борьбы предрешён, мы дрались.',
					autor: 'Олег Орлов, правозащитник «Мемориала»',
				},
				{
					type: 'video',
					videoSrc: 'https://www.youtube.com/embed/1yuTJMFGxEw',
					name: 'Название видео, описание сюжета',
					autor: 'Автор видео',
					date: '2021',
					source: 'Источник: Медуза',
				},
			],
			sources: ['Источник', 'Источник'],
		},

		{
			title: {
				name: 'Суд над антидискриминационным центром',
			},
			dateYear: '2013',
			dateMonth: 'Март апрель',
			sections: [
				{
					type: 'text',
					content:
						'Прокуратуру не остановило мнение суда и ООН: в июле прокурор Адмиралтейского района Александр Юрасов подал гражданский иск, в котором попросил суд обязать АДЦ «Мемориал» внести себя в реестр иноагентов. А в ноябре уточнил исковые требования — и попросил суд собственноручно признать НКО иностранным агентом.',
				},
				{
					type: 'important text',
					content:
						'Подобный иск не имел прецедентов. Если в начале борьбы правозащитники находились в эйфории, то теперь риск признания «иноагентами» вовсе не был теоретическим. ',
				},
				{
					type: 'text',
					content:
						'После обсуждений внутри организации возник консенсус: центр не будет работать под вывеской «иностранного агента». Для правозащитников, которые годами боролись с дискриминацией, несоблюдение дискриминирующего закона стало делом принципа. А клеймо «иноагента» означало бы для них новые риски за несоблюдение закона об иноагентах — уже уголовного преследования.',
				},
				{
					type: 'text',
					content:
						'Стефания Кулаева даже отправилась в Москву, чтобы обсудить преследование Центра с коллегами из «Международного Мемориала». Она сказала, что АДЦ объявит о самоликвидации, если его признают «иностранным агентом». Но московские коллеги не поддержали это решение — они называли преследование петербургской НКО «эксцессом исполнителя». «Суд встанет на вашу сторону!» — уверяли её многие коллеги, а один известный адвокат вовсе поспорил на бутылку шампанского.',
				},
				{
					type: 'text',
					content:
						'Защищать «Мемориал» в суде стала адвокат Ольга Цейтлина, а двое специалистов — Елена Белорукова и Дмитрий Дубровский — проанализировали экспертное заключение, в котором доклад правозащитников был назван «политической деятельностью».',
				},
				{
					type: 'text',
					content:
						'Заседания по делу АДЦ «Мемориал» в суде продолжались несколько месяцев. На самом известном из них опрашивали эксперта, который обнаружил в докладе «политическую деятельность».',
				},
				{
					type: 'document',
					name: 'Что за документ и кем опубликован Дата его публикации Точное название документа',
					text: 'Когда я впервые прочитала в прокурорском представлении, за что именно нас преследуют (точнее, что выбрали основным поводом), то очень удивилась. Преследовать за отчет о нарушениях полиции, официально направленный в Комитет ООН против пыток — это казалось абсурдом. Сложно найти в сфере защиты прав человека тему настолько понятную и не вызывающую споров, как запрет пыток и недопустимость нарушений со стороны сотрудников силовых структур. То, что среди полицейских есть те, кто нарушает закон, не отрицают даже сами руководители правоохранительных ведомств, а та часть наиболее серьезных нарушений, которая доходит до судов, как правило, заканчивается обвинительными приговорами, хотя часто неоправданно мягкими, но факты убийств, пыток и нарушений при этом подтверждаются. С мелкими нарушениями правил и грубым обращением сталкивается, наверное, каждый человек, которому приходится иметь дело с полицией, независимо от причины обращения. И вряд ли даже сами сотрудники полиции решаться утверждать, что полицейские в России никогда не нарушают законы. Но вот публично утверждать, что нарушения в этой сфере существуют, оказывается, является политикой.',
				},
			],
			sources: ['Циклопедия'],
		},
	],
};

export default secondSeries;
