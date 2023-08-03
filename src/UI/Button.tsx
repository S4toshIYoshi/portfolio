import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
}

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button {...rest} className={cn(className, style.button)}>
			{children}
		</button>
	);
};

export default Button;
