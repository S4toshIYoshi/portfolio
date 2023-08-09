import { useContext } from 'react';
import style from './Footer.module.scss';
import Logo from '../../UI/Logo';

import { SiGmail, SiTelegram } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Description from '../../UI/Description';
import { LanguageContext } from '../../../providers/LanguageProvider';
import { LINKS_NAV } from '../../../data/links';
import { LINKS_FOOTER, LINKS_ME } from '../../../data/feedback';

const Footer = () => {
	const { language } = useContext(LanguageContext);

	return (
		<footer className={style.footer}>
			<div className={style.heading}>
				<Logo />
				<div className={style.icons}>
					{LINKS_ME.map((el, idx) => {
						return (
							<a key={idx} href={el.url} style={{ color: '#fff' }}>
								<el.Icon />
							</a>
						);
					})}
				</div>
			</div>

			<ul className={style.list}>
				{LINKS_NAV.map(el => {
					return (
						<li key={el.slug}>
							<Link to={el.url} onClick={() => window.scroll(0, 0)}>
								{language === 'EN' ? el.nameEN : el.nameRU}
							</Link>
						</li>
					);
				})}
			</ul>

			<div className={style.contact}>
				{LINKS_FOOTER.map((el, idx) => {
					return (
						<div key={idx}>
							<a href={el.url} style={{ color: '#fff' }}>
								<el.Icon />
							</a>{' '}
							<Description>{el.description}</Description>
						</div>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
