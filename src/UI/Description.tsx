import React, { ReactNode } from 'react';
import style from './Description.module.scss';

type Props = {
	children: ReactNode;
};

const Description = ({ children }: Props) => {
	return <a className={style.description}>{children}</a>;
};

export default Description;
