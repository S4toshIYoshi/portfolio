export interface ILinks {
	nameRU: string;
	NameEN: string;
	slug: string;
	url: string;
}

export const LINKS_NAV = [
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
