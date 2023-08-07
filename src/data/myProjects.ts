import { IProject } from '../types/project.interface';
import moveApp from '../images/movieApp.png';
import gallery from '../images/gallery.png';

export const PROJECTS: IProject[] = [
	{
		number: 2,
		headingRu: 'Онлайн Галерея',
		headingEn: 'Online gallery',
		descriptionRu:
			'Этот сайт предлагает удобный и интуитивно понятный минималистичный интерфейс, который позволяет любителям искусства легко находить и наслаждаться произведениями искусства из разных эпох и жанров.',
		descriptionEn:
			'My site offers a user-friendly and accessible minimalistic interface that makes it easy for art lovers to find and enjoy works of art from different eras and genres.',
		slug: 'gallery-app',
		category: ['react app'],
		img: gallery
	},
	{
		number: 1,
		headingRu: 'Поиск фильмов',
		headingEn: 'Movie search',
		descriptionRu:
			'В приложении есть подборки популярных фильмов, топы, поиск по категориям и уникальная функция которая подбирает случайный фильм. Также в приложении удобнйы адаптивный интерфес и отличны дизан',
		descriptionEn:
			'The application has selections of popular movies, tops, search by category and a unique feature that selects a random movie. Also, the application has a convenient adaptive interface and excellent design.',
		slug: 'movie-app',
		category: ['react app'],
		img: moveApp
	}
];

export const ALL_PROJECTS: IProject[] = [...PROJECTS];
