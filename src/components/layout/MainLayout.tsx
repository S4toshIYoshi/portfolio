import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';
import UpButton from './UpButton';

const MainLayout = () => {
	return (
		<div className={style.container}>
			<NavBar />
			<Outlet />
			<UpButton />
			<Footer />
		</div>
	);
};

export default MainLayout;
