import { useContext } from 'react';
import Button from '../../../UI/Button';
import Description from '../../../UI/Description';
import { LanguageContext } from '../../../providers/LanguageProvider';
import style from './Header.module.scss';
import HeadingHeader from './HeadingHeader';
import ImageHeading from './ImageHeading';

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
					<Button>{language === 'RU' ? 'Связаться' : 'Contact'}</Button>
					<div className={style.download}>
						<Button>
							{language === 'RU' ? 'Скачать резюме' : 'download resume'}
						</Button>
						<Description>.pdf</Description>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
