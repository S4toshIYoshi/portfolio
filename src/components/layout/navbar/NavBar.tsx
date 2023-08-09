import Logo from '../../UI/Logo';
import Switcher from '../../UI/Switcher';
import style from './NavBar.module.scss';
import Menu from './Menu';
import Burger from './Burger';

const Header = () => {
	return (
		<nav className={style.nav}>
			<div className={style.wrapperLogo}>
				<Logo />
			</div>

			<div className={style.normal}>
				<Menu />
				<Switcher
					className={style.switcher}
					first='RU'
					last='EN'
					action={() => console.log('switch')}
				/>
			</div>

			<Burger />
		</nav>
	);
};

export default Header;
