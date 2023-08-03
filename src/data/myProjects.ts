import { ICardProject } from '../types/project.interface';
import moveApp from '../images/movieApp.png';
import gallery from '../images/gallery.png';

export const PROJECTS: ICardProject[] = [
	{
		number: 3,
		heading: 'Приложение для поиска фильмов',
		description:
			'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		slug: 'movie-app',
		category: ['react', 'java script'],
		img: moveApp
	},
	{
		number: 2,
		heading: 'Онлайн галерея',
		description:
			'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
		slug: 'movie-app',
		category: ['react', 'java script'],
		img: gallery
	}
];
