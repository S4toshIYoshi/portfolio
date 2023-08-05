import React, { ReactNode } from 'react';
import style from './Heading.module.scss';

type Props = {
	children: ReactNode;
};

const Heading = ({ children }: Props) => {
	return <h2 className={style.heading}>{children}</h2>;
};

export default Heading;
