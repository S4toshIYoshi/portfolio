import React, { FC, useContext } from 'react';
import style from './CardProject.module.scss';
import MiniCard from './MiniCard';
import Marking from '../../UI/Marking';
import Description from '../../UI/Description';
import Button from '../../UI/Button';
import { LanguageContext } from '../../providers/LanguageProvider';
import { ICardProject } from '../../types/project.interface';
import Card from '../../UI/Card';
import HeadingCard from './HeadingCard';
import { Link } from 'react-router-dom';

const CardProject: FC<ICardProject> = ({
	number,
	heading,
	description,
	category,
	img,
	slug
}) => {
	const { language } = useContext(LanguageContext);

	return (
		<Card className={style.card} styles={false}>
			<div className={style.wrapperImg}>
				<img src={img} alt={slug} />
			</div>
			<div className={style.content}>
				<div className={style.wrapperCategory}>
					{category.map((el, idx) => (
						<MiniCard key={idx}>{el}</MiniCard>
					))}
				</div>
				<Marking>{`project ${number}`}</Marking>
				<HeadingCard>{heading}</HeadingCard>
				<Description className={style.description}>{description}</Description>
				<Button>
					<Link to={`/projects/${slug}`} style={{ color: '#fff' }}>
						{language === 'RU' ? 'Подробнее' : 'View Detals'}
					</Link>
				</Button>
			</div>
		</Card>
	);
};

export default CardProject;
