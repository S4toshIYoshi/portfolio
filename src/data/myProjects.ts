import { IProject } from '../types/project.interface';
import moveApp from '../assets/images/movieApp.png';
import gallery from '../assets/images/gallery.png';
import yanki from '../assets/images/yanki.png';
import ojjo from '../assets/images/ojjo.png';
import welbex from '../assets/images/welbex.png';
import develops from '../assets/images/develops.png';
import backendECom from '../assets/images/backendE-com.png';
import gameShopReact from '../assets/images/gameShopReact.png';
import findNumber from '../assets/images/findNumber.png';

export const ALL_PROJECTS: IProject[] = [
	{
		number: 10,
		headingRu: 'Игра Найди Число',
		headingEn: 'Find the number game',
		descriptionRu:
			'Игра создана с 0 на нативном JS, HTMl, CSS, WebPack и анимаций написсаных мною. Без использования сторонних библиотек. Эта игра развивает: Произвольное внимание, Концентрацию и переключение внимания, Зрительное восприятие',
		descriptionEn:
			'The game was created from scratch on native JS, HTMl, CSS, WebPack. Without the use of third-party libraries. This game develops: Arbitrary attention, Concentration and switching of attention, Visual perception',
		slug: 'find-number',
		category: ['js app'],
		img: findNumber,
		stack: ['JavaScript', 'HTML', 'CSS', 'WebPack'],
		url: 'https://github.com/S4toshIYoshi/gameNumber',
		deploy: 'https://s4toshiyoshi.github.io/gameNumber/'
	},
	{
		number: 9,
		headingRu: 'Онлайн Галерея',
		headingEn: 'Online Gallery',
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
		headingRu: 'Маркетплейс Backend часть',
		headingEn: 'Marketplace Backend part',
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
		headingEn: 'twitter clone',
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
		headingRu: 'Поиск Фильмов',
		headingEn: 'Movie Search',
		descriptionRu:
			'В приложении есть подборки популярных фильмов, топы, поиск по категориям и уникальная функция которая подбирает случайный фильм. Также в приложении удобнйы адаптивный интерфес и отличнйы дизайн',
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
	}
];

export const PROJECTS: IProject[] = [
	ALL_PROJECTS[0],
	ALL_PROJECTS[4],
	ALL_PROJECTS[6]
];
