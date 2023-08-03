import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div
			className='container'
			style={{ width: '90%', margin: '55px auto 115px auto' }}
		>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
