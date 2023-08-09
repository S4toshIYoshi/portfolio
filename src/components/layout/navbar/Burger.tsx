import { useState } from 'react';
import Menu from './Menu';
import style from './Burger.module.scss';
import Switcher from '../../UI/Switcher';
import cn from 'classnames';

type Props = {};

const Burger = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	document.body.style.overflow = isOpen ? 'hidden' : '';

	return (
		<div className={style.burger}>
			<button
				className={style.button}
				onClick={() => setIsOpen(isOpen ? false : true)}
			>
				<span className={cn(style.line, isOpen ? style.open : '')}></span>
			</button>
			<div className={style.endPosition}>
				<div className={cn(style.field, isOpen ? style.open : style.close)}>
					<div className={style.wrapper}>
						<Menu action={setIsOpen} />
						<Switcher
							first='RU'
							last='EN'
							action={() => console.log('switch')}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Burger;
