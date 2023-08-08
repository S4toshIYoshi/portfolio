import React, { useContext } from 'react';
import style from './RecentProjects.module.scss';
import Heading from '../../../UI/Heading';
import { LanguageContext } from '../../../providers/LanguageProvider';
import Button from '../../../UI/Button';
import CardProject from '../../cardProject/CardProject';
import { PROJECTS } from '../../../data/myProjects';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../UI/ButtonLink';

type Props = {};

const RecentProjects = () => {
	const { language } = useContext(LanguageContext);

	const headingText: string =
		language === 'RU' ? 'Недавние проекты' : 'Recent projects';

	const buttonText: string = language === 'RU' ? 'посмотреть все' : 'view all';

	return (
		<section className={style.section}>
			<div className={style.header}>
				<Heading>{headingText}</Heading>
				<ButtonLink url='./projects' className={style.button}>
					{buttonText}
				</ButtonLink>
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
				<ButtonLink url='./projects' className={style.buttonMobile}>
					{buttonText}
				</ButtonLink>
			</div>
		</section>
	);
};

export default RecentProjects;
