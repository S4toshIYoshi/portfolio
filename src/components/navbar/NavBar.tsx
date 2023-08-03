import Logo from '../../UI/Logo';
import Switcher from '../../UI/Switcher';
import style from './NavBar.module.scss';
import Menu from './Menu';

const Header = () => {
	return (
		<nav className={style.nav}>
			<Logo />
			<Menu />
			<Switcher first='RU' last='EN' action={() => console.log('switch')} />
		</nav>
	);
};

export default Header;
