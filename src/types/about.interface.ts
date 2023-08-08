import { IconType } from 'react-icons';

export interface IAboutText {
	nameRu: string;
	nameEn: string;
	descriptionRu: string[];
	descriptionEn: string[];
}

export interface IAbout {
	section_header: string;
	section_presentation: string;
	section_projects: Array<string>;
}
export interface ICardsQuestion {
	text: string;
	icon: IconType;
}
