import React from 'react';
import Card from '../../../UI/Card';
import Heading from '../../../UI/Heading';
import style from './SkillSetSection.module.scss';

type Props = {};

const SkillSetSection = (props: Props) => {
	return (
		<section className={style.skillSet}>
			<Card>
				<Heading>Набор Навыков</Heading>
			</Card>
		</section>
	);
};

export default SkillSetSection;
