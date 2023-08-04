import React, { ReactNode } from 'react';
import style from './MiniCard.module.scss';
type Props = {
	children: ReactNode;
};

const MiniCard = ({ children }: Props) => {
	return <div className={style.card}>{children}</div>;
};

export default MiniCard;