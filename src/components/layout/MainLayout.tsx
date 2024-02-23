import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import { Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';
import UpButton from './UpButton';
import NotificationNoUpdate from '../shared/NotifWindow/NotificationNoUpdate';

const MainLayout = () => {
	return (
		<div className={style.container}>
			<NotificationNoUpdate />
			<NavBar />
			<Outlet />
			<UpButton />
			<Footer />
		</div>
	);
};

export default MainLayout;
