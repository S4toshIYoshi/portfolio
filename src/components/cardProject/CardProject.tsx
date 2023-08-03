import React, { FC } from 'react';
import style from './CardProject.module.scss';

interface ICardProject {
	typeProject: string;
	number: number | string;
	heading: string;
	description: string;
	img: string;
	slug: string;
}

const CardProject: FC<ICardProject> = ({
	typeProject,
	number,
	heading,
	description,
	img,
	slug
}) => {
	return <div className={style.card}></div>;
};

export default CardProject;
