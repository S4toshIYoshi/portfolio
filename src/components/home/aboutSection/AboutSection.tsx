import React from 'react';
import style from './AboutSection.module.scss';
import image from '../../../images/feedBack.png';
import ButtonVector from '../../../UI/ButtonVector';
import Heading from '../../../UI/Heading';
import Description from '../../../UI/Description';

const AboutSection = () => {
	return (
		<section className={style.aboutSection}>
			<div className={style.content}>
				<ButtonVector>Узнать больше</ButtonVector>
				<Heading>Николай Крошечкин</Heading>
				<div className={style.wrapperDescription}>
					<Description>
						Разработчик с глубокими знаниями JavaScript/TypeScript, React,
						функционального и объектно ориентированного программирования.{' '}
					</Description>
					<Description>
						Получаю профильное образование, занимаюсь frontend-разработкой. Так
						же есть не коммерческий опыт с языками С, C++ и С#.
					</Description>
				</div>
			</div>
			<div className={style.image}>
				<img src={image} alt='my photo' />
			</div>
		</section>
	);
};

export default AboutSection;
