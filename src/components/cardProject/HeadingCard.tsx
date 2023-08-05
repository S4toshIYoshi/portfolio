import React from 'react';
import style from './HeadingCard.module.scss';

type Props = {
	children: string;
};

const HeadingCard = ({ children }: Props) => {
	return (
		<div className={style.wrapper}>
			<h3 className={style.heading}>{children}</h3>
		</div>
	);
};

export default HeadingCard;
