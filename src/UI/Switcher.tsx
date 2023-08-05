import React, { FC, MouseEventHandler, useContext, useState } from 'react';
import style from './Switcher.module.scss';
import cn from 'classnames';
import { LanguageContext } from '../providers/LanguageProvider';

interface ISwitcher {
	first: string;
	last: string;
	action: MouseEventHandler;
	className?: string;
}

const Switcher: FC<ISwitcher> = ({ first, last, action, className }) => {
	const { language, setLanguage } = useContext(LanguageContext);
	return (
		<div
			onClick={() => setLanguage(language === 'EN' ? 'RU' : 'EN')}
			className={cn(style.switcher, className)}
		>
			<div className={style.switcherItem}>{first}</div>
			<div className={style.switcherItem}>{last}</div>
			<div
				className={cn(style.selectBox, language === 'EN' ? style.langEn : '')}
			></div>
		</div>
	);
};

export default Switcher;
