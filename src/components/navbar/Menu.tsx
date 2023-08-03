import { NavLink } from 'react-router-dom';
import { LINKS_NAV } from '../../data/links';

import style from './Menu.module.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';

const Menu = () => {
	const { language } = useContext(LanguageContext);

	return (
		<ul className={style.links}>
			{LINKS_NAV.map(el => {
				return (
					<li key={el.slug}>
						<NavLink
							to={el.url}
							className={({ isActive }) =>
								isActive ? style.active : style.link
							}
						>
							{language === 'EN' ? el.nameEN : el.nameRU}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default Menu;
