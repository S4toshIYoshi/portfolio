import React, { FC, useContext } from 'react';
import style from './CardProject.module.scss';
import Marking from '../UI/Marking';
import Description from '../UI/Description';
import ButtonLink from '../UI/ButtonLink';
import { LanguageContext } from '../../providers/LanguageProvider';
import { ICardProject } from '../../types/project.interface';
import Card from '../UI/Card';
import HeadingCard from './HeadingCard';
import { SKILLS, TSkills } from '../../data/skills';
import { BsGithub } from 'react-icons/bs';
import SkillCard from '../UI/SkillCard';
import Button from '../UI/Button';

const CardProject: FC<ICardProject> = ({
	number,
	heading,
	description,
	category,
	img,
	slug,
	stack,
	url,
	deploy
}) => {
	const { language } = useContext(LanguageContext);

	function searchSkill(search: string) {
		return SKILLS.find(skills => skills.skill === search);
	}

	const skills: Array<TSkills> = [];

	stack.forEach(el => {
		const result = searchSkill(el);
		if (result) {
			skills.push(result);
		}
	});

	return (
		<Card className={style.card} styles={false}>
			<div className={style.wrapperImg}>
				<img src={img} alt={slug} />
			</div>
			<div className={style.content}>
				<div className={style.wrapperStack}>
					{skills.map((el, idx) => (
						<SkillCard
							key={idx}
							color={el.color}
							colorText={el.colorText}
							skill={el.skill}
						/>
					))}
				</div>
				<Marking>{`project ${number}`}</Marking>
				<HeadingCard>{heading}</HeadingCard>
				<Description className={style.description}>{description}</Description>
				<div className={style.buttonWrapper}>
					<ButtonLink url={url} className={style.button}>
						{language === 'RU' ? 'Подробнее на' : 'View Detals in'}
						<BsGithub />
					</ButtonLink>
					{!!deploy ? (
						<a href={deploy} target='_blank'>
							<Button>
								{language === 'RU' ? 'Перейти На Сайт' : 'Go To Website'}
							</Button>
						</a>
					) : (
						<Button>
							{language === 'RU' ? 'В Разработке' : 'In Developing'}
						</Button>
					)}
				</div>
			</div>
		</Card>
	);
};

export default CardProject;
