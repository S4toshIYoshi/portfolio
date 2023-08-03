import React, { ReactNode } from 'react';
import style from './Heading.module.scss';

type Props = {
	children: ReactNode;
};

const Heading = ({ children }: Props) => {
	return <h3 className={style.heading}>{children}</h3>;
};

export default Heading;
