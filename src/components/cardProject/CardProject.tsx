import React, { FC, useContext } from 'react';
import style from './CardProject.module.scss';
import MiniCard from './MiniCard';
import Marking from './Marking';
import Heading from '../../UI/Heading';
import Description from '../../UI/Description';
import Button from '../../UI/Button';
import { LanguageContext } from '../../providers/LanguageProvider';
import { ICardProject } from '../../types/project.interface';

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
		<div className={style.card}>
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
				<Heading>{heading}</Heading>
				<Description>{description}</Description>
				<div className={style.wrapperButton}>
					<Button onClick={() => alert(slug)}>
						{language === 'RU' ? 'Подробнее' : 'View Detals'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CardProject;
