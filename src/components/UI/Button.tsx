import { FC } from 'react';
import cn from 'classnames';
import style from './Button.module.scss';
import { IButton } from '../../types/button.interface';

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={cn(className, style.button)}>
			{children}
		</button>
	);
};

export default Button;
