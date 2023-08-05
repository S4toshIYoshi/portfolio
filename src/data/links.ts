import { ILinks } from '../types/links.interface';

export const LINKS_NAV: ILinks[] = [
	{
		nameRU: 'Главная',
		nameEN: 'Home',
		slug: 'home',
		url: './'
	},
	{
		nameRU: 'Проекты',
		nameEN: 'Projects',
		slug: 'projects',
		url: './projects'
	},
	{
		nameRU: 'Обо мне',
		nameEN: 'About me',
		slug: 'about',
		url: './about'
	},
	{
		nameRU: 'Связаться',
		nameEN: 'Contact',
		slug: 'contact',
		url: './contact'
	}
];
