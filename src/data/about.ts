import { IAbout, IAboutText, ICardsQuestion } from '../types/about.interface';
import { AiFillLayout } from 'react-icons/ai'; // 1 пункт
import { BsFiletypeHtml } from 'react-icons/bs'; // 2 пункт

import { AiOutlineCloudServer } from 'react-icons/ai'; //3 пункт
import { TbWorldWww } from 'react-icons/tb'; //4 пункт
import { BiBrain } from 'react-icons/bi'; // 5 пункт
import { HiOutlineUserGroup } from 'react-icons/hi'; // 6 пункт

export const ABOUT_BRIEFLY: IAboutText = {
	nameRu: 'Николай Крошечкин',
	nameEn: 'Nikolay Kroshechkin',
	descriptionRu: [
		'Разработчик с глубокими знаниями JavaScript/TypeScript, React, функционального и объектно ориентированного программирования.',
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
		'расскажу то что Я фронтенд разработчик, программирую на JavaScript, пишу веб-приложения на современном стэке (react, typescript, nextjs) и создаю адаптивные веб-страницы на html, css,js. Отлично понимаю, как устроена веб-разработка, как происходит клиент-серверное взаимодействие. Ежедневно я развиваю свои hard-скиллы и глубже погружаюсь во фронденд-разработку. Я открыт к новым вызовам и готов присоединиться к компании, где смогу приносить пользу и профессионально развиваться. Так же прошел на основное обучение в школе 21 и сейчас активно там обучаюсь.',
	section_projects: [
		' мой веб сайт на котором вы сейчас это читайте: Для его создания я использовал React, TypeScript, Scss',
		'Онлайн галлерею. В этом проекте я использовал React и Scss так же запросы с сервера и рендеринг страницы в реальном времени т.е когда отправляеться и приходит запрос страница не обновляеться',
		'Приложения для поиска фильмов: Это мой первый преокт такого типа когда я его начинал я еще плохо знал что такое реакт, клиент серверное взаимодействия и т.д, но не смотря на это я его сделал. Стэк на котором он написан: React, JavaScript, Scss, React-router-dom и get запросы с API Кинопоиска.',
		'в разработке: маркет плейс по типу вайлдбериз стэк: TypeScript NextJS rtk query'
	]
};

export const ABOUT_CARDS: ICardsQuestion[] = [
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
		text: 'Могу работать с интернетом и документацией. Почему? Потмучто большенство своих навыков я получил из документации, информации в открытом доступе, общениии с сильными программистами и бесконечной практики.',
		icon: TbWorldWww
	},
	{
		text: ' Мне потребовалось всего полгода(из 1), чтобы уверенно освоить React, JavaScript, HTML, CSS и начать создавать свои первые проекты. Их, кстати, можно посмотреть тут. А на гит хабе и код варсе мой процесс развития',
		icon: BiBrain
	},
	{
		text: 'Командная работа. В Школе 21 (от сбера) у меня были реальные кейсы командной работы в написании сложных проектов. И могу сказать что я легко нахожу общий язык с коллегами, не боюсь ответственности и приветствую обмен идеями.',
		icon: HiOutlineUserGroup
	}
];
