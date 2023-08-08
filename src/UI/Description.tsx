import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import style from './Description.module.scss';
import cn from 'classnames';
import classNames from 'classnames';

interface Props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	className?: string;
}

const Description: FC<Props> = ({ children, className, ...rest }) => {
	return (
		<p {...rest} className={cn(style.description, className)}>
			{children}
		</p>
	);
};

export default Description;
