import React, { useContext } from 'react';
import Card from '../../../UI/Card';
import Heading from '../../../UI/Heading';
import style from './SkillSetSection.module.scss';
import { SKILLS } from '../../../data/skills';
import { LanguageContext } from '../../../providers/LanguageProvider';

type Props = {};

const SkillSetSection = (props: Props) => {
	const { language } = useContext(LanguageContext);

	return (
		<section className={style.skillSet}>
			<Card>
				<Heading>{language === 'RU' ? 'Набор Навыков' : 'Skill Set'}</Heading>
				<div className={style.skills}>
					{SKILLS.map(el => {
						return (
							<div
								className={style.cardSkills}
								style={{
									background: `${el.color}`,
									color: el.colorText ? el.colorText : '#FFF'
								}}
							>
								{el.skill}
							</div>
						);
					})}
				</div>
			</Card>
		</section>
	);
};

export default SkillSetSection;
