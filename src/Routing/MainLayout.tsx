import Footer from '../components/Footer';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div
			className='container'
			style={{
				width: '90%',
				margin: '55px auto 0 auto',
				minHeight: '110vh',
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column'
			}}
		>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
