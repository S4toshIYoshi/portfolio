import { FC } from 'react';
import cn from 'classnames';
import style from './ButtonVector.module.scss';
import { IButton } from '../types/button.interface';
import icon from '../images/vectorRight.png';
import Marking from './Marking';

const ButtonVector: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<div className={style.wrapper}>
			<button className={cn(style.button, className)} {...rest}>
				<img src={icon} alt='vector' />
			</button>
			<Marking>{children}</Marking>
		</div>
	);
};

export default ButtonVector;
