import { useContext } from 'react';
import style from './Projects.module.scss';
import { LanguageContext } from '../../providers/LanguageProvider';
import { ALL_PROJECTS } from '../../data/myProjects';
import CardProject from '../cardProject/CardProject';

const Projects = () => {
	const { language } = useContext(LanguageContext);

	return (
		<main className={style.projects}>
			{' '}
			{ALL_PROJECTS.map(el => (
				<CardProject
					key={el.slug}
					slug={el.slug}
					number={el.number}
					description={language === 'RU' ? el.descriptionRu : el.descriptionEn}
					heading={language === 'RU' ? el.headingRu : el.headingEn}
					category={el.category}
					img={el.img}
				/>
			))}
		</main>
	);
};

export default Projects;
