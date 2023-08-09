export interface IProject {
	number: number | string;
	headingRu: string;
	headingEn: string;
	descriptionRu: string;
	descriptionEn: string;
	img?: string;
	slug: string;
	category: string[];
	stack: string[];
	url: string;
	deploy?: string;
}

export interface ICardProject {
	number: number | string;
	heading: string;
	description: string;
	img?: string;
	slug: string;
	category: string[];
	stack: string[];
	url: string;
	deploy?: string;
}
