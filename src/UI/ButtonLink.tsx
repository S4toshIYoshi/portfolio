import { FC, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import cn from 'classnames';
import style from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { IButtonLink } from '../types/button.interface';
import Button from './Button';

const ButtonLink: FC<IButtonLink> = ({ children, className, url }) => {
	return (
		<Link to={url} className={style.link}>
			<Button onClick={() => window.scroll(0, 0)} className={className}>
				{children}
			</Button>
		</Link>
	);
};

export default ButtonLink;
