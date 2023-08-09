import { useContext } from 'react';
import Button from '../../UI/Button';
import Description from '../../UI/Description';
import { LanguageContext } from '../../../providers/LanguageProvider';
import style from './Header.module.scss';
import HeadingHeader from './HeadingHeader';
import ImageHeading from './ImageHeading';
import { Link } from 'react-router-dom';
import resume from '../../../data/download/Kroshechkin_Nikolay.pdf';
import MainButton from '../../shared/mainButton/MainButton';

const Header = () => {
	const { language } = useContext(LanguageContext);

	return (
		<header className={style.header}>
			<div className={style.buttonModile}>
				<MainButton />
			</div>
			<ImageHeading />
			<div className={style.wrapper}>
				<HeadingHeader />
				<div className={style.button}>
					<MainButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
