import { useContext } from 'react';
import style from './Footer.module.scss';
import Logo from '../UI/Logo';

import { SiGmail, SiTelegram } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Description from '../UI/Description';
import { LanguageContext } from '../providers/LanguageProvider';
import { LINKS_NAV } from '../data/links';

const Footer = () => {
	const { language } = useContext(LanguageContext);

	return (
		<footer className={style.footer}>
			<div className={style.heading}>
				<Logo />
				<div className={style.icons}>
					<SiGmail />
					<SiTelegram />
					<BsFillTelephoneFill />
				</div>
			</div>

			<ul className={style.list}>
				{LINKS_NAV.map(el => {
					return (
						<li key={el.slug}>
							<Link to={el.url}>
								{language === 'EN' ? el.nameEN : el.nameRU}
							</Link>
						</li>
					);
				})}
			</ul>

			<div className={style.contact}>
				<div>
					<SiGmail fill='#fff' />{' '}
					<Description>nkroshechkin@gmail.com</Description>
				</div>
				<div>
					<SiTelegram fill='#fff' /> <Description>@memphisusr</Description>
				</div>

				<div>
					<BsFillTelephoneFill fill='#fff' />{' '}
					<Description>+79012718378</Description>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
