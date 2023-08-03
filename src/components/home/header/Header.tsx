import style from './Header.module.scss';
import HeadingHeader from './HeadingHeader';
import ImageHeading from './ImageHeading';

const Header = () => {
	return (
		<header className={style.header}>
			<ImageHeading />
			<HeadingHeader />
		</header>
	);
};

export default Header;
