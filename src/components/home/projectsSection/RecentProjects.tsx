import React, { useContext } from 'react';
import style from './RecentProjects.module.scss';
import Heading from '../../../UI/Heading';
import { LanguageContext } from '../../../providers/LanguageProvider';
import Button from '../../../UI/Button';

type Props = {};

const RecentProjects = () => {
	const { language } = useContext(LanguageContext);

	const headingText =
		language === 'RU' ? 'Недавние преокты' : 'Recent projects';

	const buttonText = language === 'RU' ? 'посмотреть все' : 'view all';

	return (
		<section className={style.section}>
			<div className={style.header}>
				<Heading>{headingText}</Heading>
				<Button>{buttonText}</Button>
			</div>
			<div></div>
		</section>
	);
};

export default RecentProjects;
