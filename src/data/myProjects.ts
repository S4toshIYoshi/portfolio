import { IProject } from '../types/project.interface';
import moveApp from '../images/movieApp.png';
import gallery from '../images/gallery.png';
import yanki from '../images/yanki.png';
import ojjo from '../images/ojjo.png';
import welbex from '../images/welbex.png';
import develops from '../images/develops.png';
import backendECom from '../images/backendE-com.png';
import gameShopReact from '../images/gameShopReact.png';

export const ALL_PROJECTS: IProject[] = [
	{
		number: 9,
		headingRu: 'Онлайн Галерея',
		headingEn: 'Online gallery',
		descriptionRu:
			'Этот сайт предлагает удобный и интуитивно понятный минималистичный интерфейс, который позволяет любителям искусства легко находить и наслаждаться произведениями искусства из разных эпох и жанров. Тестовое задание Framework Team',
		descriptionEn:
			'My site offers a user-friendly and accessible minimalistic interface that makes it easy for art lovers to find and enjoy works of art from different eras and genres. Test task Framework Team',
		slug: 'gallery-app',
		category: ['react app'],
		img: gallery,
		stack: ['React', 'SCSS', 'AJAX'],
		url: 'https://github.com/S4toshIYoshi/Gallery',
		deploy: 'https://s4toshiyoshi.github.io/Gallery/'
	},
	{
		number: 8,
		headingRu: 'Верстка сайта infinizai с помощью реакт',
		headingEn: 'Layout web-site infinizai react',
		descriptionRu:
			'Тестовое задания компании amoCRM, на этом сайте используеться react, адаптивная верстка',
		descriptionEn:
			'Test task of amoCRM company, this site uses react, adaptive layout',
		slug: 'infinizai',
		category: ['Layout'],
		img: gameShopReact,
		stack: ['React', 'SCSS'],
		url: 'https://github.com/S4toshIYoshi/gameShopReact',
		deploy: 'https://s4toshiyoshi.github.io/gameShopReact/'
	},
	{
		number: 7,
		headingRu: 'Маркетплейс Frontend часть',
		headingEn: 'Marketplace Frontend part',
		descriptionRu: 'реализована авторизация, поиск товаров, сервисы',
		descriptionEn: 'implemented authorization, product search, services',
		slug: 'e-com-client',
		category: ['next app'],
		img: develops,
		stack: ['TypeScript', 'NextJS', 'Tailwind css', 'Axios', 'RTK query'],
		url: 'https://github.com/S4toshIYoshi/client-eCom'
	},
	{
		number: 6,
		headingRu: 'Маркетплейс backend часть',
		headingEn: 'Marketplace backend part',
		descriptionRu:
			'Использовалась микро сервисная архитектура работа с PostgreSql с помощью Prisma. Реализованно получение товараов, изменение товаров, авторизация, коментарии, получение и изменение категорий, поиск по категориям и имени.',
		descriptionEn:
			'Used micro service architecture working with PostgreSql using Prisma. Implemented receiving goods, changing goods, authorization, comments, receiving and changing categories, search by category and name.',

		slug: 'e-com-server',
		category: ['backend'],
		img: backendECom,
		stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
		url: 'https://github.com/S4toshIYoshi/client-eCom',
		deploy: 'https://github.com/S4toshIYoshi/back-end-ecom'
	},
	{
		number: 5,
		headingRu: 'Клон твиттера',
		headingEn: 'twitter-clone',
		descriptionRu: 'Командный проект',
		descriptionEn: 'team project',
		slug: 'twitter-clone',
		category: ['next app'],
		img: develops,
		stack: ['TypeScript', 'NextJS', 'SCSS', 'Material UI'],
		url: 'https://github.com/S4toshIYoshi/twitter-clone-frontend'
	},
	{
		number: 4,
		headingRu: 'Поиск фильмов',
		headingEn: 'Movie search',
		descriptionRu:
			'В приложении есть подборки популярных фильмов, топы, поиск по категориям и уникальная функция которая подбирает случайный фильм. Также в приложении удобнйы адаптивный интерфес и отличны дизан',
		descriptionEn:
			'The application has selections of popular movies, tops, search by category and a unique feature that selects a random movie. Also, the application has a convenient adaptive interface and excellent design.',
		slug: 'movie-app',
		category: ['react app'],
		img: moveApp,
		stack: ['React', 'React Router', 'SCSS'],
		url: 'https://github.com/S4toshIYoshi/MovieAPP-dev',
		deploy: 'https://s4toshiyoshi.github.io/MovieAPP/'
	},
	{
		number: 3,
		headingRu: 'Верстка сайта Welbex',
		headingEn: 'Layout web-site Welbex',
		descriptionRu:
			'Тестовое задания компании amoCrm, на этом сайте используеться бэм, адаптивная верстка',
		descriptionEn: 'Test task by amoCrm, this site uses bam, adaptive layout',
		slug: 'welbex',
		category: ['Layout'],
		img: welbex,
		stack: ['HTML', 'CSS', 'JavaScript'],
		url: 'https://github.com/S4toshIYoshi/testTaskAmoCRMLandingPage',
		deploy: 'https://s4toshiyoshi.github.io/testTaskAmoCRMLandingPage/'
	},
	{
		number: 2,
		headingRu: 'Верстка сайта OJJO',
		headingEn: 'Layout web-site OJJO',
		descriptionRu:
			'Сайт адаптирован под все устройства, классы написанны по метадологии БЭМ',
		descriptionEn:
			'The site is adapted for all devices, the classes are written according to the BEM metadology',
		slug: 'ojjo',
		category: ['Layout'],
		img: ojjo,
		stack: ['HTML', 'CSS', 'JavaScript'],
		url: 'https://github.com/S4toshIYoshi/OJJO-website',
		deploy: 'https://s4toshiyoshi.github.io/OJJO-website/'
	},
	{
		number: 1,
		headingRu: 'Верстка сайта Yanki',
		headingEn: 'Layout web-site Yanki',
		descriptionRu:
			'Мой первый не плохо сверстанны макет и один из первых проектов выложенных на git hub',
		descriptionEn:
			'My first not bad layout and one of the first projects posted on git hub',
		slug: 'yanki',
		category: ['Layout'],
		img: yanki,
		stack: ['HTML', 'CSS'],
		url: 'https://github.com/S4toshIYoshi/WebSIteYankiTraing',
		deploy: 'https://s4toshiyoshi.github.io/WebSIteYankiTraing/'
	}
];

export const PROJECTS: IProject[] = [
	ALL_PROJECTS[0],
	ALL_PROJECTS[2],
	ALL_PROJECTS[5]
];
