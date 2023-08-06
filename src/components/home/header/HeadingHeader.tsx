import React, { useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import style from './HeadingHeader.module.scss';

const HeadingHeader = () => {
	const { language } = useContext(LanguageContext);

	return (
		<div className={style.heading}>
			{language === 'RU' ? (
				<h1>
					Привет! Меня зовут <br />
					<span>Николай</span>, я
				</h1>
			) : (
				<h1>
					Hey! my name is <br />
					<span>Nikolay</span>, i'm
				</h1>
			)}
			<h2>
				Frontend
				<br />
				<span>developer</span>
			</h2>
		</div>
	);
};

export default HeadingHeader;
