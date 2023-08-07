import React, { useContext } from 'react';
import style from './RecentProjects.module.scss';
import Heading from '../../../UI/Heading';
import { LanguageContext } from '../../../providers/LanguageProvider';
import Button from '../../../UI/Button';
import CardProject from '../../cardProject/CardProject';
import { PROJECTS } from '../../../data/myProjects';
import { Link } from 'react-router-dom';

type Props = {};

const RecentProjects = () => {
	const { language } = useContext(LanguageContext);

	const headingText: string =
		language === 'RU' ? 'Недавние преокты' : 'Recent projects';

	const buttonText: string = language === 'RU' ? 'посмотреть все' : 'view all';

	return (
		<section className={style.section}>
			<div className={style.header}>
				<Heading>{headingText}</Heading>
				<Button className={style.button}>
					<Link to='./projects' style={{ color: '#fff' }}>
						{buttonText}
					</Link>
				</Button>
			</div>
			<div className={style.projects}>
				{PROJECTS.map(el => (
					<CardProject
						key={el.slug}
						slug={el.slug}
						number={el.number}
						description={
							language === 'RU' ? el.descriptionRu : el.descriptionEn
						}
						heading={language === 'RU' ? el.headingRu : el.headingEn}
						category={el.category}
						img={el.img}
					/>
				))}
				<Button className={style.buttonMobile}>{buttonText}</Button>
			</div>
		</section>
	);
};

export default RecentProjects;
