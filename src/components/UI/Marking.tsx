import React, { ReactNode } from 'react';
import style from './Marking.module.scss';

type Props = {
	children: ReactNode;
};

const Marking = ({ children }: Props) => {
	return <div className={style.marking}>{children}</div>;
};

export default Marking;
