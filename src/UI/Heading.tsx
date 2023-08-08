import React, { FC, ReactNode } from 'react';
import style from './Heading.module.scss';
import cn from 'classnames';

type Props = {
	className?: string;
	children: ReactNode;
};

const Heading: FC<Props> = ({ children, className }) => {
	return <h2 className={cn(style.heading, className)}>{children}</h2>;
};

export default Heading;
