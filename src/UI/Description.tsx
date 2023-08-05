import React, { ReactNode } from 'react';
import style from './Description.module.scss';
import cn from 'classnames';
import classNames from 'classnames';

type Props = {
	children: ReactNode;
	className?: string;
};

const Description = ({ children, className }: Props) => {
	return <a className={cn(style.description, className)}>{children}</a>;
};

export default Description;
