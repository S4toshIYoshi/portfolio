import { useState } from 'react';

import Description from '../UI/Description';
import { ABOUT_CARDS, ABOUT_ME } from '../../data/about';
import style from './About.module.scss';
import CardQuestion from './CardQuestion';
import { ICardsQuestion } from '../../types/about.interface';
import Heading from '../UI/Heading';
import Button from '../UI/Button';
import MainButton from '../shared/mainButton/MainButton';

type Props = {};

const About = (props: Props) => {
	return (
		<main className={style.about}>
			<Heading>О себе</Heading>
			<Description>{ABOUT_ME.section_presentation}</Description>

			<div className={style.wrapper}>
				<Heading>
					Почему я <span style={{ color: '#118da8' }}>отличный кандидат</span>?
				</Heading>
			</div>

			<div className={style.wrapperQuestion}>
				{ABOUT_CARDS.map((el: ICardsQuestion, idx: number) => {
					return <CardQuestion key={idx} Icon={el.icon} text={el.text} />;
				})}
			</div>

			<div className={style.wrapperFeedBack}>
				<MainButton />
			</div>
		</main>
	);
};

export default About;
