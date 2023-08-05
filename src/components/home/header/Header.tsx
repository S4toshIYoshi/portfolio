import { useContext } from 'react';
import Button from '../../../UI/Button';
import Description from '../../../UI/Description';
import { LanguageContext } from '../../../providers/LanguageProvider';
import style from './Header.module.scss';
import HeadingHeader from './HeadingHeader';
import ImageHeading from './ImageHeading';
import { Link } from 'react-router-dom';
import resume from '../../../data/download/Kroshechkin_Nikolay.pdf';

const Header = () => {
	const { language } = useContext(LanguageContext);

	return (
		<header className={style.header}>
			<div className={style.buttonModile}>
				<Button>{language === 'RU' ? 'Связаться' : 'Contact'}</Button>
				<div className={style.download}>
					<Button>
						{language === 'RU' ? 'Скачать резюме' : 'download resume'}
					</Button>
					<Description>.pdf</Description>
				</div>
			</div>
			<ImageHeading />
			<div className={style.wrapper}>
				<HeadingHeader />
				<div className={style.button}>
					<Button>
						<Link to='/contact' style={{ color: '#fff' }}>
							{language === 'RU' ? 'Связаться' : 'Contact'}
						</Link>
					</Button>
					<div className={style.download}>
						<Button>
							<a
								href={resume}
								download='Nikolay_Kroshechkin'
								style={{ color: '#fff' }}
							>
								{language === 'RU' ? 'Скачать резюме' : 'download resume'}
							</a>
						</Button>
						<Description>.pdf</Description>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
