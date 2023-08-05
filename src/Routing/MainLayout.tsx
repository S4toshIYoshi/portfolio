import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';

const MainLayout = () => {
	return (
		<div className={style.container}>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
