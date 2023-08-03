import React from 'react';
import style from './Marking.module.scss';

type Props = {
	children: string;
};

const Marking = ({ children }: Props) => {
	return <div className={style.marking}>{children}</div>;
};

export default Marking;
