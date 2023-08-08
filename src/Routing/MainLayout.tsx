import Footer from '../components/footer/Footer';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';
import UpButton from '../UI/UpButton';

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
