import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import Description from '../UI/Description';
import style from './CardQuestion.module.scss';

type Props = {
	Icon: IconType;
	text: string;
};

const CardQuestion: FC<Props> = ({ Icon, text }) => {
	return (
		<div className={style.card}>
			<Icon color='#fff' size={100} />
			<Description className={style.text}>{text}</Description>
		</div>
	);
};

export default CardQuestion;
