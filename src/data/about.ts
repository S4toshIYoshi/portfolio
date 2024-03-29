import { IAbout, IAboutText, ICardsQuestion } from '../types/about.interface';
import { AiFillLayout } from 'react-icons/ai'; // 1 пункт
import { BsFiletypeHtml, BsCashCoin } from 'react-icons/bs'; // 2 пункт

import { AiOutlineCloudServer } from 'react-icons/ai'; //3 пункт
import { TbWorldWww } from 'react-icons/tb'; //4 пункт
import { HiOutlineUserGroup } from 'react-icons/hi'; // 6 пункт

export const ABOUT_BRIEFLY: IAboutText = {
	nameRu: 'Николай Крошечкин',
	nameEn: 'Nikolay Kroshechkin',
	descriptionRu: [
		'Есть опыт работы на боевом проекте. Так же опыт общения с заказчиками. Грамотное выстраивание структуры задачи и ее анализ. По конкретным методологиям не приходилось работать, в нынешней компании есть понятия спринт и бэклог на этом все. На нынешнем месте работы использую стэк Next, React, TS, effector, GraphQl. Есть опыт в разработке wysiwyg редакторов с использованием библиотек editor Js или Slate.',
		'Получаю профильное образование, занимаюсь frontend-разработкой. Также есть некоммерческий опыт с языками С, C++ и С#.'
	],
	descriptionEn: [
		'Developer with deep knowledge of JavaScript/TypeScript, React, functional and object oriented programming.',
		'I get a specialized education, I am engaged in frontend development. I also have non-commercial experience with C, C++ and C#.'
	]
};

export const ABOUT_ME: IAbout = {
	section_header:
		'Ищу работу! Ниже я раскажу почему именно я отличный кандидат в вашу компанию',

	section_presentation:
		'расскажу то что я фронтенд разработчик с опытом работы и отличным пониманием продакшена, программирую на JavaScript/TypeScript, пишу веб-приложения на современном стэке. Отлично понимаю, как устроена веб-разработка, как происходит клиент-серверное взаимодействие. Ежедневно я развиваю свои hard-скиллы и глубже погружаюсь во фронденд-разработку. Я открыт к новым вызовам и готов присоединиться к компании, где смогу приносить пользу и профессионально развиваться.',
	section_projects: [
		' мой веб сайт на котором вы сейчас это читайте: Для его создания я использовал React, TypeScript, Scss',
		'Онлайн галлерею. В этом проекте я использовал React и Scss так же запросы с сервера и рендеринг страницы в реальном времени т.е когда отправляеться и приходит запрос страница не обновляеться',
		'Приложения для поиска фильмов: Это мой первый преокт такого типа когда я его начинал я еще плохо знал что такое реакт, клиент серверное взаимодействия и т.д, но не смотря на это я его сделал. Стэк на котором он написан: React, JavaScript, Scss, React-router-dom и get запросы с API Кинопоиска.',
		'в разработке: маркет плейс по типу вайлдбериз стэк: TypeScript NextJS rtk query'
	]
};

export const ABOUT_CARDS: ICardsQuestion[] = [
	{
		text: 'Есть коммерческий опыт разработки, и опыт взаимодействия с заказчиками',
		icon: BsCashCoin
	},
	{
		text: 'Есть опыт в написании веб-приложений на современном стэке (react, typescript, nextjs и т.д).',
		icon: AiFillLayout
	},
	{
		text: 'Есть опыт в написании адаптивных веб страниц на html, css, js.',
		icon: BsFiletypeHtml
	},
	{
		text: 'Понимаю как устроена веб разработка, как происходит клиент-серверное взаимодействие, рендеринг комопнентов и их жизненый цыкл, event loop и т.д',
		icon: AiOutlineCloudServer
	},
	{
		text: 'Могу работать с интернетом и документацией. большенство своих навыков я получил из документации, информации в открытом доступе, общениии с сильными программистами и бесконечной практики.',
		icon: TbWorldWww
	},
	{
		text: 'Командная работа. У меня были реальные кейсы командной работы в написании сложных проектов. И могу сказать что я легко нахожу общий язык с коллегами, не боюсь ответственности и приветствую обмен идеями.',
		icon: HiOutlineUserGroup
	}
];
